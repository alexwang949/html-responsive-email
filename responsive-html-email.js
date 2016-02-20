var subjectString = "urgent!";
var minifiedContent = "<!DOCTYPE html PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN' 'http://www.w3.org/TR/html4/loose.dtd'> <head> <meta http-equiv='Content-Type' content='text/html; charset=utf-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'/> <meta name='viewport' content='width=device-width, initial-scale=1.0'/> <title></title> <style type='text/css'> /* iPad styles */ @media screen and (min-width: 737px){table[class='content']{width: 149px !important; background-color: #FF0000;}table[class='hidden-content']{display: inline-block !important; width: 149px !important; border-collapse: collapse !important; background-color: #00FF00; text-align: center;}table[class='contenttable']{width: 448px !important;}}</style> </head> <body> <table align='center' width='280' border='0' cellpadding='0' cellspacing='0' class='contenttable'> <tr> <td align='center'> <p class='main-header'>Welcome to your Custom Business Solution</p><p class='sub-header'>Apps are changing the way that people do business. Based on what you've told us, here are solutions that might help you...</p></td></tr><tr> <td> <table class='content' width='140' border='0' cellspacing='0' cellpadding='' align='left' style=''> <tr> <td align='center' style='padding: 0px 0px 0px 0px'> <img src='http://placehold.it/70x70'> <p class='product-title'>Title</p><p class='product-description'>Product description</p><a class='link-format' href='#'>Email Us ></a> <a class='link-format website-link-space' href='#'>Website ></a> </td></tr></table> <table class='content' width='140' border='0' cellspacing='0' cellpadding='' align='left' style=''> <tr> <td align='center' style='padding: 0px 0px 0px 0px'> <img src='http://placehold.it/70x70'> <p class='product-title'>Title 2</p><p class='product-description'>Product description</p><a class='link-format' href='#'>Email Us ></a> <a class='link-format website-link-space' href='#'>Website ></a> </td></tr></table> <table class='hidden-content' width='149' border='0' cellspacing='0' cellpadding='' align='left' style='display: none'> <tr> <td align='center' style='padding: 0px 0px 0px 0px'> <img src='http://placehold.it/70x70'> <p class='product-title'>Title 3</p><p class='product-description'>Product description</p><a class='link-format' href='#'>Email Us ></a> <a class='link-format website-link-space' href='#'>Website ></a> </td></tr></table> </td></tr><tr> <td> <table class='content' width='140' border='0' cellspacing='0' cellpadding='' align='left' style=''> <tr> <td align='center' style='padding: 0px 0px 0px 0px'> <img src='http://placehold.it/70x70'> <p class='product-title'>Title</p><p class='product-description'>Product description</p><a class='link-format' href='#'>Email Us ></a> <a class='link-format website-link-space' href='#'>Website ></a> </td></tr></table> <table class='content' width='140' border='0' cellspacing='0' cellpadding='' align='left' style=''> <tr> <td align='center' style='padding: 0px 0px 0px 0px'> <img src='http://placehold.it/70x70'> <p class='product-title'>Title 2</p><p class='product-description'>Product description</p><a class='link-format' href='#'>Email Us ></a> <a class='link-format website-link-space' href='#'>Website ></a> </td></tr></table> <table class='hidden-content' width='149' border='0' cellspacing='0' cellpadding='' align='left' style='display: none'> <tr> <td align='center' style='padding: 0px 0px 0px 0px'> <img src='http://placehold.it/70x70'> <p class='product-title'>Title 3</p><p class='product-description'>Product description</p><a class='link-format' href='#'>Email Us ></a> <a class='link-format website-link-space' href='#'>Website ></a> </td></tr></table> </td></tr></table></body></html>"
var contentfulImages = "<html><head><title></title></head><body><img src='https://images.contentful.com/qh5sbt4kfuy4/6FP7nlKzWE0O8QsEyYWeMq/26d4b5dd8aea203dd418b59192f21d3a/img_icon_large_xero.png'><img src='https://images.contentful.com/qh5sbt4kfuy4/4IcQGBPGYwcOweugkYSGyO/bd8312576d3207c2eeed68f3ef145dbb/img_hero_xero_00.png'><img src='https://images.contentful.com/qh5sbt4kfuy4/5Ojgajpeg0cQmkkuikEyMq/0fe6fc7b55f92e6b5dd3420714f46a7b/img_icon_large_vend.png'><img src='https://images.contentful.com/qh5sbt4kfuy4/2wuqPRApSY8cMUciSiGkGC/c7a40b6257decb6345420c458de2c627/img_hero_vend_00.png'><img src='https://images.contentful.com/qh5sbt4kfuy4/2t2ZvIPmT6O6oqQSqIYokU/ff44136311560ced1531105f114c1bc6/img_icon_large_scrollmotionenterpriseplatform.png'><img src='https://images.contentful.com/qh5sbt4kfuy4/cuyiLOJlMkQGO4EQ264eO/c40faa8fb6b01c7776623fccbca7bdff/img_hero_scrollmotionenterpriseplatform_00.png'></body></html>"

function spawnOverlay(overlayId) {

    var spawnAction = {
        "action": "#spawnOnce",
        "trigger": "now",
        "data": {
            "overlayId": overlayId,
            "text": minifiedContent,
            "subject": subjectString
        }
    }
    borg.runAction(spawnAction);
};


