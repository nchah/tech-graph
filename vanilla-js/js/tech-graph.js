
var competingAssistants = [
  {source: "", target: "Assistants", img: "images/compete-assistants.png"},
  {source: "Siri", target: "Assistants", type: "competitor"},
  {source: "Assistant", target: "Assistants", type: "competitor"},
  {source: "Cortana", target: "Assistants", type: "competitor"},
  {source: "Alexa", target: "Assistants", type: "competitor"},
  {source: "M", target: "Assistants", type: "competitor"},
  ];

var competingAiResearch =[
  {source: "", target: "AI/ML Research", img: "images/compete-vr.png"},
  {source: "Google AI", target: "AI/ML Research", type: "competitor"},
  {source: "DeepMind", target: "AI/ML Research", type: "competitor"},
  {source: "Research", target: "AI/ML Research", type: "competitor"},
  {source: "Maluuba", target: "AI/ML Research", type: "competitor"},
  {source: "Facebook Research", target: "AI/ML Research", type: "competitor"},
  {source: "IBM Research", target: "AI/ML Research", type: "competitor"},
];

var competingBrowsers = [
  {source: "", target: "Web Browsers", img: "images/compete-browsers.png"},
  {source: "Chrome", target: "Web Browsers", type: "competitor"},
  {source: "Edge", target: "Web Browsers", type: "competitor"},
  {source: "Safari", target: "Web Browsers", type: "competitor"},
  ];

var competingClouds = [
  {source: "", target: "Clouds", img: "images/compete-clouds.png"},
  {source: "GCP", target: "Clouds", type: "competitor"},
  {source: "Azure", target: "Clouds", type: "competitor"},
  {source: "AWS", target: "Clouds", type: "competitor"},
  {source: "Bluemix", target: "Clouds", type: "competitor"},
];

var competingEmail = [
  {source: "", target: "Email", img: "images/compete-email.png"},
  {source: "Gmail", target: "Email", type: "competitor"},
  {source: "Outlook", target: "Email", type: "competitor"},
  {source: "Yahoo Mail", target: "Email", type: "competitor"},
  {source: "Mail", target: "Email", type: "competitor"},
];

var competingSearch =[
  {source: "", target: "Search Eng.", img: "images/compete-search.png"},
  {source: "Yahoo Search", target: "Search Eng.", type: "competitor"},
  {source: "Bing", target: "Search Eng.", type: "competitor"},
  {source: "Search", target: "Search Eng.", type: "competitor"},
];

var competingVR =[
  {source: "", target: "VR/AR", img: "images/compete-vr.png"},
  {source: "HoloLens", target: "VR/AR", type: "competitor"},
  {source: "Daydream", target: "VR/AR", type: "competitor"},
  {source: "Cardboard", target: "VR/AR", type: "competitor"},
  {source: "Oculus Rift", target: "VR/AR", type: "competitor"},
];

