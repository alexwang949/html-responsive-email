
// var findEnv = moreBorg.getActivePackageId();

//prod qa
//qa: "https://author.aem.gene.com/services/imsafe.html/erivedge/hcp/",
var findEnv = "9fade22624c711e4957512313907494d.scrollmotion";

var packageIds = {

    stagingEnv: {
        qa: "4e668e3e7eae11e6b5830ea73d77f543.scrollmotion",
        prod: "65c8ef4a7eae11e6a1f60ea73d77f543.scrollmotion"
    },
                
    prodEnv: {
        qa: "9fade22624c711e4957512313907494d.scrollmotion",
        uat: "9a7b28ba12a511e487aa22000ae62ae5.scrollmotion",
        prod: "1891fa5c10be11e39b1b22000aa83447.scrollmotion"
    }

};

var baseUrls = {

    //Melt Media testing
    stagingEnv: {
        qa: "https://author-genentech-stage.adobecqms.net/services/imsafe.html/erivedge/hcp-idetail/",
        prod: "https://genentech-stage.adobecqms.net/services/imsafe.html/erivedge/hcp-idetail/"
    },

    //Prod
    prodEnv: {
        qa: "https://author.aem.gene.com/services/imsafe.html/erivedge/hcp/",
        prod: "https://aem.gene.com/services/imsafe.html/erivedge/hcp/"
    }
    
};

//** Manually change isProd boolean to match PROD or STAGING(Melt Media) scenario.
//** Set isProd to FALSE if in STAGING.
var isProd = true;
var baseUrl;

//Apply appropriate base URL
if (isProd === false) {

    switch (findEnv) {
        case packageIds.stagingEnv.qa:
            baseUrl = baseUrls.stagingEnv.qa;
            break;
        case packageIds.stagingEnv.prod:
            baseUrl = baseUrls.stagingEnv.prod;
            break;
    }

} else {

    switch (findEnv) {
        case packageIds.prodEnv.qa:
            baseUrl = baseUrls.prodEnv.qa;
            break;
        case packageIds.prodEnv.prod:
            baseUrl = baseUrls.prodEnv.prod;
            break;
    }

};

//Refactored version of above.
// if (isProd === false) {
//     baseUrl = (findEnv == packageIds.stagingEnv.qa) ? baseUrls.stagingEnv.qa : baseUrls.stagingEnv.prod;
// } else {
//     baseUrl = (findEnv == packageIds.prodEnv.qa) ? baseUrls.prodEnv.qa : baseUrls.prodEnv.prod;
// };

borg.log("FIND ENV: " + findEnv);
borg.log("BASE URL: " + baseUrl);

var persistentItem,
    webviewId,
    promisesDone,
    url;

var snippetArr = [
    "HCP_embryo_fetal_toxicity",
    "HCP_indication",
    "HCP_female_patients",
    "HCP_male_patients",
    "HCP_blood_donation",
    "HCP_semen_donation",
    "HCP_lactation",
    "HCP_report_adverse_reactions",
    "HCP_please_see_line"
];

var allPromises = [];

var pulledSafetyData = [];


    for ( i = 0; i < snippetArr.length; i++) {

        url = baseUrl + snippetArr[i];

        switch (snippetArr[i]) {
            case "HCP_embryo_fetal_toxicity": 
                persistentItem =  "safetyData.embryoFetalToxicity";
                webviewId = "embryo";
                break;
            case "HCP_indication": 
                persistentItem =  "safetyData.indication";
                webviewId = "indication";
                break;
            case "HCP_female_patients": 
                persistentItem =  "safetyData.femalePatients";
                webviewId = "female";
                break;
            case "HCP_male_patients": 
                persistentItem =  "safetyData.malePatients";
                webviewId = "male";
                break;
            case "HCP_blood_donation": 
                persistentItem =  "safetyData.bloodDonation";
                webviewId = "blood";
                break;
            case "HCP_semen_donation": 
                persistentItem =  "safetyData.semenDonation";
                webviewId = "semen";
                break;
            case "HCP_lactation": 
                persistentItem =  "safetyData.lactation";
                webviewId = "lactation";
                break;
            case "HCP_report_adverse_reactions": 
                persistentItem =  "safetyData.reportAdverseReactions";
                webviewId = "report-adverse";
                break;
            case "HCP_please_see_line": 
                persistentItem =  "safetyData.pleaseSeeLine";
                webviewId = "please";
                break;
        };

        allPromises.push(getSafetyData(persistentItem, webviewId));
        
    };

    promisesDone = Q.all(allPromises);

    promisesDone.then(function () {

        helperMethod.domManipulation.insertAfter();

        SM.runAction(
            {
                "action": "close",
                "trigger": "now",
                "target": "spinner_container"
            }
        );

        SM.log('OMG PROMISES COMPLETE');

    });

    function getSafetyData (persistentItem, webviewId) {

        var deferred = Q.defer();

        SM.ajax(url, {
            type: "GET",
            dataType: "text",
            success: function (data) {
                var safetyData = data;
                SM.setPersistentItem(persistentItem, safetyData);
                document.getElementById(webviewId).innerHTML = safetyData; 
                deferred.resolve("Pulled data");
            },

            error: function (data, err) {

                borg.log("AJAX ERR")
                var offlineSafetyHTML = SM.getPersistentItem(persistentItem);

                if (typeof offlineSafetyHTML === 'undefined' || offlineSafetyHTML === null) {
                    helperMethod.ajaxHandlers.handleErr();
                } else {
                    document.getElementById(webviewId).innerHTML = offlineSafetyHTML;
                }

                deferred.resolve("persistent data used");
            }

        });

        return deferred.promise;

    };


var helperMethod = {

    ajaxHandlers: {

        //TODO: refactor using this function
        handleSuccess: function(data, deferred) {
            var safetyData = data;
            SM.setPersistentItem(persistentItem, safetyData);
            document.getElementById(webviewId).innerHTML = safetyData; 
            deferred.resolve("Pulled data");
        },

        handleErr: function() {
            borg.log('handleErr Function called!')
            moreBorg.close('dynamicSafetyWebview');
        }
        
    },

    //methods for DOM(fast'n furious 4 lyfe!) manipulation
    domManipulation: {

        appendChild: function() {
            var before = document.body.querySelector("#please");
            var target = document.body.querySelector("#report-adverse p");
            before.appendChild(target);
        },

        insertAfter: function() {
            var before = document.body.querySelector(".report-adverse-wrapper");
            var target = document.body.querySelector("#report-adverse p");
            target.classList.add('you-may');
            before.parentNode.insertBefore(target, before.nextSibling);
        }
        
    }

};