var solutionsObject = {
    "solu0020": {
        "solutionId": "solu0020",
        "solutionName": "Casper Suite",
        "shortDescription": "Apple Device Management",
        "overviewDescription": "The best-of-breed solution for managing Apple devices, the Casper Suite is comprehensive Mac and iOS management with simplified enrollment, security, and app distribution.",
        "coreCompetencies": [
            "comp0026",
            "comp0021",
            "comp0033"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Via Transportation",
        "customerTestimonial1": "Via needed an easy and scalable solution to deploy apps, settings, and content to their fast-growing driver base, where they were adding over 100 iPads in the field per month.",
        "customerHeadline2": "Counsyl",
        "customerTestimonial2": "Because Counsyl’s workforce is mainly in the field, it can be difficult to touch each device. Self Service is an easy way for their team to stay updated and get software they need.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "caspersuite",
        "emailContact": "",
        "website": "",
        "companySize": "1, 2, 3, 4,",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/30WC07LoS4uemcKgG2eC8M/efe0bc3f6d9b3d9ec29944371bd1dc3f/img_icon_large_caspersuite_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/1eGfq52CCseGeg24ukswgK/e76bac558f3a93bf6e0b0837ada98f5c/img_hero_caspersuite_01_2x.png",
        "faqs": [{
            "question": "How does the Casper Suite provide more management capabilities for Apple devices than a standard MDM solution?",
            "answer": "The Casper Suite is built for the Apple platform only. That means it supports Apple-centric technologies on iPad, iPhone, and Mac.  For everything from DEP, VPP, and iBeacons to Global Service Exchange and Apple-native security technologies, the Casper Suite delivers a platform-specific best-of-breed solution with features that are not based on approximations of other platform technologies.  Engineered by JAMF software, Casper Suite has been a leading Apple management solution since 2002, resulting in the most comprehensive MDM solution available for business."
        }, {
            "question": "How does the Casper Suite work in a Windows centric environment?",
            "answer": "The Casper Suite integrates directly with SCCM and Altiris, world-class directory services (including ActiveDirectory), enterprise standard certificates, and Exchange, including ActiveSync, while maintaining Apple-only management capabilities."
        }, {
            "question": "How does the Casper Suite integrate with Apple to provide additional capabilities?",
            "answer": "The Casper Suite integrates with Apple’s Device Enrollment Program (DEP) and Volume Purchase Program (VEP), FileVault 2, Software Update Server, GSX, iBeacon, Configurator, and Activation Lock to provide robust enrollment, deployment, and security capabilities - all of which are unique to the Apple platform."
        }, {
            "question": "What is JumpStart, and is it required?",
            "answer": "JumpStart is a professional services training and technical setup engagement (most frequently delivered on-site with a customer) that ensures a smooth installation and seamless integration into an existing and unique environment.  Customers purchasing the Casper Suite for Mac OS X or iOS for the first time are required to purchase JumpStart to ensure a successful implementation."
        }, {
            "question": "How much does Casper Suite cost?",
            "answer": "Businesses can purchase the Casper Suite in two ways: On-premise (perpetual license & annual maintenance) and Cloud-hosted (annual subscription). Additionally, Jumpstart is required for every new deployment. For a specific pricing estimate, visit www.jamfsoftware.com/products/casper-suite/pricing."
        }]
    },
    "solu0027": {
        "solutionId": "solu0027",
        "solutionName": "Flint",
        "shortDescription": "Accept Credit Cards, No Dongles",
        "overviewDescription": "Flint is the mobile payments solution that enables secure credit card processing at incredibly low rates without a card reader. Get paid quickly, easily, anywhere.",
        "coreCompetencies": [
            "comp0028",
            "comp0020"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Sonoma Forge",
        "customerTestimonial1": "Sonoma Forge plumbing fixtures uses Flint to enable its entire mobile workforce to easily accept credit cards on the spot using their smartphones. No hardware to buy or maintain.",
        "customerHeadline2": "Corrine Weddings",
        "customerTestimonial2": "Corrine Weddings chose Flint because they were tired of losing card readers. They wanted straightforward pricing, free client invoicing, and loyalty tools to drive repeat business.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "flint",
        "emailContact": "",
        "website": "https://www.flint.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/16x7ANp5UYeY4aoSmCc2gU/9cbb4cfcb281a1c3b05a68badf2eb89e/img_icon_large_flint_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/1ALnfNmAc4WMO2MmsUO6Aa/e13ab31e42aa7903f478b0d6494c80df/img_hero_flint_01_2x.png",
        "faqs": []
    },
    "solu0008": {
        "solutionId": "solu0008",
        "solutionName": "Expensify",
        "shortDescription": "Automated Expense Reports",
        "overviewDescription": "Take a picture of a receipt and Expensify creates and submits an expense report automatically. Solo-prenuers or Fortune 500, Expensify makes expense reports simple.",
        "coreCompetencies": [
            "comp0014"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Tough Mudder",
        "customerTestimonial1": "Expensify replaces receipt tracking and totalling with on-the-go reporting and international currency support. Despite a globally dispersed team, Tough Mudder's expenses are still simple.",
        "customerHeadline2": "Yahoo",
        "customerTestimonial2": "WIth just a picture of a receipt, Yahoo's employees are finished with reports and back to work. For finance teams, an automated process eliminates errors, allowing for faster accounting.",
        "templateLayout": "ipad-portrait",
        "assetDirectoryId": "expensify",
        "emailContact": "",
        "website": "https://www.expensify.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/1OsJwMYkr2WmAa6mqmA0YQ/71f99f26e85fc020cd62795808c14ad3/img_icon_large_expensify_x2.png.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/1aP2nbCiMQSW6WO2GUEyim/662b055338fb0a1f181b31d3c3d14621/img_hero_expensify_01_2x.png",
        "faqs": []
    },
    "solu0056": {
        "solutionId": "solu0056",
        "solutionName": "ShopKeep",
        "shortDescription": "iPad as a cash register",
        "overviewDescription": "ShopKeep turns iPad into a cash register by providing point-of-sale hardware and cloud-based software to independent businesses across North America.",
        "coreCompetencies": [
            "comp0028",
            "comp0031"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "shopkeep",
        "emailContact": "",
        "website": "http://www.shopkeep.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/rJJypRbkfQqYuyYwqI2qC/99c3092c0dd9fc59b0e15319eaa6e3f0/img_icon_large_shopkeep_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/2s8UfSMxRSwSkUiiGoAkwK/12abff3ed833a6978bbd2881529ff6cd/img_hero_shopkeep_01_2x.png",
        "faqs": []
    },
    "solu0037": {
        "solutionId": "solu0037",
        "solutionName": "ServiceM8",
        "shortDescription": "Field Service Management",
        "overviewDescription": "Powerful field service management for any small business; win more work, look more professional and boost cash flow, while delivering better service and staying in control.",
        "coreCompetencies": [
            "comp0015",
            "comp0022",
            "comp0012",
            "comp0020"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Hilltop Refrigeration",
        "customerTestimonial1": "Hilltop Refrigeration has been able to boost revenue and take on more jobs without being in the office to log calls, dispatch technicians or manage administrative tasks.",
        "customerHeadline2": "Ruby Electrical",
        "customerTestimonial2": "Ruby Electrical uses ServiceM8 to manage all customer jobs, field staff and client communications. Invoices sync with Xero accounting, freeing backoffice time for more jobs.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "servicem8",
        "emailContact": "",
        "website": "https://www.servicem8.com/us/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": false,
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/69LDFENnwWiMgak4mUmeCU/705a3529b5171eb016429c0524917d99/img_icon_large_servicem8_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/6G2zfANNXqWmq2OO4GgIMi/f0347ed1c6aaf3ee863d0edd493fd6c1/img_hero_servicem8_01_2x.png",
        "faqs": []
    },
    "solu0061": {
        "solutionId": "solu0061",
        "solutionName": "EventBoard",
        "shortDescription": "Book a room at the office",
        "overviewDescription": "EventBoard provides businesses conference room management software enabling employees to easily make reservations while providing analytics to managers to plan space efficiency.",
        "coreCompetencies": [
            "comp0013",
            "comp0037"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "eventboard",
        "emailContact": "",
        "website": "https://eventboard.io/",
        "companySize": "1,2,3,4",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/4YV4a7GV7yMkkKWq4IyCIY/61d9cc0dfd9ad54895b8e9663cfab05c/img_icon_large_eventboard_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/c75tjRlRaSkAq6y22A0YS/cb0bde44192634878c49d5083eed4d61/img_hero_eventboard_01_2x.png",
        "faqs": []
    },
    "solu0053": {
        "solutionId": "solu0053",
        "solutionName": "PlanGrid",
        "shortDescription": "Construction collaboration",
        "overviewDescription": "PlanGrid offers a solution for the construction industry that allows contractors and architects to collaborate on project plans and site specs, and share images on iPad.",
        "coreCompetencies": [
            "comp0025"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Name 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "plangrid",
        "emailContact": "",
        "website": "https://www.plangrid.com/en",
        "companySize": "1,2,3,4",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/4pVHnjujT24i8WMkCAm2K2/188c8143cec1ac887fc70eb82d61d437/img_icon_large_plangrid_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/499x7HwZW8EmIkE4qYyEQM/55b95a5f57ea2d47bdb7723ceecbd7f1/img_hero_plangrid_01_2x.png",
        "faqs": []
    },
    "solu0032": {
        "solutionId": "solu0032",
        "solutionName": "Physitrack",
        "shortDescription": "Digital Therapeutics",
        "overviewDescription": "A global leader in digital therapeutics, Physitrack enables healthcare and wellness practitioners to efficiently prescribe clinical home exercises and track adherence.",
        "coreCompetencies": [
            "comp0007"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "St George's Hospital",
        "customerTestimonial1": "The leading London public healthcare institution uses Physitrack in clinical areas such as orthopaedics and neurology as well as in research and education.",
        "customerHeadline2": "Fysergo",
        "customerTestimonial2": "Corporate healthcare provider Fysergo, formerly part of Royal Dutch Shell, has hundreds of therapists using Physitrack for musculoskeletal rehab as well as corporate wellness.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "physitrack",
        "emailContact": "",
        "website": "https://www.physitrack.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/64sampClwWiQC46kW2KuSI/be456ce6fc454f05908a06f1ab4b6d62/img_icon_large_physitrack_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/5G9PsNRWSci4oQqYMcCuQQ/99fe123f008209403c28e9ead21866b1/img_hero_physitrack_01_2x.png",
        "faqs": []
    },
    "solu0009": {
        "solutionId": "solu0009",
        "solutionName": "Flypay",
        "shortDescription": "Hospitality transaction management",
        "overviewDescription": "Flypay allows users to review, split, and pay their bill without needing to find a server allowing restaurants and bars to speed up table turns, and increase customer satisfaction.",
        "coreCompetencies": [
            "comp0029"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "flypay",
        "emailContact": "",
        "website": "http://flypay.it/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/1571KaxTLwGk02IuQOAeYK/683776c32c9d4d8e4428d1746030a1f3/img_icon_large_flypay_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/2JVBvK8GDKc0wkwwQOCgeI/8780313ce7c0f209302c3383797349ed/img_hero_flypay_01_2x.png",
        "faqs": []
    },
    "solu0034": {
        "solutionId": "solu0034",
        "solutionName": "ScrollMotion",
        "shortDescription": "Interactive Content Creation",
        "overviewDescription": "ScrollMotion Enterprise Platform provides an end-to-end solution for companies to create and distribute applike experiences for iPads and iPhones — without programming.",
        "coreCompetencies": [
            "comp0001",
            "comp0006",
            "comp0005",
            "comp0032"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Making sales easier",
        "customerTestimonial1": "\r\nScrollMotion customer Mary Kay told the Wall Street Journal that tablets have changed the way its sales consultants sell, handing devices to customers. “That really helps make the sale easier.”",
        "customerHeadline2": "Winning new business",
        "customerTestimonial2": "One customer replaced a sales library of 500 PowerPoint slides with ScrollMotion content on iPads, then revisited prospects they hadn’t been able to sell. The result: $10 million in new business.",
        "templateLayout": "",
        "assetDirectoryId": "scrollmotionenterpriseplatform",
        "emailContact": "frank.blau@scrollmotion.com",
        "website": "https://www.scrollmotion.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": false,
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/42iy50ImukykUuiYcUOQo/482a05f4c9f19f81977f9bb34cc450e0/img_icon_large_scrollmotionenterpriseplatform_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/2TMbYpCKrYY2eccesgAEMs/ddfdcc337098a50798f81a9d2b16f480/img_hero_scrollmotionenterpriseplatform_01_2x.png",
        "faqs": []
    },
    "solu0065": {
        "solutionId": "solu0065",
        "solutionName": "Zunos",
        "shortDescription": "Train and motivate employees",
        "overviewDescription": "Zunos is a powerful, easy-to-use mobile app that enables organizations to engage, train, and motivate mobile workforces wherever they’re located.",
        "coreCompetencies": [
            "comp0032",
            "comp0006",
            "comp0038"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "zunos",
        "emailContact": "",
        "website": "http://www.zunos.com/",
        "companySize": "1,2,3,4",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/1kFlRd3bq8IIwoAqe0g00u/025b184d3da50df3fb8a98831ba8a151/img_icon_large_zunos_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/2Mhf64QNo4GSWc4qEs00ei/8f776485392de27b626045366e24cab5/img_hero_zunos_01_2x.png",
        "faqs": []
    },
    "solu0059": {
        "solutionId": "solu0059",
        "solutionName": "Analytics",
        "shortDescription": "Mobile business analytics",
        "overviewDescription": "Analytics helps businesses make sense of large data sets, get answers in an instant, build stunning visualizations, and ensure accuracy securely, at any scale, and on the go.",
        "coreCompetencies": [
            "comp0038"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "roambianalytics",
        "emailContact": "",
        "website": "",
        "companySize": "1,2,3,4",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "",
        "emailHeroUrl": "",
        "faqs": []
    },
    "solu0054": {
        "solutionId": "solu0054",
        "solutionName": "SafetyCulture",
        "shortDescription": "Manage safety effortlessly ",
        "overviewDescription": "SafetyCulture is a mobile safety management system  designed for the worker first, providing an excellent mobile experience for reporting and analytics.",
        "coreCompetencies": [
            "comp0037"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "safetyculture",
        "emailContact": "",
        "website": "http://www.safetyculture.io/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/31LuFbmtVKAkaASAgYKuwG/6f2af86731d82bbe4faf6c2c8bbb373b/img_icon_large_safetyculture_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/2PPK4h76ko6uEQQYyocU0O/977799656f9d17e4ce087feea8591e58/img_hero_safetyculture_01_2x.png",
        "faqs": []
    },
    "solu0001": {
        "solutionId": "solu0001",
        "solutionName": "AppXpres",
        "shortDescription": "Bring Your App to Life",
        "overviewDescription": "AppXpress is a simple, pay-for-results crowdsourcing solution that taps into 800,000+ developers, UI/UX, and design experts who compete to bring your mobile app idea to life.",
        "coreCompetencies": [
            "comp0001",
            "comp0008"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Mobius",
        "customerTestimonial1": "When Mobius wanted to take the UI of their Jibe! app to the next level, they chose AppXpress to harness the power of the crowd and generate multiple designs in just two weeks.",
        "customerHeadline2": "Facing a deadline to develop an app prototype, Infront tapped into the power of crowdsourcing through AppXpress to quickly obtain multiple design options and speed time-to-market.",
        "customerTestimonial2": "",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "appxpres",
        "emailContact": "",
        "website": "",
        "companySize": "1, 2, 3, 4,",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/2tA2ROMh6c4w4WOSCWE0yO/397ec87ea0512c5589b13b8cdf1d952a/img_icon_large_appxpres_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/3vsKlEFt600mmQKYKGGiu0/c0d0c252fa16766d1abaf6d2923dd27a/img_hero_appxpres_01_2x.png",
        "faqs": []
    },
    "solu0036": {
        "solutionId": "solu0036",
        "solutionName": "MailChimp",
        "shortDescription": "Improve marketing communications",
        "overviewDescription": "MailChimp empowers businesses to send marketing emails, messages, and targeted campaigns, and offers detailed reporting tools that help businesses improve their communications.",
        "coreCompetencies": [
            "comp0024"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "mailchimp",
        "emailContact": "",
        "website": "http://mailchimp.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/5riYU3bg2caGISGSyKIkaA/20cb4d1c9c362d06922cb4f522a3f398/img_icon_large_mailchimp_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/7IKQu1Sfvimy6k6msI42A6/276557242242f0334dcd978ab9b4a415/img_hero_mailchimp_01_2x.png",
        "faqs": []
    },
    "solu0007": {
        "solutionId": "solu0007",
        "solutionName": "Docusign",
        "shortDescription": "Sign and send documents",
        "overviewDescription": "DocuSign provides a simple and secure way to electronically sign and return documents.",
        "coreCompetencies": [
            "comp0010",
            "comp0009"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "docusign",
        "emailContact": "",
        "website": "https://www.docusign.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/6YaOByz3XOC2cWkkqe6gAq/0e99356fd1dd6bc8770bcb675ed87fb5/img_icon_large_docusign_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/1WEJe9OoIkUYMeiAecAw42/82164e9dbdb91bd4bca4680aaad32f4c/img_hero_docusign_01_2x.png",
        "faqs": [{
            "question": "What results can I expect from DocuSign?",
            "answer": "DocuSign brings rapid results and reduces costs, leading to extraordinary return on investment. Customers see immediate value with DocuSign in cost savings, productivity improvements, customer satisfaction, and revenue gains."
        }, {
            "question": "What type of companies use DocuSign?",
            "answer": "DocuSign has over 100,000 customers and 50 million users globally. Customers range from small and medium businesses to Fortune 500 companies across all industries. "
        }, {
            "question": "In which use cases can customers use DocuSign?",
            "answer": "DocuSign is typically used in a workflow or business process that involves approvals, sign offs, or signatures.  DocuSign allows customers to take those workflows on the go. A sample use case would be sales representatives or field agents closing contracts in the field."
        }, {
            "question": "Does DocuSign have APIs and a native iOS SDK?",
            "answer": "Yes, DocuSign has a full set of APIs and an iOS SDK to help customers customize a mobile workflow when necessary."
        }, {
            "question": "Are DocuSign electronic signatures legally binding?",
            "answer": "Electronic signatures are legally binding in the United States, the United Kingdom, and many other countries. DocuSigned documents also come with a full audit trail and a tamper-proof virtual seal of the signed document(s)."
        }, {
            "question": "Is DocuSign secure?",
            "answer": "Yes, DocuSign meets and exceeds the most stringent U.S. and global security standards.  DocuSign is ISO 27001-certified and SSAE 16-certified (SOC 1 and SOC 2) and tested across the entire company, including data centers."
        }, {
            "question": "What iOS devices does DocuSign support?",
            "answer": "DocuSign supports iPhone models 4s and higher, and supports iPad models 2 and higher."
        }, {
            "question": "How much does DocuSign cost?",
            "answer": "DocuSign offers various pricing plans. For more details, visit www.docusign.com/products-and-pricing "
        }, {
            "question": "Can someone help implement DocuSign in my business?",
            "answer": "In many cases, DocuSign is very simple to implement. For more complex cases, DocuSign has a world-class professional services team who can help customers get up and running quickly."
        }]
    },
    "solu0005": {
        "solutionId": "solu0005",
        "solutionName": "Deputy",
        "shortDescription": "Intelligent Employee Management",
        "overviewDescription": "The cloud-based solution that businesses in all industries can use\r\nto schedule employees, track employee time and attendance, and improve workplace\r\ncommunication.",
        "coreCompetencies": [
            "comp0012",
            "comp0035"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "We Dog Care",
        "customerTestimonial1": "We Dog Care\r\nSan Jose's favourite dog daycare use Deputy to schedule their part-time employees, easily find replacements when someone is unable to work, and share news with their team.",
        "customerHeadline2": "San Churro",
        "customerTestimonial2": "This Australian chocolateria use Deputy across 40+ stores to schedule and record the hours of over 1000 employees. Everyone knows where they’re working and their tasks for each day",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "deputy",
        "emailContact": "",
        "website": "http://www.deputy.com/",
        "companySize": "1, 2, 3, 4,",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/26rwtzlB8MUgiKYMG00IiS/41ab26aba1ff8487e8a4668926787271/img_icon_large_deputy_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/55Y8ERrykMgSu0eEWQkiIQ/b3581eaf138c6e6f3f3738c81793b754/img_hero_deputy_01_2x.png",
        "faqs": [{
            "question": "What different types of businesses use Deputy?",
            "answer": "Any business that has hourly paid employees can use Deputy, whether they employee five employees or five-hundred."
        }, {
            "question": "Does Deputy integrate with other business solutions? ",
            "answer": "Yes, Deputy integrates with point of sale solutions, payroll solutions as well as many other productivity solutions. For a full list, visit www.deputy.com/add-ons."
        }, {
            "question": "Does Deputy integrate with non-cloud or outsourced payroll solutions?",
            "answer": "Yes, Deputy can produce a timecard export file that is compatible with all major industry payroll solutions."
        }, {
            "question": "How does Deputy integrate with point-of-sale solutions?",
            "answer": "Deputy can import sales traffic from a number of different point-of-sale solutions allowing businesses to optimize staff schedules based on demand, reducing costs, and maximizing revenue."
        }, {
            "question": "How much does Deputy cost? ",
            "answer": "Deputy is very cost efficient.  For detailed pricing, visit www.deputy.com/pricing."
        }, {
            "question": "Can the Deputy Kiosk app work without an internet connection?",
            "answer": "Yes, Deputy Kiosk will operate offline.  When the kiosk comes back online, all data will automatically sync with Deputy."
        }, {
            "question": "How do employees begin and end shifts?",
            "answer": "Three different ways. The Deputy Kiosk for iPad, using face detection, the Deputy iPhone app, using geo-location technology, or by accessing Deputy through any web browser."
        }, {
            "question": "Is Deputy just a scheduling tool?",
            "answer": "No, Deputy is a scheduling, time and attendance, and communication platform, however businesses can use Deputy for any one of these tasks."
        }, {
            "question": "Does Deputy work with a flexible workforce or seasonal business? ",
            "answer": "Deputy has a Flexi plan that is perfect for businesses with a fluctuating number of employees. For more details, visit www.deputy.com/pricing."
        }]
    },
    "solu0026": {
        "solutionId": "solu0026",
        "solutionName": "FinalCad",
        "shortDescription": "Building lifecycle management",
        "overviewDescription": "FinalCAD is an innovative mobile solution covering the complete lifecycle of a building for contractors, general contractors, site managers, and architects.",
        "coreCompetencies": [
            "comp0025"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "finalcad",
        "emailContact": "",
        "website": "http://www.finalcad.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/6kfRohfR6MscUck8AOOsci/f439729ec2b031357479d5a72e369f89/img_icon_large_finalcad_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/2U1rk8rKzSs6UScoM40mmi/798cb824f816974630d8513f6d8d3fe8/img_hero_finalcad_01_2x.png",
        "faqs": []
    },
    "solu0060": {
        "solutionId": "solu0060",
        "solutionName": "Beehivr",
        "shortDescription": "Engaging customer marketing",
        "overviewDescription": "Using iPad as a sales tool or kiosk, Beehivr is designed to engage customers and gather valuable information to help business make smarter decisions and increase sales.",
        "coreCompetencies": [
            "comp0024",
            "comp0015"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "beehivr",
        "emailContact": "",
        "website": "http://beehivr.com/",
        "companySize": "1,2,3,4",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/3qmcwoTqDeqoKKYcayE6E4/c2b664fd20208f7fb4624e7350c0f72a/img_icon_large_beehivr_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/5J9N6b9Qv6Wukyy68K2S2I/2fd5dcdca13626dd4413976e34c0725a/img_hero_beehivr_01_2x.png",
        "faqs": []
    },
    "solu0010": {
        "solutionId": "solu0010",
        "solutionName": "FreshBooks",
        "shortDescription": "Cloud Accounting",
        "overviewDescription": "The #1 cloud accounting software, purpose-built for service-based small business owners. With FreshBooks, you'll save time billing, get paid faster and grow your business.",
        "coreCompetencies": [
            "comp0003",
            "comp0020",
            "comp0035"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Creative Professional",
        "customerTestimonial1": "\"FreshBooks narrowed down the hours I was spending on invoicing and expenses to just minutes.”\r\n-Marina Martinez\r\nMarina Martinez Consulting",
        "customerHeadline2": "General Contractor",
        "customerTestimonial2": "“FreshBooks is incredibly intuitive to use, and saves me five to ten hours every week.”\r\n-Justin Sundling\r\nSundling and Associates, LLC",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "freshbooks",
        "emailContact": "",
        "website": "http://www.freshbooks.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://app.contentful.com/spaces/9rzhmn8ivfcp/assets/2ZfKArFpiEs20MAwa0s0ge",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/4GC8uzUAgoOgKsEYKaG2uq/d0b73bd571a864b44a2f4c5ea5705e88/img_hero_freshbooks_01_2x.png",
        "faqs": [{
            "question": "What different types of businesses or industries use FreshBooks?",
            "answer": "The most common industries for FreshBooks customers are creative and marketing, legal services, business consulting, trades and home services, and information technology. "
        }, {
            "question": "What is the typical business size of FreshBooks customers?",
            "answer": "FreshBooks customers are most often small business owners with 1-10 employees who invoice clients for their time or expertise."
        }, {
            "question": "Does FreshBooks integrate with other business solutions?",
            "answer": "Yes, FreshBooks integrates with over 50 partners to help streamline business. In addition, the FreshBooks open API allows for hundreds of custom integrations to be built by developers. For a full list of our official partners, visit www.freshbooks.com/addons."
        }, {
            "question": "How much does FreshBooks cost?",
            "answer": "FreshBooks plans are cost effective monthly subscriptions. For pricing details, visit www.freshbooks.com/pricing."
        }, {
            "question": "Is FreshBooks just an invoicing tool?",
            "answer": "No, FreshBooks is an invoicing, time tracking and expenses tracking tool. Online payment options can also be activated to help business owners get paid faster."
        }, {
            "question": "Can employees or contractors access my FreshBooks account?",
            "answer": "Yes, FreshBooks offers two different logins for either staff or contractors to collaborate with business owners anytime, and from anywhere."
        }, {
            "question": "Does FreshBooks offer any sort of automatic invoicing features?",
            "answer": "Yes, FreshBooks can help automate business through recurring invoicing and auto-billing features that charge credit cards on a pre-authorized basis. For more information, visit www.freshbooks.com/support/what-is-auto-billing."
        }, {
            "question": "With FreshBooks, is data safe and secure?",
            "answer": "Yes, all information traveling between the app or browser and FreshBooks is protected with 256-bit SSL encryption. The FreshBooks application, including user data, rests securely behind Cisco-powered firewalls."
        }, {
            "question": "How is FreshBooks different from other accounting software?",
            "answer": "FreshBooks is easy to use, made for service-based businesses, and is backed-up by a world-class support team."
        }]
    },
    "solu0041": {
        "solutionId": "solu0041",
        "solutionName": "Teamwork Retail",
        "shortDescription": "A mobile retail management suite",
        "overviewDescription": "Teamwork Retail is a POS and RMS providing an omni-channel experience for retailers and specializes in integrations, complex tax needs, and globalization services.",
        "coreCompetencies": [
            "comp0028",
            "comp0031",
            "comp0030"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "teamworkretail",
        "emailContact": "",
        "website": "http://www.teamworkretail.com/",
        "companySize": "1, 2, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/2SYKrOjMpGUoCckWiW6eqo/1acdd49b76cc9c0ac3e05174ddebd7a3/img_icon_large_teamworkretail_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/1V0nzSg9PyYwc022USIK8g/18014212d6bc5603c73395701f135113/img_hero_teamworkretail_01_2x.png",
        "faqs": []
    },
    "solu0018": {
        "solutionId": "solu0018",
        "solutionName": "Xero",
        "shortDescription": "Beautiful accounting software",
        "overviewDescription": "Xero is beautiful, easy-to-use online accounting software for small businesses and their financial advisors.",
        "coreCompetencies": [
            "comp0003",
            "comp0020",
            "comp0014"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Three Babes Bakeshop",
        "customerTestimonial1": "Great recipes, hard work, and Xero turned Three Babes Bakeshop into a sweet success. Being able to see cashflow and key financials helped with making better business decisions.",
        "customerHeadline2": "Coffee Supremee",
        "customerTestimonial2": "Coffee Supreme uses Xero to manage its day-to-day operations running a top-notch local coffee shop in Auckland, New Zealand.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "xero",
        "emailContact": "",
        "website": "https://www.xero.com/us/",
        "companySize": "1,2,3,4",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/6RvZwZiT5uikgokGoGKqCi/db6753f0ade9ab8b081aa65493de3225/img_icon_large_xero_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/1ULDz5kMSY2imaiia2CUaa/248d6400c9ba1b9b7d93dc8d323e693f/img_hero_xero_01_2x.png",
        "faqs": [{
            "question": "How much does Xero cost?",
            "answer": "Pricing varies based on region, though majority of Xero customers are on the Standard plan which is a recurring price plan, per month. Visit the Xero Pricing page for more information. "
        }, {
            "question": "Can Xero integrate with other add-on solutions?",
            "answer": "Thanks to the Add-on Marketplace, Xero can integrate with several other business solutions such as advanced solutions for CRM, inventory, e-commerce, and more."
        }, {
            "question": "Does Xero integrate with tax reporting software?",
            "answer": "Xero allows users to export data to a .CSV format, which is compatible with most tax reporting tools."
        }, {
            "question": "How do businesses begin using Xero?",
            "answer": "Xero offers a 30-day free trial with no credit card required. This free trial gives businesses full access to Xero, with the same functionality as the Standard and above pricing plans.  Alternatively, business can explore sample data through Xero's Demo Company. To begin, visit xero.com/apple."
        }, {
            "question": "How is Xero different from QuickBooks? ",
            "answer": "Xero is the cloud alternative to QuickBooks. Businesses can cut up to 50% of their QuickBooks costs for seamless accounting and payroll with no additional fees for users or features. Additionally, knowledgeable Xero experts provide award-winning 24/7 support."
        }, {
            "question": "Can I import QuickBooks data to Xero?",
            "answer": "Xero offers a free QuickBooks conversion service which allows users to import up to two fiscal years of data onto the Xero platform. Typical conversions only take about three hours. For more information, please visit the Switch from QuickBooks page."
        }, {
            "question": "How do I convert from another accounting solution (i.e. Excel, pen and paper, box of receipts, Quicken, mint.com)?",
            "answer": "Xero offers detailed help center information and videos to guide users in bulk importing of financial data. For more hands-on assistance, there are several Xero Certified Accounting Partners that also offer set-up and training services. Contact a Xero specialist for details or visit the advisor landing page."
        }]
    },
    "solu0014": {
        "solutionId": "solu0014",
        "solutionName": "ProntoForms",
        "shortDescription": "Mobile Forms Made Easy",
        "overviewDescription": "ProntoForms improves businesses productivity, quality of service and enhances compliance reporting by equipping field workers with intuitive, powerful mobile forms.",
        "coreCompetencies": [
            "comp0009"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Rentokil",
        "customerTestimonial1": "Using ProntoForms has equipped Rentokil to eliminate over 200 hours of data entry per week - reducing costs, improving productivity and quality of service.",
        "customerHeadline2": "Gulf Distributing Co.",
        "customerTestimonial2": "ProntoForms helps Gulf Distributing Co. improve their delivery efficiency, as well as their speed and quality of reporting to the office and customers.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "prontoforms",
        "emailContact": "",
        "website": "https://www.prontoforms.com/",
        "companySize": "1,2,3,4",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/4NEbFZPhRYu8iaGKOKimoG/211d5b9949aaecd1f00ca82e245b37db/img_icon_large_prontoforms_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/5yJymLgD9moscMyyig2MEG/6c512a906821f25c65e56085a59869fd/img_hero_prontoforms_01_2x.png",
        "faqs": [{
            "question": "What business processes can ProntoForms mobilize?",
            "answer": "Almost any business process, including work orders, inspections, sales orders, time-sheets, expense reports, checklists, etc. can be mobilized with ProntoForms."
        }, {
            "question": "What if I need help deploying ProntoForms in my business?",
            "answer": "ProntoForms offers extensive Deployment Services, helping any size business deploy ProntoForms in a matter of days."
        }, {
            "question": "Is my data private? ",
            "answer": "Yes. Employing the pass-through setting ensures that only transaction data is kept for the purposes of an audit trail."
        }, {
            "question": "Does the ProntoForms app work without an internet connection?",
            "answer": "Yes. Forms can be completed offline. Forms are then automatically submitted once network connectivity is restored."
        }, {
            "question": "Can I apply my own branding to forms?",
            "answer": "Yes. Custom branding allows businesses to use their own logo or header.  This feature can help enhance an organization's professional image and heighten the confidence of customers as they are completing forms."
        }, {
            "question": "How do I get the output of my forms to look exactly like my forms I use today?",
            "answer": "ProntoForms can deliver customized forms. Form output customization allows businesses to include a company logo, terms and conditions, signature, images, grids, and more."
        }, {
            "question": "Is ProntoForms expensive?",
            "answer": "When businesses take into consideration time saved in the field, eliminating duplicate data input, reduced travel time, and fuel costs for picking up or dropping off work orders,most customers experience ROI within a few days."
        }, {
            "question": "Is ProntoForms complicated?",
            "answer": "ProntoForms has a number of professional service deployment options to choose from to ensure users are receiving the most value."
        }, {
            "question": "How is data integrated with a custom back office system?",
            "answer": "ProntoForms supports multiple formats (including CSV, XML, JSON) and protocols (including FTP, HTTP, PUT, HTTP Post, Http File Upload, Email) to transfer data to back office systems.  Many customers also use cloud based solutions such as Box, Salesforce, and others to automatically store data."
        }]
    },
    "solu0000": {
        "solutionId": "solu0000",
        "solutionName": "AirWatch Agent",
        "shortDescription": "We Simplify Enterprise Mobility",
        "overviewDescription": "AirWatch is the leader in enterprise mobility management, with a platform that includes mobile device, email, app, content and browser management solutions.",
        "coreCompetencies": [
            "comp0026",
            "comp0021",
            "comp0033"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Luxottica",
        "customerTestimonial1": "Luxottica has deployed more than 7,000 AirWatch-managed iPads. Sales associates can now access Endless Aisle capabilities through the e-commerce channel to locate, sell and ship products directly to a customer’s home or to the store, and store managers can access training content at the touch of a button.",
        "customerHeadline2": "Adventist Health System",
        "customerTestimonial2": "To keep devices secure and in compliance with regulations, Adventist Health System uses device restrictions, compliance policies and enterprise wipe features enabled by AirWatch. The technical teams require a secure PIN for every device that has access to hospital credentials and records.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "airwatchagent",
        "emailContact": "sales@air-watch.com",
        "website": "",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/5PUfbild0AyoqSAo8oKGaa/6cd17700fda95b52be19e8832bc0d261/img_icon_large_airwatchagent_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/NuqZJRBqGAGGciIU4g24o/5d1337015f41cefcae14953734cc1f7e/img_hero_airwatchagent_01_2x.png",
        "faqs": []
    },
    "solu0039": {
        "solutionId": "solu0039",
        "solutionName": "ServiceMax",
        "shortDescription": "Field Service Management",
        "overviewDescription": "ServiceMax is the only complete software solution helping companies of all sizes manage contracts, work orders, scheduling, and parts – all delivered via the cloud and iPads.",
        "coreCompetencies": [
            "comp0015",
            "comp0022",
            "comp0012",
            "comp0034"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Luminex - Biotech",
        "customerTestimonial1": "Luminex's same-day service call resolution with ServiceMax is now greater than 95% according to Steve Nava, Director of Field Service–America.",
        "customerHeadline2": "McKinley Equipment",
        "customerTestimonial2": "With ServiceMax, McKinley sends the right tech with the right parts the first time and their first- call-fix rates have increased to more than 80% according to CFO, Kevin Rusin.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "servicemax",
        "emailContact": "",
        "website": "http://www.servicemax.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/1uGnHSS8HyWYCqOIIogSyI/a5e082434008d9397ad1ee9794b554ad/img_icon_large_servicemax_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/40R1yocbkIsE2u6k8e6w6a/737374f1143a5c273b792d357061dde5/img_hero_servicemax_01_2x.png",
        "faqs": []
    },
    "solu0017": {
        "solutionId": "solu0017",
        "solutionName": "Workato",
        "shortDescription": "Powerful App Integrations Made Easy",
        "overviewDescription": "Workato enables powerful connections between the apps you use every day to automate crucial, but often tedious tasks - in minutes without coding or IT help.",
        "coreCompetencies": [
            "comp0037",
            "comp0004"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Swimart Jindalee",
        "customerTestimonial1": "The franchisee uses Workato to automate its business by integrating ServiceM8, Xero and VEND. The implementation took two weeks and saves thousands of hours of work each year.",
        "customerHeadline2": "R.O.C.K",
        "customerTestimonial2": "R.O.C.K, a non-profit, had as little as 6 days to get an e-commerce integration working. Workato allowed them to integrate in two days and return focus to growing customer bases.",
        "templateLayout": "ipad-portrait",
        "assetDirectoryId": "workato",
        "emailContact": "",
        "website": "https://www.workato.com/",
        "companySize": "2,3,4",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/5i5tag42Y8KMamOUkImmOW/824ebce0d58fea367c15f4f76087838f/img_icon_large_workato_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/2pxr6HR6yIg4omqiMgcaCA/af7fd14ed636c98e815ee991fbf7b34f/img_hero_workato_01_2x.png",
        "faqs": []
    },
    "solu0062": {
        "solutionId": "solu0062",
        "solutionName": "Fieldwire",
        "shortDescription": "Construction management",
        "overviewDescription": "Fieldwire helps contractors manage construction operations on projects, and makes it easy for foremen, superintendents, and engineers to view plans, track issues, and manage tasks.",
        "coreCompetencies": [
            "comp0025"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "fieldwire",
        "emailContact": "",
        "website": "http://www.fieldwire.com/",
        "companySize": "1,2,3,4",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/2uLlnLId8oq2EyCKQuyOsq/207a35864a9b91ab7fe508c7131e00a9/img_icon_large_fieldwire_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/5YKhZXSpuECSWuYkikAAg2/f5f80c12ebc1f78839a0ac341219bd96/img_hero_fieldwire_01_2x.png",
        "faqs": []
    },
    "solu0002": {
        "solutionId": "solu0002",
        "solutionName": "Belly",
        "shortDescription": "Loyalty and Marketing Platform",
        "overviewDescription": "Belly gives businesses the marketing and communication tools they need to change customer behavior, with robust closed-loop reporting to keep track of it all.",
        "coreCompetencies": [
            "comp0023",
            "comp0024"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "7-Eleven",
        "customerTestimonial1": "The largest retailer in the world utilizes Belly's rewards paltform to connect digitally with customers and drive them toward the purchase of food and beverage products.",
        "customerHeadline2": "Liv Fashion Boutique",
        "customerTestimonial2": "The San Francisco-based boutique partnered with Belly to help automatically collect customer emails and send targeted promotions to bring customers back in store.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "belly",
        "emailContact": "",
        "website": "https://www.bellycard.com/",
        "companySize": "1, 2, 3, 4,",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/38V7utNW6s4oKAc8KkY2qe/31d6b2f3e7c5ceb0083ae9afd0ce5a73/img_icon_large_belly_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/17nxH0ByJAkMkwSC0Ecsyg/f1c7aea76ea754ebab44b604646dc416/img_hero_belly_01_2x.png",
        "faqs": []
    },
    "solu0031": {
        "solutionId": "solu0031",
        "solutionName": "FocusCura",
        "shortDescription": "Healthcare collaboration",
        "overviewDescription": "FocusCura revolutionizes the way doctors and nurses collaborate and engage with patients with tools to keep watch of patients outside the hospital or doctors office.",
        "coreCompetencies": [
            "comp0018",
            "comp0027"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "focuscura",
        "emailContact": "",
        "website": "",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/6v3YdIHvna600SmM8I4Aky/bb394b369d128420df10144f96c5eac0/img_icon_large_focuscura_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/4tbccxB6Hu8iUsGMeQkA4M/754893e85fa01506a3fb8da9b0513407/img_hero_focuscura_01_2x.png",
        "faqs": []
    },
    "solu0011": {
        "solutionId": "solu0011",
        "solutionName": "Bushel",
        "shortDescription": "Simple mobile device management",
        "overviewDescription": "Bushel helps smaller organizations easily setup, manage, and protect all of the iPads, iPhones and Macs at work, supporting users who have IT as a task.",
        "coreCompetencies": [
            "comp0026",
            "comp0033"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Herregan Distributors",
        "customerTestimonial1": "Herregan's sales team now uses iPads in the field replacing huge paper binders, making them more efficient. Bushel makes that possible by cetntrally managing all of those devices.",
        "customerHeadline2": "GRS Group",
        "customerTestimonial2": "GRS uses Bushel as a centralized delivery method for easier management of their Apple devices. Bushel helped them move from one-to-one management to an at-a-glance dashboard view.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "bushel",
        "emailContact": "",
        "website": "http://www.bushel.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": true,
        "videoFileType": "mov",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/2WT0ETi5duG20oe8acU2WK/d87d63805b46cbe277a8a710eb480261/img_icon_large_bushel_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/4OhBU5Rig0o6owIQS6Q8k4/7c5dd82d4b1821c27282d622d8dbb39d/img_hero_bushel_01_2x.png",
        "faqs": [{
            "question": "Does Bushel require any training or certification?",
            "answer": "No. Bushel is designed to be simple and intuitive, turning complex tasks into simple steps."
        }, {
            "question": "Does Bushel work with all of my Apple hardware?",
            "answer": "Bushel is designed to work exclusively with Apple devices running iOS 8.0+ and OS X 10.10+."
        }, {
            "question": "Can Bushel help deploy apps to employees?",
            "answer": "Yes. Bushel uses Apple’s Volume Purchase Program (VPP) for painless app distribution. Users can assign apps over-the-air and reassign apps as the workforce changes."
        }, {
            "question": "Is Bushel free to try?",
            "answer": "Yes. The first three devices are free, forever."
        }, {
            "question": "Do I have to purchase devices in a special way to use Bushel? ",
            "answer": "No special purchase method is required.  Users can enroll any compatible device."
        }, {
            "question": "How do I get devices into Bushel?",
            "answer": "Bushel provides a simple Open Enrollment workflow that allows employees to easily add devices from anywhere."
        }, {
            "question": "Does Bushel configure email settings?",
            "answer": "Yes. Admins define email server settings within Bushel and employee(s) enter an email address and password upon enrollment."
        }, {
            "question": "Does Bushel send commands over the air?",
            "answer": "Yes. Bushel can remotely lock, wipe, reset a passcode, or un-enroll devices over the air."
        }, {
            "question": "Can Bushel enforce encryption on enrolled devices?",
            "answer": "Yes. Bushel can enforce full disk encryption on iPhones and iPads, and FileVault 2 full disk encryption on Mac."
        }]
    },
    "solu0055": {
        "solutionId": "solu0055",
        "solutionName": "Shopify",
        "shortDescription": "Retail business management",
        "overviewDescription": "Shopify allows businesses of all sizes to reach and sell to customers online, in person, on mobile devices, and with social media, all on one platform.",
        "coreCompetencies": [
            "comp0028",
            "comp0031",
            "comp0030"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "shopify",
        "emailContact": "",
        "website": "https://www.shopify.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/31NrnY4P9Kiyq2G0AQC2WQ/45a204586c911204126a95e072c12d7c/img_icon_large_shopify_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/4KoUsyWgXmCsacugUYqcko/a4e824c93352f31534792541596814b6/img_hero_shopify_01_2x.png",
        "faqs": []
    },
    "solu0016": {
        "solutionId": "solu0016",
        "solutionName": "Vend",
        "shortDescription": "Cloud-based Retail Point-of-Sale",
        "overviewDescription": "Take control of your business & profitability with Vend's intuitive, powerful, and scalable point-of-sale software designed to help small-to-medium retailers grow.",
        "coreCompetencies": [
            "comp0028",
            "comp0023"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "T-We Tea",
        "customerTestimonial1": "With Vend's reporting we are making better decisions that make us a smarter business. We’ve experienced double digit growth in revenue each year we've used Vend. We love that.",
        "customerHeadline2": "High Street Fashion",
        "customerTestimonial2": "Vend is easy to get set up and running, and allows us to do complex store management - like organize and track our inventory and sales appropriately - all in a simple interface.",
        "templateLayout": "ipad-landscape",
        "assetDirectoryId": "vend",
        "emailContact": "",
        "website": "https://www.vendhq.com/",
        "companySize": "1,2,3",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/msbEx56I6sa0WiioyGY6Q/5758d512ad84acf5e2ea90bb1f0611b5/img_icon_large_vend_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/4FnSC4dlNm6SYmsomqkS4k/0672fb0330d2644f0ba5926336bfcbf0/img_hero_vend_01_2x.png",
        "faqs": [{
            "question": "What kind of retail business is right for Vend?",
            "answer": "Vend is ideal for inventory-based brick and mortar retail businesses with 1-100 locations or outlets. Types of businesses especially suited to Vend include fashion boutiques, apparel and clothing stores, homeware and gift shops, and sporting goods stores. "
        }, {
            "question": "Is Vend easy to set up?",
            "answer": "Yes, Vend is easy to set up.  Vend also offers Vend U, an online knowledge base with videos, webinars, and 24/7 customer support through email, phone, or online chat. Vend also offers a fast track setup process with one-on-one coaching and support through Vend+."
        }, {
            "question": "With Vend, is data safe and secure?",
            "answer": "Yes. Vend employs industry-leading protection measures and does not store sensitive data, so data breaches are unlikely.  Vend’s server is backed up hourly, so data will remain safe in the unlikely event of crashes or outages."
        }, {
            "question": "Will Vend work with my existing payment provider?",
            "answer": "Vend works with leading payment processors like Mercury, PayPal, Tyro, DPS, and many other local merchant service providers."
        }, {
            "question": "Is Vend compatible with my existing hardware?",
            "answer": "Vend works with most printers, scanners, credit card readers, and other equipment. Vend focuses on making their platform work with the best and most commonly used retail hardware. For a detailed look at hardware compatibility, visit www.vendhq.com/pos-hardware."
        }, {
            "question": "Does Vend integrate with other business solutions?",
            "answer": "Vend works seamlessly with many other business solutions like Xero for accounting and Deputy for staff management, enabling users to manage their business however they need. Vend also has an open API and a network of developer partners that can assist customers when they need an even more custom solution."
        }, {
            "question": "Is it easy to move to Vend from another POS system?",
            "answer": "Moving from another POS system isn’t difficult at all, especially with Vend’s importing tools. Vend also provides step-by-step instructions and guides users through conversation from start to finish, making it easier than ever to get onto the cloud. "
        }, {
            "question": "Can someone help set everything up?",
            "answer": "Yes, Vend has partners around the world who can set up a customer’s POS system and educate users. To find a Vend partner, visit www.vendhq.com/expert-directory."
        }, {
            "question": "How much does Vend cost?",
            "answer": "Vend has a tiered pricing model in which the cost depends on how big a business is. Visit www.vendhq.com/pricing for more information."
        }]
    },
    "solu0004": {
        "solutionId": "solu0004",
        "solutionName": "Box",
        "shortDescription": "Better content collaboration",
        "overviewDescription": "Box transforms the way businesses share, manage, and collaborate on valuable information and allows every user to securely work across teams, with customers, and with partners.",
        "coreCompetencies": [
            "comp0006",
            "comp0039",
            "comp0032"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "box",
        "emailContact": "",
        "website": "https://www.box.com/home/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/ATjFPuOgX6AuAYSO0E8ms/511dc2e83bfc0b2e84b3ed713af8b645/img_icon_large_box_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/4nqrmEb4CQUseUCggEywSU/204881e4281fd4d4cb7670548c4d1cf1/img_hero_box_01_2x.png",
        "faqs": [{
            "question": "Why do I need another tool to manage my content?",
            "answer": "Box has many customers who had a solution they used for sharing, accessing, and managing content, but realized their old tools didn't provide the level of control, visibility, mobile support, integration, and overall usability of Box."
        }, {
            "question": "How much does Box cost?",
            "answer": "Box offers its product to customers as a per-user monthly subscription. The core service is offered in multiple tiers, targeted to customers of different sizes and with different use cases. Visit www.box.com/pricing for more information."
        }, {
            "question": "Why should I store content in the cloud instead of an on-premise or hybrid solution?",
            "answer": "Box enables customers to better centralize, control and secure content than legacy, on-premise systems. With Box, customers get rapid and timely updates to software, and have no hardware to maintain.  Plus, as a cloud solution, users have the instant ability to scale and grow."
        }, {
            "question": "Why do I need Box when I already have Office 365, OneDrive for Business, or SharePoint?",
            "answer": "It’s not necessarily an “either/or” scenario. Box has many customers who found that other solutions were ideally suited for productivity, but Box was a better fit for their enterprise-grade content collaboration needs, for both end users and IT."
        }, {
            "question": "Does Box integrate with other solutions?",
            "answer": "Yes, Box has over 1,000+ integrations with leading productivity tools such as Microsoft Office 365, Google Apps, and Salesforce."
        }, {
            "question": "How do I ensure my content is secure?",
            "answer": "Box provides centralized security controls and capabilities and can integrate with existing security and compliance programs. Box has native device controls like device pinning, remote logout and data deletion, passcode lock, and MDM/EMM integration and enforcement."
        }, {
            "question": "How does Box ensure my content is secure?",
            "answer": "Box has data centers where they own, operate, and maintain an infrastructure using physical and network access controls that ensure both 99.9% data availability and data security. They also encrypt data, both at rest and in transit, and are certified on several security standards."
        }]
    },
    "solu0015": {
        "solutionId": "solu0015",
        "solutionName": "TimeAttend",
        "shortDescription": "Time tracking for the workforce",
        "overviewDescription": "TimeAttend is cloud-based time tracking software that optimizes workforce management for businesses with either simple or complex requirements, and ensures legal compliance.",
        "coreCompetencies": [
            "comp0035"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "timeattend",
        "emailContact": "",
        "website": "http://www.timeattend.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/1F25hWK0S06U2uOYoIckq6/ac664935a964335fe848200497d89831/img_icon_large_timeattend_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/1xSAIvSACUW0GygeA6g4gc/8568437534f4dcaa189ab7cb283671b0/img_hero_timeattend_01_2x.png",
        "faqs": []
    },
    "solu0063": {
        "solutionId": "solu0063",
        "solutionName": "Okta",
        "shortDescription": "Identity and mobility management",
        "overviewDescription": "Okta is an integrated identity management and mobility management service that securely and simply connects people to their applications, anywhere, anytime.",
        "coreCompetencies": [
            "comp0019"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "okta",
        "emailContact": "",
        "website": "https://www.okta.com/",
        "companySize": "1,2,3,4",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/7CkoWjvfaMssuIEg2cGCOg/7722d6ab87f17c250a1116c8b64808d8/img_icon_large_okta_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/z2eorbDO7I8K08C44QS2M/b067f7896226b1ab9e6af4e1ec589e4b/img_hero_okta_01_2x.png",
        "faqs": []
    },
    "solu0058": {
        "solutionId": "solu0058",
        "solutionName": "Timely",
        "shortDescription": "Manage customer appointments",
        "overviewDescription": "Timely helps businesses organize bookings, send reminders, store customer details, and empowers customers to book, cancel, or reschedule appointments online.  ",
        "coreCompetencies": [
            "comp0013",
            "comp0038",
            "comp0039"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "timely",
        "emailContact": "",
        "website": "https://timelyapp.com/",
        "companySize": "1,2,3,4",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/3DV7QiJ4xiE88AKyu8k4cE/76b532051359cec24540bc7747647ced/img_icon_large_timely_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/6kKIt3aXVmwssOwWkee0Oi/e0d6df467ace8dbe076a78456e48989c/img_hero_timely_01_2x.png",
        "faqs": []
    },
    "solu0051": {
        "solutionId": "solu0051",
        "solutionName": "Boomtown",
        "shortDescription": "Fast & Easy Tech Support",
        "overviewDescription": "Boomtown eliminates anxiety and frustration caused by misbehaving technology. Connect with an expert on video chat for immediate help or request a local technician in person.",
        "coreCompetencies": [
            "comp0041",
            "comp0040",
            "comp0036"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "The Melt",
        "customerTestimonial1": "A national chain that uses the Boomtown app for remote technical support and leverages Boomtown's technician network to install technology at each new Melt opening across the US.",
        "customerHeadline2": "The Plant Café Organic",
        "customerTestimonial2": "The Plant has a dedicated iPad for Boomtown support in each of its 8 locations to empower managers to quickly resolve technical issues using Boomtown's knowledge and expertise.",
        "templateLayout": "ipad-portrait",
        "assetDirectoryId": "boomtown",
        "emailContact": "",
        "website": "http://www.goboomtown.com/",
        "companySize": "1, 2, 3, 4,",
        "solutionHasVideo": true,
        "videoFileType": "mp4",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/231Ebz43GkSuAywUoaAi82/ef548389c4e08cd46e9f7838290d0d6c/img_icon_large_boomtown_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/7rjcNcHCLYcI4QmCSa8OA8/a8fe2f60ca9bdba4f482e07a3d3d444b/img_hero_boomtown_01_2x.png",
        "faqs": []
    },
    "solu0042": {
        "solutionId": "solu0042",
        "solutionName": "Telogis",
        "shortDescription": "Manage field operations on mobile",
        "overviewDescription": "Telogis provides a cloud-based intelligence software platform that transforms the way businesses optimize their mobile assets and critical data.",
        "coreCompetencies": [
            "comp0016",
            "comp0015",
            "comp0022",
            "comp0012"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "telogis",
        "emailContact": "",
        "website": "http://www.telogis.com/",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/1L1WP8XGQ8weyIiA4qEQ0O/8825c7a2bc575317954df7f15fb9847e/img_icon_large_telogis_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/6OnDPCsWmAWcUkOwu2Swes/e6b3abb24144c0c596fa0521b3aa6e11/img_hero_telogis_01_2x.png",
        "faqs": []
    },
    "solu0013": {
        "solutionId": "solu0013",
        "solutionName": "MobileIron Cloud",
        "shortDescription": "Mobile device management",
        "overviewDescription": "MobileIron Cloud helps IT administrators quickly and efficiently configure, manage, and secure company-owned iOS devices.",
        "coreCompetencies": [
            "comp0026",
            "comp0021",
            "comp0033"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "mobileironcloud",
        "emailContact": "",
        "website": "https://www.mobileiron.com/en/products/cloud",
        "companySize": "1, 2, 3, ",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/4dqJkDblVuMekIYCGmamOS/4bc080caa397e6dc33454c65371951e0/img_icon_large_mobileironcloud_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/IS7qsxQGyIgegcOc64eI8/240a61a8f9aa594f4a16cd829d6ec78b/img_hero_mobileironcloud_01_2x.png",
        "faqs": []
    },
    "solu0064": {
        "solutionId": "solu0064",
        "solutionName": "Praxify",
        "shortDescription": "Information at the point of care",
        "overviewDescription": "Praxify helps improve physician productivity by working seamlessly across various iOS devices, and ensuring the right information is available at the point-of-care and beyond.",
        "coreCompetencies": [
            "comp0018",
            "comp0017"
        ],
        "screenshotText1": "Screenshot 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText2": "Screenshot 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "screenshotText3": "Screenshot 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "screenshotText4": "Screenshot 5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        "featureOverview": "",
        "customerHeadline1": "Customer Headline 1",
        "customerTestimonial1": "Customer Testimonial 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "customerHeadline2": "Customer Headline 2",
        "customerTestimonial2": "Customer Testimonial 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "templateLayout": "",
        "assetDirectoryId": "praxify",
        "emailContact": "",
        "website": "http://www.praxify.com/index.php",
        "companySize": "1,2,3,4",
        "solutionHasVideo": "",
        "videoFileType": "",
        "relatedSolutions": "",
        "languages": "",
        "countries": "",
        "emailIconUrl": "https://images.contentful.com/9rzhmn8ivfcp/2Cn8HTCbVimuOSI2sEsQyC/72bdf3a3ddc46373063ecb0548e66705/img_icon_large_praxify_2x.png",
        "emailHeroUrl": "https://images.contentful.com/9rzhmn8ivfcp/6bdw31uANOYm4aCKqsEE0w/daa5b79549ef412f7635ca2f3f6a500a/img_hero_praxify_01_2x.png",
        "faqs": []
    }
};

var customCart = [
	{
		"id": "solu0037",
		"countTrue": 3,
		"countFalse": 0,
		"keyValue": "#(servicem8)"
	},
	{
		"id": "solu0039",
		"countTrue": 2,
		"countFalse": 0,
		"keyValue": "#(servicemax)"
	},
	{
		"id": "solu0042",
		"countTrue": 2,
		"countFalse": 0,
		"keyValue": "#(telogis)"
	},
	{
		"id": "bund0002",
		"keyValue": "#(fieldservice)"
	},
	{
		"id": "solu0027",
		"countTrue": 1,
		"countFalse": 0,
		"keyValue": "#(flint)"
	},
	{
		"id": "solu0060",
		"countTrue": 1,
		"countFalse": 0,
		"keyValue": "#(beehivr)"
	},
	{
		"id": "solu0058",
		"countTrue": 1,
		"countFalse": 0,
		"keyValue": "#(timely)"
	},
	{
		"id": "solu0007",
		"countTrue": 1,
		"countFalse": 0,
		"keyValue": "#(docusign)"
	},
	{
		"id": "solu0018",
		"countTrue": 1,
		"countFalse": 0,
		"keyValue": "#(xero)"
	},
	{
		"id": "solu0014",
		"countTrue": 1,
		"countFalse": 0,
		"keyValue": "#(prontoforms)"
	},
	{
		"id": "solu0010",
		"countTrue": 1,
		"countFalse": 0,
		"keyValue": "#(freshbooks)"
	},
	{
		"id": "solu0051",
		"countTrue": 1,
		"countFalse": 0,
		"keyValue": "#(boomtown)"
	},
	{
		"id": "solu0005",
		"countTrue": 1,
		"countFalse": 0,
		"keyValue": "#(deputy)"
	},
	{
		"id": "solu0061",
		"countTrue": 1,
		"countFalse": 0,
		"keyValue": "#(eventboard)"
	}
];


function generateHtmlString () {

    //loop through custom cart
    for ( i = 0; i < customCart.length; i++ ) {


        console.log(solutionsObject[customCart[i].id]);

    };

 // console.log(solutionsObject.solu0027)
};

// console.log(solutionsObject.customCart[0])
console.log(generateHtmlString());