var alphabet = [
  {source: "", target: "Alphabet", img: "images/alphabet.png", url: "https://en.wikipedia.org/wiki/Alphabet_Inc.", hover: "Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California."},
  {source: "Alphabet", target: "Calico", type: "main", img: "images/calico.png", url: "https://en.wikipedia.org/wiki/Calico_(company)", hover: "Calico LLC is an American research and development biotech company founded on September 18, 2013..."},
  {source: "Alphabet", target: "Google", type: "main", img: "images/google.png", url: "https://en.wikipedia.org/wiki/Google", hover: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware."},
  {source: "Alphabet", target: "DeepMind", type: "acquisition", img: "images/deepmind.png", url: "https://en.wikipedia.org/wiki/DeepMind", hover: "DeepMind Technologies is a British artificial intelligence company founded in September 2010, currently owned by Alphabet Inc.."},
  {source: "Alphabet", target: "X", type: "main", img: "images/x.png", url: "https://en.wikipedia.org/wiki/X_(company)", hover: "X Development LLC. (formerly Google X) is an American semi-secret research and development facility and organization founded by Google in January 2010, which now operates as a subsidiary of Alphabet Inc."},
  {source: "Alphabet", target: "Waymo", type: "main", img: "images/waymo.png", url: "https://en.wikipedia.org/wiki/Waymo", hover: "Waymo LLC is a self-driving technology development company."},
  {source: "Alphabet", target: "Access", type: "main", img: "images/access.png", url: "https://en.wikipedia.org/wiki/Google_Fiber", hover: "[Further information at the Google Fiber node]"},
  {source: "Alphabet", target: "Chronicle", type: "main", img: "images/chronicle.png", url: "https://en.wikipedia.org/wiki/Chronicle_(company)", hover: "Chronicle is a cybersecurity company and subsidiary of Alphabet Inc."},
  {source: "Alphabet", target: "GV", type: "main", img: "images/gv.png", url: "https://en.wikipedia.org/wiki/GV_(company)", hover: "GV, formerly Google Ventures, is the venture capital investment arm of Alphabet Inc. and provides seed, venture, and growth stage funding to technology companies."},
  {source: "Alphabet", target: "Dandelion", type: "main", img: "images/dandelion.png", url: "https://en.wikipedia.org/wiki/Dandelion_Energy", hover: "Dandelion is an American company which offers geothermal heating installation in upstate New York."},
  {source: "Alphabet", target: "Jigsaw", type: "main", img: "images/jigsaw.png", url: "https://en.wikipedia.org/wiki/Jigsaw_(company)", hover: "Jigsaw (formerly Google Ideas) is a technology incubator created by Google, and currently operated as a subsidiary of Alphabet Inc."},
  {source: "Alphabet", target: "Verily", type: "main", img: "images/verily.png", url: "https://en.wikipedia.org/wiki/Verily", hover: "Verily (formerly Google Life Sciences) is Alphabet Inc.'s research organization devoted to the study of life sciences."},
  {source: "Alphabet", target: "Sidewalk Labs", type: "main", img: "images/sidewalk.png", url: "https://en.wikipedia.org/wiki/Sidewalk_Labs", hover: "Sidewalk Labs is Alphabet Inc.'s urban innovation organization."},
  {source: "Google", target: "Waze", type: "acquisition", img: "images/waze.png", url: "https://en.wikipedia.org/wiki/Waze", hover: "Waze (/weɪz/; formerly FreeMap Israel) is a GPS navigation software app."},
  {source: "Google", target: "Nest", type: "acquisition", img: "images/nest.png", url: "https://en.wikipedia.org/wiki/Nest_Labs", hover: "Nest Labs is an American manufacturer of smart home products including thermostats, smoke detectors, and security systems including smart doorbells and smart locks."},
  {source: "Google", target: "Languages\n/Frameworks", type: "main", img: "images/google.png", url: "", hover: ""},
  {source: "Languages\n/Frameworks", target: "Dart", type: "main", img: "images/google-dart.png", url: "https://en.wikipedia.org/wiki/Dart_(programming_language)", hover: "Dart is a general-purpose programming language originally developed by Google and later approved as a standard by Ecma (ECMA-408)."},
  {source: "Languages\n/Frameworks", target: "AngularJS", type: "main", img: "images/google-angular.png", url: "https://en.wikipedia.org/wiki/AngularJS", hover: "AngularJS (also written as Angular.js) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications."},
  {source: "Languages\n/Frameworks", target: "Go", type: "main", img: "images/google-go.png", url: "https://en.wikipedia.org/wiki/Go_(programming_language)", hover: "Go (often referred to as Golang) is a programming language designed by Google engineers Robert Griesemer, Rob Pike, and Ken Thompson."},
  {source: "Google", target: "Maps", type: "acquisition", img: "images/google-maps.png", url: "https://en.wikipedia.org/wiki/Google_Maps", hover: "Google Maps is a web mapping service developed by Google."},
  {source: "Google", target: "Search", type: "main", img: "images/google.png", url: "https://en.wikipedia.org/wiki/Google_Search", hover: "Google Search, also referred to as Google Web Search or simply Google, is a web search engine developed by Google LLC."},
  {source: "Google", target: "DoubleClick", type: "acquisition", img: "images/google-doubleclick.png", url: "https://en.wikipedia.org/wiki/DoubleClick", hover: "In March 2008, Google acquired DoubleClick for $3.1 billion. In June 2018, Google announced plans to rebrand its ads platforms, and DoubleClick was merged into the new Google Marketing Platform brand."},
  {source: "DoubleClick", target: "Ads", type: "main", img: "images/google.png", url: "https://en.wikipedia.org/wiki/Google_Ads", hover: "Google Ads (previously Google AdWords, before July 24, 2018) is an online advertising platform developed by Google, where advertisers pay to display brief advertisements, service offerings, product listings, video content and generate mobile application installs within the Google ad network to web users."},
  {source: "Ads", target: "AdSense", type: "main", img: "images/google.png", url: "https://en.wikipedia.org/wiki/AdSense", hover: "Google AdSense is a program run by Google that allows publishers in the Google Network of content sites to serve automatic text, image, video, or interactive media advertisements, that are targeted to site content and audience."},
  {source: "Ads", target: "Urchin", type: "acquisition", img: "images/urchin.png", url: "https://en.wikipedia.org/wiki/Urchin_(software)", hover: "Urchin Software Corp. was acquired by Google in April 2005, forming Google Analytics."},
  {source: "Urchin", target: "Google Analytics", type: "main", img: "images/google-analytics.png", url: "https://en.wikipedia.org/wiki/Google_Analytics", hover: "Google Analytics is a premium web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand."},
  {source: "Google", target: "Gmail", type: "main", img: "images/gmail.png", url: "https://en.wikipedia.org/wiki/Gmail", hover: "Gmail is a free email service developed by Google."},
  {source: "Google", target: "Chromium", type: "main", img: "images/chromium.png", url: "https://en.wikipedia.org/wiki/Chromium_(web_browser)", hover: "Chromium is Google's open-source web browser project."},
  {source: "Google", target: "YouTube", type: "acquisition", img: "images/youtube.png", url: "https://en.wikipedia.org/wiki/YouTube", hover: "YouTube, LLC is an American video-sharing website headquartered in San Bruno, California."},
  {source: "Google", target: "Cloud", type: "main", img: "images/google-cloud.png", url: "https://en.wikipedia.org/wiki/Google_Cloud_Platform", hover: ""},
  {source: "Google", target: "Android", type: "acquisition", img: "images/android.png", url: "https://en.wikipedia.org/wiki/Android_(operating_system)", hover: "Android is a mobile operating system developed by Google."},  
  {source: "Google", target: "Google Photos", type: "main", img: "images/google-photos.png", url: "https://en.wikipedia.org/wiki/Google_Photos", hover: "Google Photos is a photo sharing and storage service developed by Google."},
  {source: "Google", target: "Google+", type: "main", img: "images/google-plus.png", url: "https://en.wikipedia.org/wiki/Google%2B", hover: "Google+, pronounced and sometimes written as Google Plus, is an Internet-based social network that is owned and operated by Google. "},
  {source: "Google", target: "Blogger", type: "acquisition", img: "images/blogger.png", url: "https://en.wikipedia.org/wiki/Blogger_(service)", hover: "Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries. It was developed by Pyra Labs, which was bought by Google in 2003"},
  {source: "Google", target: "Google AI", type: "research", img: "images/google.png", url: "https://en.wikipedia.org/wiki/Google.ai", hover: "Google.ai is a division of Google dedicated solely to artificial intelligence."},
  {source: "Android", target: "Play", type: "main", img: "images/google-play.png", url: "https://en.wikipedia.org/wiki/Google_Play", hover: "Google Play (previously Android Market) is a digital distribution service operated and developed by Google LLC."},
  {source: "Android", target: "Assistant", type: "main", img: "images/google-assistant.png", url: "https://en.wikipedia.org/wiki/Google_Assistant", hover: "Google Assistant is an artificial intelligence-powered virtual assistant developed by Google that is primarily available on mobile and smart home devices."},
  {source: "Assistant", target: "Home", type: "hardware", img: "images/google-home.png", url: "https://en.wikipedia.org/wiki/Google_Home", hover: "Google Home is a brand of smart speakers developed by Google."},
  {source: "Assistant", target: "Home Mini", type: "hardware", img: "images/google-home.png", url: "https://en.wikipedia.org/wiki/Google_Home", hover: ""},
  {source: "Android", target: "Cardboard", type: "main", img: "images/google-cardboard.png", url: "https://en.wikipedia.org/wiki/Google_Cardboard", hover: "Google Cardboard is a virtual reality (VR) platform developed by Google for use with a head mount for a smartphone."},
  {source: "Android", target: "Daydream", type: "main", img: "images/google-daydream.png", url: "https://en.wikipedia.org/wiki/Google_Daydream", hover: "Daydream is a virtual reality (VR) platform developed by Google that is built into the Android mobile operating system (versions 'Nougat' 7.1 and later)."},
  {source: "Android", target: "Pixel", type: "hardware", img: "images/pixel.png", url: "https://en.wikipedia.org/wiki/Google_Pixel", hover: "Google Pixel is a line of consumer electronic devices developed by Google that run either Chrome OS or the Android operating system."},
  // {source: "Pixel", target: "Fossil (Watch)", type: "acquisition", img: "images/pixel.png", url: "", hover: ""},
  {source: "Maps", target: "Earth", type: "main", img: "images/google-earth.png", url: "https://en.wikipedia.org/wiki/Google_Earth", hover: "Google Earth is a computer program that renders a 3D representation of Earth based on satellite imagery."},
  {source: "Chromium", target: "Chrome", type: "main", img: "images/chrome.png", url: "https://en.wikipedia.org/wiki/Google_Chrome", hover: "Google Chrome (commonly known simply as Chrome) is a web browser developed by Google."},
  {source: "Chrome", target: "Chrome OS", type: "main", img: "images/chrome.png", url: "https://en.wikipedia.org/wiki/Chrome_OS", hover: "Chrome OS is an operating system designed by Google that is based on the Linux kernel and uses the Google Chrome web browser as its principal user interface."},
  {source: "Chrome OS", target: "Chromebook", type: "hardware", img: "images/chrome.png", url: "https://en.wikipedia.org/wiki/Chromebook", hover: "A Chromebook is a laptop or tablet running the Linux-based Chrome OS as its operating system."},
  {source: "Chrome", target: "Chromecast", type: "hardware", img: "images/chrome.png", url: "https://en.wikipedia.org/wiki/Chromecast", hover: "Chromecast is a line of digital media players developed by Google."},
  {source: "Cloud", target: "GCP", type: "main", img: "images/google-cloud.png", url: "https://en.wikipedia.org/wiki/Google_Cloud_Platform", hover: "Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube."},
  {source: "Cloud", target: "App Engine", type: "main", img: "images/google-appengine.png", url: "https://en.wikipedia.org/wiki/Google_App_Engine", hover: "Google App Engine (often referred to as GAE or simply App Engine) is a web framework and cloud computing platform for developing and hosting web applications in Google-managed data centers."},
  {source: "Cloud", target: "Drive", type: "main", img: "images/google-drive.png", url: "https://en.wikipedia.org/wiki/Google_Drive", hover: "Google Drive is a file storage and synchronization service developed by Google."},
  {source: "Cloud", target: "G Suite", type: "main", img: "images/gsuite.png", url: "https://en.wikipedia.org/wiki/G_Suite", hover: "G Suite (formerly Google Apps for Work and Google Apps for Your Domain) is a brand of cloud computing, productivity and collaboration tools, software and products developed by Google, first launched on August 28, 2006 as 'Google Apps for Your Domain'."},
  {source: "Cloud", target: "Kaggle", type: "acquisition", img: "images/kaggle.png", url: "https://en.wikipedia.org/wiki/Kaggle", hover: "Kaggle is an online community of data scientists and machine learners, owned by Google, Inc."},
  {source: "G Suite", target: "Keep", type: "main", img: "images/google-keep.png", url: "https://en.wikipedia.org/wiki/Google_Keep", hover: "Google Keep is a note-taking service developed by Google."},
  {source: "G Suite", target: "Docs", type: "main", img: "images/google-docs.png", url: "https://en.wikipedia.org/wiki/Google_Docs", hover: "Google Docs is a word processor included as part of a free, web-based software office suite offered by Google within its Google Drive service."},
  {source: "G Suite", target: "Sheets", type: "main", img: "images/google-sheets.png", url: "https://en.wikipedia.org/wiki/Google_Sheets", hover: "Google Sheets is a spreadsheet program included as part of a free, web-based software office suite offered by Google within its Google Drive service. "},
  {source: "G Suite", target: "Slides", type: "main", img: "images/google-slides.png", url: "https://en.wikipedia.org/wiki/Google_Slides", hover: "Google Slides is a presentation program included as part of a free, web-based software office suite offered by Google within its Google Drive service."},
  {source: "DeepMind", target: "AlphaGo", type: "main", img: "images/alphago.png", url: "https://en.wikipedia.org/wiki/AlphaGo", hover: "AlphaGo is a computer program that plays the board game Go. It was developed by Alphabet Inc.'s Google DeepMind in London."},
  {source: "Alphabet", target: "Loon", type: "main", img: "images/x.png", url: "https://en.wikipedia.org/wiki/Loon_(company)", hover: "Loon LLC is an Alphabet Inc. subsidiary working on providing Internet access to rural and remote areas."},
  {source: "Google", target: "Glass", type: "main", img: "images/glass.png", url: "https://en.wikipedia.org/wiki/Google_Glass", hover: "Google Glass is a brand of smart glasses—an optical head-mounted display designed in the shape of a pair of eyeglasses. "},
  {source: "Nest", target: "Thermostat", type: "main", img: "images/nest.png", url: "https://en.wikipedia.org/wiki/Nest_Labs#Nest_Learning_Thermostat", hover: "The Nest Learning Thermostat is an electronic, programmable, and self-learning Wi-Fi-enabled thermostat that optimizes heating and cooling of homes and businesses to conserve energy."},
  {source: "Nest", target: "Dropcam", type: "acquisition", img: "images/dropcam.png", url: "https://en.wikipedia.org/wiki/Nest_Labs#Nest_Cam_Indoor", hover: "In June 2014, Nest acquired Dropcam, maker of the Dropcam security camera."},
  {source: "Dropcam", target: "Nest Cam", type: "transition", img: "images/nest.png", url: "https://en.wikipedia.org/wiki/Nest_Labs#Nest_Cam_Indoor", hover: "In June 2015 Nest announced the Nest Cam, an upgraded and rebranded security camera based on the Dropcam"},
  {source: "Access", target: "Google Fiber", type: "main", img: "images/google-fiber.png", url: "https://en.wikipedia.org/wiki/Google_Fiber", hover: "Google Fiber is part of the Access division of Alphabet Inc."}
];

var amazon = [
  {source: "", target: "Amazon", img: "images/amazon.png", url: "https://en.wikipedia.org/wiki/Amazon_(company)", hover: "Amazon.com, Inc., doing business as Amazon (/ˈæməˌzɒn/), is a multinational technology company focusing in e-commerce, cloud computing, and artificial intelligence in Seattle, Washington."},
  {source: "Amazon", target: "Whole Foods", type: "acquisition", img: "images/whole-foods.png", url: "https://en.wikipedia.org/wiki/Whole_Foods_Market", hover: "Whole Foods Market Inc. is an American supermarket chain which exclusively sells products free from artificial colors, flavors, preservatives, sweeteners and hydrogenated fats."},
  {source: "Amazon", target: "IMDb", type: "acquisition", img: "images/imdb.png", url: "https://en.wikipedia.org/wiki/IMDb", hover: "IMDb (Internet Movie Database) is an online database of information related to films, television programs, home videos and video games, and internet streams, including cast, production crew and personnel biographies, plot summaries, trivia, and fan reviews and ratings."},
  {source: "Amazon", target: "Audible", type: "acquisition", img: "images/audible.png", url: "https://en.wikipedia.org/wiki/Audible_(store)", hover: "Audible is a seller and producer of spoken audio entertainment, information, and educational programming on the Internet."},
  {source: "Amazon", target: "Goodreads", type: "acquisition", img: "images/goodreads.png", url: "https://en.wikipedia.org/wiki/Goodreads", hover: "Goodreads is a 'social cataloging' website that allows individuals to freely search its database of books, annotations, and reviews."},
  {source: "Amazon", target: "Twitch.tv", type: "acquisition", img: "images/twitch.png", url: "https://en.wikipedia.org/wiki/Twitch.tv", hover: "Twitch is a live streaming video platform owned by Twitch Interactive, a subsidiary of Amazon."},
  {source: "Twitch.tv", target: "Curse", type: "acquisition", img: "images/curse.png", url: "https://en.wikipedia.org/wiki/Curse_LLC", hover: "Curse LLC (formerly Curse, Inc., and doing business as Curse) is an online game portal and network of gaming websites founded by Hubert Thieblot in 2006, and currently run by its President, Donovan Duncan."},
  {source: "Amazon", target: "Amazon.com", type: "main", img: "images/amazon.png", url: "https://en.wikipedia.org/wiki/Amazon_(company)", hover: "Amazon.com was founded by Jeff Bezos on July 5, 1994, and started as an online bookstore but later diversified to sell video downloads/streaming, MP3 downloads/streaming, audiobook downloads/streaming, software, video games, electronics, apparel, furniture, food, toys, and jewelry."},
  {source: "Amazon.com", target: "AWS", type: "main", img: "images/amazon-aws.png", url: "https://en.wikipedia.org/wiki/Amazon_Web_Services", hover: "Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis."},
  {source: "AWS", target: "Cloudfront", type: "main", img: "images/aws-cloudfront.png", url: "https://en.wikipedia.org/wiki/Amazon_CloudFront", hover: "Amazon CloudFront is a content delivery network (CDN) offered by Amazon Web Services."},
  {source: "AWS", target: "DynamoDB", type: "main", img: "images/amazon-aws.png", url: "https://en.wikipedia.org/wiki/Amazon_DynamoDB", hover: "Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key-value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio."},
  {source: "AWS", target: "EBS", type: "main", img: "images/aws-ebs.png", url: "https://en.wikipedia.org/wiki/Amazon_Elastic_Block_Store", hover: "Amazon Elastic Block Store (EBS) provides raw block-level storage that can be attached to Amazon EC2 instances and is used in Amazon Relational Database Service (RDS)."},
  {source: "AWS", target: "EC2", type: "main", img: "images/aws-ec2.png", url: "https://en.wikipedia.org/wiki/Amazon_Elastic_Compute_Cloud", hover: "Amazon Elastic Compute Cloud (EC2) forms a central part of Amazon.com's cloud-computing platform, Amazon Web Services (AWS), by allowing users to rent virtual computers on which to run their own computer applications."},
  {source: "Amazon.com", target: "Prime", type: "main", img: "images/amazon-prime.png", url: "https://en.wikipedia.org/wiki/Amazon_Prime", hover: "Amazon Prime is a paid subscription service offered by Amazon that gives users access to free two-day delivery (one-day in some areas), streaming music and video, and other benefits for a monthly or yearly fee."},
  {source: "Amazon.com", target: "Alexa", type: "main", img: "images/amazon-alexa.png", url: "https://en.wikipedia.org/wiki/Amazon_Alexa", hover: "Amazon Alexa, known simply as Alexa,[2] is a virtual assistant developed by Amazon, first used in the Amazon Echo and the Amazon Echo Dot smart speakers developed by Amazon Lab126."},
  {source: "Amazon.com", target: "Fire OS", type: "main", img: "images/amazon.png", url: "https://en.wikipedia.org/wiki/Fire_OS", hover: "Amazon Fire OS is an Android-based mobile operating system produced by Amazon for its Fire Phone and Kindle Fire range of tablets, Echo and Echo Dot, and other content delivery devices..."},
  {source: "Fire OS", target: "Phone", type: "hardware", img: "images/amazon-firephone.png", url: "https://en.wikipedia.org/wiki/Fire_Phone", hover: "The Fire Phone is a 3D-enabled smartphone developed by Amazon.com[5] and manufactured by Foxconn."},
  {source: "Fire OS", target: "Echo", type: "hardware", img: "images/amazon-echo.png", url: "https://en.wikipedia.org/wiki/Amazon_Echo", hover: "Amazon Echo (shortened to Echo and known colloquially as 'Alexa') is a brand of smart speakers developed by Amazon."},
  {source: "Echo", target: "Dot", type: "hardware", img: "images/amazon-echo.png", url: "https://en.wikipedia.org/wiki/Amazon_Echo#Echo_Dot", hover: "In March 2016, Amazon unveiled the original Amazon Echo Dot,[35] which is a hockey puck-sized version of the Echo..."},
  {source: "Echo", target: "Tap", type: "hardware", img: "images/amazon-echo.png", url: "https://en.wikipedia.org/wiki/Amazon_Echo#Amazon_Tap", hover: "The Amazon Tap is a smaller portable version of the Echo."},
  {source: "Echo", target: "Look", type: "hardware", img: "images/amazon-echo.png", url: "https://en.wikipedia.org/wiki/Amazon_Echo#Echo_Look", hover: "In April 2017, the Amazon Echo Look was introduced as a camera with Alexa built-in, for US$20 more than the first-generation Echo."},
  {source: "Echo", target: "Show", type: "hardware", img: "images/amazon-echo.png", url: "https://en.wikipedia.org/wiki/Amazon_Echo_Show", hover: "Amazon Echo Show is a smart speaker that is part of the Amazon Echo line of products."},
  {source: "Fire OS", target: "Kindle", type: "hardware", img: "images/amazon-kindle.png", url: "https://en.wikipedia.org/wiki/Amazon_Kindle", hover: "The Amazon Kindle is a series of e-readers designed and marketed by Amazon. "},
  {source: "Fire OS", target: "FireTV", type: "hardware", img: "images/amazon-firetv.png", url: "https://en.wikipedia.org/wiki/Amazon_Fire_TV", hover: "Amazon Fire TV is a digital media player and its microconsole remote developed by Amazon."},
  {source: "FireTV", target: "Stick", type: "hardware", img: "images/amazon-firetv.png", url: "https://en.wikipedia.org/wiki/Amazon_Fire_TV#Fire_TV_Stick", hover: "On November 19, 2014, Amazon released a smaller version of the Fire TV called the Fire TV Stick."},
  {source: "Amazon.com", target: "Video", type: "main", img: "images/amazon-video.png", url: "https://en.wikipedia.org/wiki/Amazon_Video", hover: "Prime Video is an Internet video on demand service that is developed, owned, and operated by Amazon."},
  {source: "Amazon.com", target: "Amazon Music", type: "main", img: "images/amazon-music.png", url: "https://en.wikipedia.org/wiki/Amazon_Music", hover: "Amazon Music (previously Amazon MP3) is a music streaming platform and online music store operated by Amazon.com."}
];

var apple = [
  {source: "", target: "Apple", img: "images/apple.png", url: "https://en.wikipedia.org/wiki/Apple_Inc.", hover: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services."},
  {source: "Apple", target: "Siri", type: "acquisition", img: "images/siri.png", url: "https://en.wikipedia.org/wiki/Siri", hover: "Siri (pronounced /ˈsɪri/) is a virtual assistant that is part of Apple Inc.'s iOS, watchOS, macOS, HomePod, and tvOS operating systems."},
  {source: "Apple", target: "Beats", type: "acquisition", img: "images/beats.png", url: "https://en.wikipedia.org/wiki/Beats_Electronics", hover: "Beats Electronics LLC (also known as Beats by Dr. Dre, or simply Beats by Dre) is a division of Apple Inc. that produces audio products."},
  {source: "Apple", target: "Swift", type: "main", img: "images/apple-swift.png", url: "https://en.wikipedia.org/wiki/Swift_(programming_language)", hover: "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc...."},
  {source: "Apple", target: "Apps", type: "main", img: "images/apple.png", url: "", hover: ""},
  {source: "Apps", target: "Apple Music", type: "main", img: "images/apple.png", url: "https://en.wikipedia.org/wiki/Apple_Music", hover: "Apple Music is a music and video streaming service developed by Apple Inc."},
  {source: "Apps", target: "Shazam", type: "acquisition", img: "images/shazam.png", url: "https://en.wikipedia.org/wiki/Shazam_(application)", hover: "Shazam is an application developed by Apple Inc., originally developed by Shazam Entertainment Ltd. prior to 2018."},
  {source: "Apps", target: "Apple Maps", type: "main", img: "images/apple-maps.png", url: "https://en.wikipedia.org/wiki/Apple_Maps", hover: "Apple Maps (or simply Maps) is a web mapping service developed by Apple Inc."},
  {source: "Apps", target: "iCloud", type: "main", img:"images/apple-icloud.png", url: "https://en.wikipedia.org/wiki/ICloud", hover: "iCloud is a cloud storage and cloud computing service from Apple Inc. launched on October 12, 2011."},
  {source: "Apps", target: "iWork", type: "main", img:"images/apple-iwork.png", url: "https://en.wikipedia.org/wiki/IWork", hover: "iWork is an office suite of applications created by Apple Inc. for its macOS and iOS operating systems, and also available cross-platform through the iCloud website."},
  {source: "iWork", target: "Keynote", type: "main", img:"images/apple-keynote.png", url: "https://en.wikipedia.org/wiki/Keynote_(presentation_software)", hover: "Keynote is a presentation software application developed as a part of the iWork productivity suite by Apple Inc."},
  {source: "iWork", target: "Pages", type: "main", img:"images/apple-pages.png", url: "https://en.wikipedia.org/wiki/Pages_(word_processor)", hover: "Pages is a word processor developed by Apple Inc."},
  {source: "iWork", target: "Numbers", type: "main", img:"images/apple-numbers.png", url: "https://en.wikipedia.org/wiki/Numbers_(spreadsheet)", hover: "Numbers is a spreadsheet application developed by Apple Inc. as part of the iWork productivity suite alongside Keynote and Pages."},
  {source: "Apps", target: "iLife", type: "main", img:"images/apple.png", url: "https://en.wikipedia.org/wiki/ILife", hover: "iLife is a software suite for macOS and iOS developed by Apple Inc."},
  {source: "iLife", target: "GarageBand", type: "main", img:"images/apple-garageband.png", url: "https://en.wikipedia.org/wiki/GarageBand", hover: "GarageBand is a line of digital audio workstations for macOS and iOS that allows users to create music or podcasts."},
  {source: "iLife", target: "iMovie", type: "main", img:"images/apple-imovie.png", url: "https://en.wikipedia.org/wiki/IMovie", hover: "iMovie is a video editing software application sold by Apple Inc. for the Mac and iOS (iPhone, iPad, iPad Mini and iPod Touch)."},
  {source: "Apps", target: "iTunes", type: "main", img:"images/apple-itunes.png", url: "https://en.wikipedia.org/wiki/ITunes", hover: "iTunes (/ˈaɪtjuːnz/) is a media player, media library, Internet radio broadcaster, and mobile device management application developed by Apple Inc."},
  {source: "Apps", target: "Safari", type: "main", img:"images/safari.png", url: "https://en.wikipedia.org/wiki/Safari_(web_browser)", hover: "Safari is a graphical web browser developed by Apple, based on the WebKit engine."},
  {source: "Apps", target: "Apple Photos", type: "main", img:"images/apple-photos.png", url: "https://en.wikipedia.org/wiki/Apple_Photos", hover: "Apple Photos (or simply Photos) is a photo management and editing application developed by Apple."},
  {source: "Apps", target: "iMessages", type: "main", img:"images/apple-messages.png", url: "https://en.wikipedia.org/wiki/IMessage", hover: "iMessage is an instant messaging service developed by Apple Inc."},
  {source: "Apps", target: "Mail", type: "main", img:"images/apple-mail.png", url: "https://en.wikipedia.org/wiki/Mail_(Apple)", hover: "Mail (also known as Apple Mail or Mail.app) is an email client included with the operating systems macOS, iOS and watchOS by Apple Inc."},
  {source: "Apple", target: "tvOS", type: "main", img:"images/apple-tv.png", url: "https://en.wikipedia.org/wiki/TvOS", hover: "tvOS is an operating system developed by Apple Inc. for the fourth-generation and later Apple TV digital media player."},
  {source: "tvOS", target: "TV", type: "hardware", img:"images/apple-tv.png", url: "https://en.wikipedia.org/wiki/Apple_TV", hover: "Apple TV is a digital media player and microconsole developed and sold by Apple Inc."},
  {source: "Apple", target: "watchOS", type: "main", img:"images/apple-watch.png", url: "https://en.wikipedia.org/wiki/WatchOS", hover: "watchOS is the mobile operating system of the Apple Watch, developed by Apple Inc. "},
  {source: "watchOS", target: "Watch", type: "hardware", img:"images/apple-watch.png", url: "https://en.wikipedia.org/wiki/Apple_Watch", hover: "Apple Watch is a line of smartwatches designed, developed, and marketed by Apple Inc."},
  {source: "Apple", target: "iOS", type: "main", img:"images/apple-ios.png", url: "https://en.wikipedia.org/wiki/IOS", hover: "iOS (formerly iPhone OS) is a mobile operating system created and developed by Apple Inc. exclusively for its hardware."},
  {source: "iOS", target: "iPhone", type: "hardware", img:"images/apple.png", url: "https://en.wikipedia.org/wiki/IPhone", hover: "iPhone (/ˈaɪfoʊn/ EYE-fone) is a line of smartphones designed and marketed by Apple Inc."},
  {source: "iPhone", target: "iPhone 7 (Plus)", type: "hardware", img:"images/apple.png", url: "https://en.wikipedia.org/wiki/IPhone_7", hover: "iPhone 7 and iPhone 7 Plus are smartphones designed, developed, and marketed by Apple Inc. It is the tenth generation of the iPhone."},
  {source: "iPhone", target: "iPhone 8 (Plus)", type: "hardware", img:"images/apple.png", url: "https://en.wikipedia.org/wiki/IPhone_8", hover: "The iPhone 8 and iPhone 8 Plus are smartphones designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone."},
  {source: "iPhone", target: "iPhone X", type: "hardware", img:"images/apple.png", url: "https://en.wikipedia.org/wiki/IPhone_X", hover: "iPhone X (Roman numeral 'X' pronounced 'ten', although colloquially, sometimes pronounced as the name of the letter)[9][10] is a smartphone designed, developed, and marketed by Apple Inc. It was the eleventh generation of the iPhone."},
  {source: "iPhone", target: "iPhone XS (Max)", type: "hardware", img:"images/apple.png", url: "https://en.wikipedia.org/wiki/IPhone_XS", hover: "iPhone XS and iPhone XS Max (stylized as iPhone Xs and iPhone Xs Max, Roman numeral 'X' pronounced 'ten') are smartphones designed, developed and marketed by Apple Inc. They are the twelfth-generation flagships of the iPhone, succeeding the iPhone X."},
  {source: "iPhone", target: "iPhone XR", type: "hardware", img:"images/apple.png", url: "https://en.wikipedia.org/wiki/IPhone_XR", hover: "iPhone XR (stylized as iPhone Xr, Roman numeral 'X' pronounced 'ten') is a smartphone designed and manufactured by Apple, Inc. It is the twelfth generation of the iPhone."},
  {source: "iOS", target: "iPad", type: "hardware", img:"images/apple-ipad.png", url: "https://en.wikipedia.org/wiki/IPad", hover: "iPad (/ˈaɪpæd/ EYE-pad) is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS mobile operating system."},
  {source: "iPad", target: "Mini", type: "hardware", img: "images/apple-ipad.png", url: "https://en.wikipedia.org/wiki/IPad_Mini", hover: "The iPad Mini family (branded and marketed as iPad mini) is a line of mini tablet computers designed, developed, and marketed by Apple Inc."},
  {source: "iPad", target: "Pro", type: "hardware", img: "images/apple-ipad.png", url: "https://en.wikipedia.org/wiki/IPad_Pro", hover: "The iPad Pro family is a line of iPad tablet computers designed, developed, and marketed by Apple Inc., that runs the iOS mobile operating system."},
  {source: "iOS", target: "iPod", type: "hardware", img:"images/apple.png", url: "https://en.wikipedia.org/wiki/IPod", hover: "The iPod is a line of portable media players and multi-purpose pocket computers designed and marketed by Apple Inc."},
  {source: "iPod", target: "Touch", type: "hardware", img: "images/apple.png", url: "https://en.wikipedia.org/wiki/IPod_Touch", hover: "The iPod Touch (stylized and marketed as iPod touch) is a brand of iOS-based all-purpose mobile devices designed and marketed by Apple Inc. with a touchscreen-controlled user interface."},
  {source: "Apple", target: "macOS", type: "main", img:"images/apple-macos.png", url: "https://en.wikipedia.org/wiki/MacOS", hover: "macOS (/ˌmækʔoʊˈɛs/; previously Mac OS X and later OS X, Roman numeral 'X' pronounced 'ten') is a series of graphical operating systems developed and marketed by Apple Inc. since 2001."},
  {source: "macOS", target: "Mac", type: "hardware", img: "images/apple.png", url: "https://en.wikipedia.org/wiki/Macintosh", hover: "The Macintosh (pronounced as /ˈmækɪnˌtɒʃ/ MAK-in-tosh; branded as Mac since 1998) is a family of personal computers designed, manufactured, and sold by Apple Inc. since January 1984."},
  {source: "Mac", target: "iMac", type: "hardware", img: "images/apple.png", url: "https://en.wikipedia.org/wiki/IMac", hover: "iMac is a family of all-in-one Macintosh desktop computers designed and built by Apple Inc."},
  {source: "Mac", target: "Mac Mini", type: "hardware", img: "images/apple.png", url: "https://en.wikipedia.org/wiki/Mac_Mini", hover: "The Mac mini (marketed and branded with lowercase 'mini') is a small desktop computer case manufactured by Apple Inc."},
  {source: "Mac", target: "MacBook", type: "hardware", img: "images/apple.png", url: "https://en.wikipedia.org/wiki/MacBook_(12-inch)", hover: "The MacBook (known colloquially as the 'Retina MacBook' or '12-inch MacBook') is a line of Macintosh portable computers introduced in March 2015 by Apple Inc.["},
  {source: "Mac", target: "MacBook Pro", type: "hardware", img: "images/apple.png", url: "https://en.wikipedia.org/wiki/MacBook_Pro", hover: "The MacBook Pro (sometimes abbreviated as MBP) is a line of Macintosh portable computers introduced in January 2006 by Apple Inc."},
  {source: "Mac", target: "MacBook Air", type: "hardware", img: "images/apple.png", url: "", hover: "The MacBook Air is a line of Macintosh subnotebook computers developed and manufactured by Apple Inc."},
  {source: "Mac", target: "Mac Pro", type: "hardware", img: "images/apple.png", url: "https://en.wikipedia.org/wiki/Mac_pro", hover: "The Mac Pro is a series of workstation and server computers designed, manufactured and sold by Apple Inc. since 2006."}
];

var facebook = [
  {source: "", target: "Facebook", img: "images/facebook.png", url: "https://en.wikipedia.org/wiki/Facebook", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."},
  {source: "Facebook", target: "Instagram", type: "acquisition", img: "images/instagram.png", url: "https://en.wikipedia.org/wiki/Instagram", hover: "Instagram (also known as IG) is a photo and video-sharing social networking service owned by Facebook, Inc."},
  {source: "Facebook", target: "WhatsApp", type: "acquisition", img: "images/whatsapp.png", url: "https://en.wikipedia.org/wiki/WhatsApp", hover: "WhatsApp Messenger is a freeware and cross-platform messaging and Voice over IP (VoIP) service owned by Facebook."},
  {source: "Facebook", target: "Oculus VR", type: "acquisition", img: "images/oculus.png", url: "https://en.wikipedia.org/wiki/Oculus_VR", hover: "Oculus VR is an American technology company founded by Palmer Luckey, Brendan Iribe, Michael Antonov and Nate Mitchell in July 2012 in Irvine, California, now based in Menlo Park."},
  {source: "Oculus VR", target: "Oculus Rift", type: "hardware", img: "images/oculus.png", url: "https://en.wikipedia.org/wiki/Oculus_Rift", hover: "The Oculus Rift is a virtual reality headset developed and manufactured by Oculus VR, a division of Facebook Inc., released on March 28, 2016. "},
  {source: "Facebook", target: "Facebook.com", type: "main", img: "images/facebook.png", url: "https://en.wikipedia.org/wiki/Facebook", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."},
  {source: "Facebook.com", target: "Messenger", type: "main", img: "images/facebook-messenger.png", url: "https://en.wikipedia.org/wiki/Facebook_Messenger", hover: "Facebook Messenger (commonly known as Messenger)[4] is a messaging app and platform."},
  {source: "Messenger", target: "M", type: "main", img: "images/facebook-m.png", url: "https://en.wikipedia.org/wiki/M_(virtual_assistant)", hover: "M was a virtual assistant by Facebook, first announced in August 2015, that can automatically complete tasks for users, such as purchase items, arrange gift deliveries, reserve restaurant tables, and arrange travel."},
  {source: "Facebook", target: "Facebook Research", type: "research", img: "images/facebook.png", url: "https://research.fb.com/", hover: ""},
  {source: "Facebook", target: "React", type: "main", img: "images/facebook-react.png", url: "https://en.wikipedia.org/wiki/React_(JavaScript_library)", hover: "In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."}
];

var ibm = [
  {source: "", target: "IBM", img: "images/ibm.png"},
  {source: "IBM", target: "DB2", type: "main", img: "images/ibm.png"},
  {source: "IBM", target: "IBM Research", type: "research", img: "images/ibm.png"},
  {source: "IBM", target: "Watson", type: "main", img: "images/watson.png"},
  {source: "IBM", target: "IBM Cloud", type: "main", img: "images/ibm.png"},
  {source: "IBM Cloud", target: "Bluemix", type: "main", img: "images/ibm-bluemix.png"},
  {source: "IBM", target: "SPSS", type: "acquisition", img: "images/spss.png"},
  {source: "IBM", target: "The Weather Company", type: "acquisition", img: "images/weather-company.png"},
  {source: "IBM", target: "Kenexa", type: "acquisition", img: "images/kenexa.png"},
  {source: "Kenexa", target: "BrassRing", type: "main", img: "images/kenexa.png"},
  {source: "IBM", target: "Lotus Notes", type: "acquisition", img: "images/lotus.png"},
  {source: "Lotus Notes", target: "IBM Notes", type: "transition", img: "images/ibm-notes.png"},
  {source: "IBM", target: "Red Hat", type: "acquisition", img: "images/red-hat.png"},
  {source: "Red Hat", target: "Fedora", type: "main", img: "images/fedora.png"},
  {source: "Red Hat", target: "CentOS", type: "acquisition", img: "images/centos.png"},
  {source: "Red Hat", target: "CoreOS", type: "acquisition", img: "images/coreos.png"},
  {source: "Red Hat", target: "Ansible", type: "acquisition", img: "images/ansible.png"}
];

var microsoft = [
  {source: "", target: "Microsoft", img: "images/microsoft.png", url: "https://en.wikipedia.org/wiki/Microsoft", hover: "Microsoft Corporation (MS) is an American multinational technology company with headquarters in Redmond, Washington."},
  {source: "Microsoft", target: "GitHub", type: "acquisition", img: "images/github.png", url: "https://en.wikipedia.org/wiki/GitHub", hover: "GitHub Inc. is a web-based hosting service for version control using Git."},
  {source: "Microsoft", target: "Hotmail", type: "acquisition", img: "images/hotmail.png", url: "https://en.wikipedia.org/wiki/Outlook.com", hover: "Outlook.com is a web-based suite of webmail, contacts, tasks, and calendaring services from Microsoft. One of the world's first webmail services, it was founded in 1996 as Hotmail (stylized as HoTMaiL) by Sabeer Bhatia and Jack Smith in Mountain View, California, and headquartered in Sunnyvale."},
  {source: "Hotmail", target: "Outlook.com", type: "transition", img: "images/outlook.png", url: "https://en.wikipedia.org/wiki/Outlook.com", hover: "Outlook.com is a web-based suite of webmail, contacts, tasks, and calendaring services from Microsoft. One of the world's first webmail services, it was founded in 1996 as Hotmail (stylized as HoTMaiL) by Sabeer Bhatia and Jack Smith in Mountain View, California, and headquartered in Sunnyvale."},
  {source: "Microsoft", target: "Bing", type: "main", img:"images/bing.png", url: "https://en.wikipedia.org/wiki/Bing_(search_engine)", hover: "Bing is a web search engine owned and operated by Microsoft."},
  {source: "Microsoft", target: "Skype", type: "acquisition", img:"images/skype.png", url: "https://en.wikipedia.org/wiki/Skype", hover: "Skype (/skaɪp/) is a telecommunications application software product that specializes in providing video chat and voice calls between computers, tablets, mobile devices, the Xbox One console, and smartwatches via the Internet and to regular telephones."},
  {source: "Microsoft", target: "Linkedin", type: "acquisition", img: "images/linkedin.png", url: "https://en.wikipedia.org/wiki/LinkedIn", hover: "LinkedIn (/lɪŋktˈɪn/) is a business and employment-oriented service that operates via websites and mobile apps."},
  {source: "Microsoft", target: "SQL Server", type: "main", img: "images/microsoft-sqlserver.png", url: "https://en.wikipedia.org/wiki/Microsoft_SQL_Server", hover: "Microsoft SQL Server is a relational database management system developed by Microsoft."},
  {source: "Microsoft", target: "Minecraft", type: "acquisition", img: "images/minecraft.png", url: "https://en.wikipedia.org/wiki/Minecraft", hover: "Minecraft is a 2011 sandbox video game created by Swedish game developer Markus Persson and later developed by Mojang."},
  {source: "Microsoft", target: "Windows", type: "main", img:"images/windows.png", url: "https://en.wikipedia.org/wiki/Microsoft_Windows", hover: "Microsoft Windows is a group of several graphical operating system families, all of which are developed, marketed, and sold by Microsoft."},
  {source: "Windows", target: "Windows 10", type: "main", img:"images/windows.png", url: "https://en.wikipedia.org/wiki/Windows_10", hover: "Windows 10 is a series of personal computer operating systems produced by Microsoft as part of its Windows NT family of operating systems."},
  {source: "Windows", target: "Cortana", type: "main", img:"images/microsoft-cortana.png", url: "https://en.wikipedia.org/wiki/Cortana", hover: "Cortana is a virtual assistant created by Microsoft..."},
  {source: "Windows", target: "HoloLens", type: "hardware", img:"images/microsoft-hololens.png", url: "https://en.wikipedia.org/wiki/Microsoft_HoloLens", hover: "Microsoft HoloLens, known under development as Project Baraboo,[3] is a pair of mixed reality smartglasses developed and manufactured by Microsoft."},
  {source: "Windows", target: "Surface", type: "hardware", img:"images/microsoft.png", url: "https://en.wikipedia.org/wiki/Microsoft_Surface", hover: "Microsoft Surface is a series of touchscreen Windows personal computers and interactive whiteboards designed and developed by Microsoft."},
  {source: "Surface", target: "Surface Go", type: "hardware", img:"images/microsoft.png", url: "https://en.wikipedia.org/wiki/Surface_Go", hover: "The Surface Go is a 10-inch (250 mm) 2-in-1 detachable from the Microsoft Surface series that was released on August 2nd, 2018."},
  {source: "Surface", target: "Surface Pro", type: "hardware", img:"images/microsoft.png", url: "https://en.wikipedia.org/wiki/Surface_Pro", hover: "The Surface Pro is a first generation 2-in-1 detachable of the Microsoft Surface series, designed and manufactured by Microsoft."},
  {source: "Surface", target: "Surface Laptop", type: "hardware", img:"images/microsoft.png", url: "https://en.wikipedia.org/wiki/Surface_Laptop", hover: "The Surface Laptop is a laptop designed and produced by Microsoft, part of the company's Surface line of personal computing devices."},
  {source: "Surface", target: "Surface Book", type: "hardware", img:"images/microsoft.png", url: "https://en.wikipedia.org/wiki/Surface_Book", hover: "The Surface Book is a 2-in-1 PC designed and produced by Microsoft, part of the company's Surface line of personal computing devices."},
  {source: "Surface", target: "Surface Studio", type: "hardware", img:"images/microsoft.png", url: "https://en.wikipedia.org/wiki/Surface_Studio", hover: "The Surface Studio is an all-in-one PC, designed and produced by Microsoft as part of its Surface series of Windows-based personal computing devices."},
  {source: "Surface", target: "Surface Hub", type: "hardware", img:"images/microsoft.png", url: "https://en.wikipedia.org/wiki/Surface_Hub", hover: "The Surface Hub is a brand of interactive whiteboard developed and marketed by Microsoft, as part of the Microsoft Surface family."},
  {source: "Windows", target: "Xbox OS", type: "main", img:"images/windows-xbox.png", url: "https://en.wikipedia.org/wiki/Xbox_One_system_software", hover: "The Xbox One system software, sometimes called the Xbox OS, is the operating system for the eighth-generation home video game console, Xbox One."},
  {source: "Xbox OS", target: "Xbox One", type: "hardware", img:"images/windows-xbox.png", url: "https://en.wikipedia.org/wiki/Xbox_One", hover: "Xbox One is a line of eighth generation home video game consoles developed by Microsoft."},
  {source: "Xbox OS", target: "Xbox One X", type: "hardware", img:"images/windows-xbox.png", url: "https://en.wikipedia.org/wiki/Xbox_One#Xbox_One_X", hover: "Xbox One X is a high-end hardware revision of Xbox One."},
  {source: "Microsoft", target: "Azure", type: "main", img: "images/microsoft-azure.png", url: "https://en.wikipedia.org/wiki/Microsoft_Azure", hover: "Microsoft Azure (formerly Windows Azure /ˈæʒər/) is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through a global network of Microsoft-managed data centers."},
  {source: "Microsoft", target: "Office", type: "main", img: "images/microsoft-office.png", url: "https://en.wikipedia.org/wiki/Microsoft_Office", hover: "Microsoft Office is a family of client software, server software, and services developed by Microsoft."},
  {source: "Office", target: "SharePoint", type: "main", img: "images/microsoft-sharepoint.png", url: "https://en.wikipedia.org/wiki/SharePoint", hover: "SharePoint is a web-based collaborative platform that integrates with Microsoft Office."},
  {source: "Office", target: "Word", type: "main", img: "images/microsoft-word.png", url: "https://en.wikipedia.org/wiki/Microsoft_Word", hover: "Microsoft Word (or simply Word) is a word processor developed by Microsoft."},
  {source: "Office", target: "Excel", type: "main", img: "images/microsoft-excel.png", url: "https://en.wikipedia.org/wiki/Microsoft_Excel", hover: "Microsoft Excel is a spreadsheet developed by Microsoft for Windows, macOS, Android and iOS."},
  {source: "Office", target: "PowerPoint", type: "acquisition", img: "images/microsoft-powerpoint.png", url: "https://en.wikipedia.org/wiki/Microsoft_PowerPoint", hover: "Microsoft PowerPoint (or simply PowerPoint) is a presentation program, created by Robert Gaskins and Dennis Austin at a software company named Forethought, Inc. It was released on April 20, 1987, initially for Macintosh computers only. Microsoft acquired PowerPoint for $14 million three months after it appeared."},
  {source: "Office", target: "Microsoft Access", type: "main", img: "images/microsoft-access.png", url: "https://en.wikipedia.org/wiki/Microsoft_Access", hover: "Microsoft Access is a database management system (DBMS) from Microsoft that combines the relational Microsoft Jet Database Engine with a graphical user interface and software-development tools."},
  {source: "Microsoft", target: "Research", type: "research", img: "images/microsoft.png", url: "https://en.wikipedia.org/wiki/Microsoft_Research", hover: "Microsoft Research is the research subsidiary of Microsoft."},
  {source: "Microsoft", target: "Maluuba", type: "acquisition", img: "images/maluuba.png", url: "https://en.wikipedia.org/wiki/Maluuba", hover: "Maluuba is a Canadian technology company conducting research in artificial intelligence and language understanding. Founded in 2011, the company was acquired by Microsoft in 2017."},
  {source: "Microsoft", target: "OneDrive", type: "main", img: "images/microsoft-onedrive.png", url: "https://en.wikipedia.org/wiki/OneDrive", hover: "OneDrive (formerly known as SkyDrive, Windows Live SkyDrive, and Windows Live Folders) is a file hosting service and synchronization service operated by Microsoft as part of its suite of Office Online services."},
  {source: "Microsoft", target: "Internet Explorer", type: "main", img: "images/microsoft-ie.png", url: "https://en.wikipedia.org/wiki/Internet_Explorer", hover: "Internet Explorer (formerly Microsoft Internet Explorer and Windows Internet Explorer, commonly referred to as Explorer and abbreviated IE or MSIE) is a series of graphical web browsers developed by Microsoft and included in the Microsoft Windows line of operating systems, starting in 1995."},
  {source: "Internet Explorer", target: "Edge", type: "transition", img: "images/microsoft-edge.png", url: "https://en.wikipedia.org/wiki/Microsoft_Edge", hover: "Microsoft Edge (codename 'Spartan') is a web browser developed by Microsoft."}
];

var yahoo = [
  {source: "", target: "Verizon", img: "images/verizon.png"},
  {source: "Verizon", target: "Media and Telematics", type: "main", img: "images/verizon.png"},
  {source: "Media and Telematics", target: "Oath Inc.", type: "main", img: "images/oath.png"},
  {source: "Oath Inc.", target: "Yahoo", type: "acquisition", img: "images/yahoo.png"},
  {source: "Oath Inc.", target: "AOL", type: "acquisition", img: "images/aol.png"},
  {source: "Oath Inc.", target: "HuffPost", type: "acquisition", img: "images/huffpost.png"},
  {source: "Oath Inc.", target: "TechCrunch", type: "acquisition", img: "images/techcrunch.png"},
  {source: "Oath Inc.", target: "Tumblr", type: "acquisition", img: "images/tumblr.png"},
  {source: "Oath Inc.", target: "MapQuest", type: "acquisition", img: "images/mapquest.jpg"},
  {source: "Yahoo", target: "Yahoo Search", type: "main", img: "images/yahoo.png"},
  {source: "Yahoo", target: "Yahoo Mail", type: "main", img: "images/yahoo.png"},
  {source: "Yahoo", target: "Flickr", type: "acquisition", img: "images/flickr.png"},
  {source: "Yahoo", target: "Yahoo Sports", type: "main", img: "images/yahoo.png"},
  {source: "Yahoo", target: "Yahoo News", type: "main", img: "images/yahoo-news.png"},
  {source: "Yahoo", target: "Yahoo Music", type: "main", img: "images/yahoo-music.png"},
  {source: "Yahoo", target: "GeoCities", type: "acquisition", img: "images/yahoo.png"}
];

// var zoom = d3.behavior.zoom()
//   .scaleExtent([0, 10])
//   .on("zoom", redraw); 
//   //if you are sure that your zoom function is working just replace redraw with your zoom function

// var zoom = d3.behavior.zoom()
//     .translate(projection.translate())
//     .scale(projection.scale())
//     .scaleExtent([height, 8 * height])
//     .on("zoom", zoomed);

// var g = svg.append("g")
//     .call(zoom);

// // function redraw() {
// //     return svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
// // }

// function zoomed() {
//   projection.translate(d3.event.translate).scale(d3.event.scale);
//   g.selectAll("path").attr("d", path);
// }


function a1() {
  // Remove the existing svg elements
  d3.selectAll("g > *").remove();

  // Return the checked checkboxes
  var checkedValues = [];
  var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for (var i=0; checkedBoxes[i]; ++i) {
      if (checkedBoxes[i].checked) {
           checkedValues.push(checkedBoxes[i].value);
      }
  }
  if (checkedValues) {
    draw(checkedValues);
  }
};


function draw(checks) {
  var checkedValues = checks;
  var links = [];
  // Tried .concat(); and Array.prototype.push.apply(); 
  // but deep copies of the arrays needed after a d3js .remove() call
  if (checkedValues.includes('alphabet')) {
    var links = links.concat(JSON.parse(JSON.stringify(alphabet)));
  }
  if (checkedValues.includes('amazon')) {
    var links = links.concat(JSON.parse(JSON.stringify(amazon)));
  }
  if (checkedValues.includes('apple')) {
    var links = links.concat(JSON.parse(JSON.stringify(apple)));
  }
  if (checkedValues.includes('facebook')) {
    var links = links.concat(JSON.parse(JSON.stringify(facebook)));
  }
  if (checkedValues.includes('ibm')) {
    var links = links.concat(JSON.parse(JSON.stringify(ibm)));
  }
  if (checkedValues.includes('microsoft')) {
    var links = links.concat(JSON.parse(JSON.stringify(microsoft)));
  }
  if (checkedValues.includes('yahoo')) {
    var links = links.concat(JSON.parse(JSON.stringify(yahoo)));
  }
  if (checkedValues.includes('ai')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingAiResearch)));
  }
  if (checkedValues.includes('assistants')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingAssistants)));
  }
  if (checkedValues.includes('browsers')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingBrowsers)));
  }
  if (checkedValues.includes('clouds')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingClouds)));
  }
  if (checkedValues.includes('email')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingEmail)));
  }
  if (checkedValues.includes('search')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingSearch)));
  }
  if (checkedValues.includes('vr')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingVR)));
  }
  var nodes = {};
  // Compute the distinct nodes from the links.
  // links.forEach(function(link) {
  //   link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  //   link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, img: link.img});
  // });

  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, 
                                                                     hover: link.hover, 
                                                                     url: link.url,
                                                                     desc: link.desc});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target,
                                                               img: link.img, 
                                                               hover: link.hover,
                                                               url: link.url});
  });
  
  // workaround to let subclusters be unlinked
  for (var i = 0; i < links.length; i++) {
    if (links[i].source.name == "") {
      links.splice(i, 1);
    }
  }

  // delete empty node
  delete nodes[""]

  // Define graph parameters
  // var width = 1000;
  // var height = 600;
  var width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth;
  var width = width * 0.9;

  var height = window.innerHeight
              || document.documentElement.clientHeight
              || document.body.clientHeight;
  var height = height * 0.75;


  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(70)
      .charge(-250)
      .on("tick", tick)
      .start();
  // Node dragging behavior
  drag = force.drag()
    .origin(function(d) { return d; })
    .on("dragstart", dragstarted)
    .on("drag", dragged)
    .on("dragend", dragended);
  // Node dragging behavior (drag and anchor but not with zoom)
  // drag = force.drag()
  //   .on('dragstart', function(d) {
  //     d3.select(this).classed('fixed', d.fixed = true);
  //     force.stop();
  // });

  var svg = d3.select("#visualization")
      .attr("width", width)
      .attr("height", height)
      // Zoom behavior
      .call(d3.behavior.zoom().on("zoom", function () {
        svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
        }))
      .append("g");
  // // Add a border around the visualization box
  // var borderPath = svg.append("rect")
  //         .attr("x", 0)
  //         .attr("y", 0)
  //         .attr("height", height)
  //         .attr("width", width)
  //         .style("stroke", "blue")
  //         .style("fill", "none")
  //         .style("stroke-dasharray", "10 5")
  //         .style("stroke-width", 2);
  // Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
      .data(["transition", "acquisition"])
    .enter().append("marker")  // the arrowhead
      .attr("id", function(d) { return d; })
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", -1.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
    .append("path")
      .attr("d", "M0,-5L10,0L0,5");

  var path = svg.append("g").selectAll("path")
      .data(force.links())
    .enter().append("path")
      .attr("class", function(d) { return "link " + d.type; })
      .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

  var circle = svg.append("g").selectAll("circle")
      .data(force.nodes())
    if (checkedValues.includes("showLogos")) {
      circle.enter().append("image")
      .attr("xlink:href", function(d) { return d.img; })
    } else {
      circle.enter().append("circle")
      .attr("r", 6)
    }

  circle.attr("x", -16)
      .attr("y", -16)
      .attr("width", 32)
      .attr("height", 32)
      // Tooltip
      .on("mouseover", function(d) { 
        if(d.hover) { return tooltip.text(d.hover).style("visibility", "visible");} })
      .on("mousemove", function(d) { 
        return tooltip.text(d.hover).style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
      .on("mouseout", function(d) { 
        return tooltip.text(d.hover).style("visibility", "hidden");})
      // Double clicking
      .on("dblclick", function(d) {
        durl = d.url.toString(); window.open(durl, "_blank");
        // Disable double-click zoom
        d3.select("svg").on("dblclick.zoom", null); })
      // Right click
      // .on("contextmenu", function(d) {
      //   //stop showing browser menu
      //   d3.event.preventDefault();
      //   return tooltip.text(d.desc).style("visibility", "visible"); })
      .call(force.drag);
  // Implemented tooltip feature
  var tooltip = d3.select("body")
    .append("div")
    .style("background-color", "skyblue")
    .style("padding", "0.5em")
    .style("font-size", "12px")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden");

  // Text labels
  var text = svg.append("g").selectAll("text")
      .data(force.nodes())
    .enter().append("text")
      .attr("x", -20)
      .attr("y", -16) //".31em")
      .text(function(d) { return d.name; })
      .call(wrap, 75);

  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
          words = text.text().slice(0,50).split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1, // ems
          x = text.attr("x"),
          y = text.attr("y"),
          // dy = parseFloat(text.attr("dy")),
          dy = text.attr("dy") ? text.attr("dy") : 0; //<-- null check
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }


  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", linkArc);
    circle.attr("transform", transform);
    text.attr("transform", transform);  // The text labels for each node
  };
  function linkArc(d) {
    var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        // The original code for the elliptical arcs - maybe re-use one day
        // dr = Math.sqrt(dx * dx + dy * dy);
        dr = 0;
    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
  };
  function transform(d) {
    return "translate(" + d.x + "," + d.y + ")";
  };
};

function dragstarted(d) {
  d3.event.sourceEvent.stopPropagation();
  d3.select(this).classed("dragging", true);
  // Makes moved nodes sticky
  // d3.select(this).classed('fixed', d.fixed = true);
  // d3.force.stop();
}

function dragged(d) {
  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}

function dragended(d) {
  d3.select(this).classed("dragging", false);
}


// At first display all clusters
draw(['alphabet', 'amazon', 'apple', 'facebook', 'microsoft', 'showLogos']);
// draw(['alphabet', 'amazon', 'apple', 'facebook', 'ibm', 'microsoft', 'yahoo', 'showLogos']);
