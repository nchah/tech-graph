
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
  {source: "FAIR", target: "AI/ML Research", type: "competitor"},
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
  {source: "", target: "Alphabet", img: "images/alphabet.png", hover: "", url: ""},
  {source: "Alphabet", target: "Calico", type: "main", img: "images/calico.png" },
  {source: "Alphabet", target: "Google", type: "main", img: "images/google.png"},
  {source: "Alphabet", target: "DeepMind", type: "acquisition", img: "images/deepmind.png"},
  {source: "Alphabet", target: "X", type: "main", img: "images/x.png"},
  {source: "Alphabet", target: "Waymo", type: "main", img: "images/waymo.png"},
  {source: "Alphabet", target: "Access", type: "main", img: "images/access.png"},
  {source: "Alphabet", target: "GV", type: "main", img: "images/gv.png"},
  {source: "Alphabet", target: "Jigsaw", type: "main", img: "images/jigsaw.png"},
  {source: "Alphabet", target: "Verily", type: "main", img: "images/verily.png"},
  {source: "Google", target: "Waze", type: "acquisition", img: "images/waze.png"},
  {source: "Google", target: "Nest", type: "acquisition", img: "images/nest.png"},
  {source: "Google", target: "Languages\n/Frameworks", type: "main", img: "images/google.png"},
  {source: "Languages\n/Frameworks", target: "Dart", type: "main", img: "images/google-dart.png"},
  {source: "Languages\n/Frameworks", target: "AngularJS", type: "main", img: "images/google-angular.png"},
  {source: "Languages\n/Frameworks", target: "Go", type: "main", img: "images/google-go.png"},
  {source: "Google", target: "Maps", type: "acquisition", img: "images/google-maps.png"},
  {source: "Google", target: "Search", type: "main", img: "images/google.png"},
  {source: "Google", target: "Ads", type: "main", img: "images/google.png"},
  {source: "Google", target: "Gmail", type: "main", img: "images/gmail.png"},
  {source: "Google", target: "Chromium", type: "main", img: "images/chromium.png"},
  {source: "Google", target: "YouTube", type: "acquisition", img: "images/youtube.png"},
  {source: "Google", target: "Cloud", type: "main", img: "images/google-cloud.png"},
  {source: "Google", target: "Android", type: "acquisition", img: "images/android.png"},  
  {source: "Google", target: "Google Photos", type: "main", img: "images/google-photos.png"},
  {source: "Google", target: "Google+", type: "main", img: "images/google-plus.png"},
  {source: "Google", target: "Blogger", type: "acquisition", img: "images/blogger.png"},
  {source: "Google", target: "Google AI", type: "research", img: "images/google.png"},
  {source: "Android", target: "Play", type: "main", img: "images/google-play.png"},
  {source: "Android", target: "Assistant", type: "main", img: "images/google-assistant.png"},
  {source: "Assistant", target: "Home", type: "hardware", img: "images/google-home.png"},
  {source: "Assistant", target: "Home Mini", type: "hardware", img: "images/google-home.png"},
  {source: "Android", target: "Cardboard", type: "main", img: "images/google-cardboard.png"},
  {source: "Android", target: "Daydream", type: "main", img: "images/google-daydream.png"},
  {source: "Android", target: "Pixel", type: "hardware", img: "images/pixel.png"},
  {source: "Maps", target: "Earth", type: "main", img: "images/google-earth.png"},
  {source: "Chromium", target: "Chrome", type: "main", img: "images/chrome.png"},
  {source: "Chrome", target: "Chrome OS", type: "main", img: "images/chrome.png"},
  {source: "Chrome OS", target: "Chromebook", type: "hardware", img: "images/chrome.png"},
  {source: "Chrome", target: "Chromecast", type: "hardware", img: "images/chrome.png"},
  {source: "Cloud", target: "GCP", type: "main", img: "images/google-cloud.png"},
  {source: "Cloud", target: "App Engine", type: "main", img: "images/google-appengine.png"},
  {source: "Cloud", target: "Drive", type: "main", img: "images/google-drive.png"},
  {source: "Cloud", target: "G Suite", type: "main", img: "images/gsuite.png"},
  {source: "Cloud", target: "Kaggle", type: "acquisition", img: "images/kaggle.png"},
  {source: "G Suite", target: "Keep", type: "main", img: "images/google-keep.png"},
  {source: "G Suite", target: "Docs", type: "main", img: "images/google-docs.png"},
  {source: "G Suite", target: "Sheets", type: "main", img: "images/google-sheets.png"},
  {source: "G Suite", target: "Slides", type: "main", img: "images/google-slides.png"},
  {source: "DeepMind", target: "AlphaGo", type: "main", img: "images/alphago.png"},
  {source: "X", target: "Loon", type: "main", img: "images/x.png"},
  {source: "X", target: "Glass", type: "main", img: "images/glass.png"},
  {source: "Nest", target: "Thermostat", type: "main", img: "images/nest.png"},
  {source: "Nest", target: "Dropcam", type: "acquisition", img: "images/dropcam.png"},
  {source: "Dropcam", target: "Nest Cam", type: "transition", img: "images/nest.png"},
  {source: "Access", target: "Google Fiber", type: "main", img: "images/google-fiber.png"}
];

var amazon = [
  {source: "", target: "Amazon", img: "images/amazon.png"},
  {source: "Amazon", target: "Whole Foods", type: "acquisition", img: "images/whole-foods.png"},
  {source: "Amazon", target: "IMDb", type: "acquisition", img: "images/imdb.png"},
  {source: "Amazon", target: "Audible", type: "acquisition", img: "images/audible.png"},
  {source: "Amazon", target: "Goodreads", type: "acquisition", img: "images/goodreads.png"},
  {source: "Amazon", target: "Twitch.tv", type: "acquisition", img: "images/twitch.png"},
  {source: "Twitch.tv", target: "Curse", type: "acquisition", img: "images/curse.png"},
  {source: "Amazon", target: "Amazon.com", type: "main", img: "images/amazon.png"},
  {source: "Amazon.com", target: "AWS", type: "main", img: "images/amazon-aws.png"},
  {source: "AWS", target: "Cloudfront", type: "main", img: "images/aws-cloudfront.png"},
  {source: "AWS", target: "DynamoDB", type: "main", img: "images/amazon-aws.png"},
  {source: "AWS", target: "EBS", type: "main", img: "images/aws-ebs.png"},
  {source: "AWS", target: "EC2", type: "main", img: "images/aws-ec2.png"},
  {source: "Amazon.com", target: "Prime", type: "main", img: "images/amazon-prime.png"},
  {source: "Amazon.com", target: "Alexa", type: "main", img: "images/amazon-alexa.png"},
  {source: "Amazon.com", target: "Fire OS", type: "main", img: "images/amazon.png"},
  {source: "Fire OS", target: "Phone", type: "hardware", img: "images/amazon-firephone.png"},
  {source: "Fire OS", target: "Echo", type: "hardware", img: "images/amazon-echo.png"},
  {source: "Echo", target: "Dot", type: "hardware", img: "images/amazon-echo.png"},
  {source: "Echo", target: "Tap", type: "hardware", img: "images/amazon-echo.png"},
  {source: "Echo", target: "Look", type: "hardware", img: "images/amazon-echo.png"},
  {source: "Echo", target: "Show", type: "hardware", img: "images/amazon-echo.png"},
  {source: "Fire OS", target: "Kindle", type: "hardware", img: "images/amazon-kindle.png"},
  {source: "Fire OS", target: "FireTV", type: "hardware", img: "images/amazon-firetv.png"},
  {source: "FireTV", target: "Stick", type: "hardware", img: "images/amazon-firetv.png"},
  {source: "Amazon.com", target: "Video", type: "main", img: "images/amazon-video.png"},
  {source: "Amazon.com", target: "Amazon Music", type: "main", img: "images/amazon-music.png"}
];

var apple = [
  {source: "", target: "Apple", img: "images/apple.png"},
  {source: "Apple", target: "Siri", type: "acquisition", img: "images/siri.png"},
  {source: "Apple", target: "Beats", type: "acquisition", img: "images/beats.png"},
  {source: "Apple", target: "Swfit", type: "main", img: "images/apple-swift.png"},
  {source: "Apple", target: "Apps", type: "main", img: "images/apple.png"},
  {source: "Apps", target: "Apple Music", type: "main", img: "images/apple.png"},
  {source: "Apps", target: "Shazam", type: "acquisition", img: "images/shazam.png"},
  {source: "Apps", target: "Apple Maps", type: "main", img: "images/apple-maps.png"},
  {source: "Apps", target: "iCloud", type: "main", img:"images/apple-icloud.png"},
  {source: "Apps", target: "iWork", type: "main", img:"images/apple-iwork.png"},
  {source: "iWork", target: "Keynote", type: "main", img:"images/apple-keynote.png"},
  {source: "iWork", target: "Pages", type: "main", img:"images/apple-pages.png"},
  {source: "iWork", target: "Numbers", type: "main", img:"images/apple-numbers.png"},
  {source: "Apps", target: "iLife", type: "main", img:"images/apple.png"},
  {source: "iLife", target: "GarageBand", type: "main", img:"images/apple-garageband.png"},
  {source: "iLife", target: "iMovie", type: "main", img:"images/apple-imovie.png"},
  {source: "Apps", target: "iTunes", type: "main", img:"images/apple-itunes.png"},
  {source: "Apps", target: "Safari", type: "main", img:"images/safari.png"},
  {source: "Apps", target: "Apple Photos", type: "main", img:"images/apple-photos.png"},
  {source: "Apps", target: "iMessages", type: "main", img:"images/apple-messages.png"},
  {source: "Apps", target: "Mail", type: "main", img:"images/apple-mail.png"},
  {source: "Apple", target: "tvOS", type: "main", img:"images/apple-tv.png"},
  {source: "tvOS", target: "TV", type: "hardware", img:"images/apple-tv.png"},
  {source: "Apple", target: "watchOS", type: "main", img:"images/apple-watch.png"},
  {source: "watchOS", target: "Watch", type: "hardware", img:"images/apple-watch.png"},
  {source: "Apple", target: "iOS", type: "main", img:"images/apple-ios.png"},
  {source: "iOS", target: "iPhone", type: "hardware", img:"images/apple.png"},
  {source: "iPhone", target: "iPhone 7 (Plus)", type: "hardware", img:"images/apple.png"},
  {source: "iPhone", target: "iPhone 8 (Plus)", type: "hardware", img:"images/apple.png"},
  {source: "iPhone", target: "iPhone X", type: "hardware", img:"images/apple.png"},
  {source: "iPhone", target: "iPhone XS (Max)", type: "hardware", img:"images/apple.png"},
  {source: "iPhone", target: "iPhone XR", type: "hardware", img:"images/apple.png"},
  {source: "iOS", target: "iPad", type: "hardware", img:"images/apple-ipad.png"},
  {source: "iPad", target: "Mini", type: "hardware", img: "images/apple-ipad.png"},
  {source: "iPad", target: "Pro", type: "hardware", img: "images/apple-ipad.png"},
  {source: "iOS", target: "iPod", type: "hardware", img:"images/apple.png"},
  {source: "iPod", target: "Touch", type: "hardware", img: "images/apple.png"},
  {source: "Apple", target: "macOS", type: "main", img:"images/apple-macos.png"},
  {source: "macOS", target: "Mac", type: "hardware", img: "images/apple.png"},
  {source: "Mac", target: "iMac", type: "hardware", img: "images/apple.png"},
  {source: "Mac", target: "Mac Mini", type: "hardware", img: "images/apple.png"},
  {source: "Mac", target: "MacBook", type: "hardware", img: "images/apple.png"},
  {source: "Mac", target: "MacBook Pro", type: "hardware", img: "images/apple.png"},
  {source: "Mac", target: "MacBook Air", type: "hardware", img: "images/apple.png"},
  {source: "Mac", target: "Mac Pro", type: "hardware", img: "images/apple.png"}
];

var facebook = [
  {source: "", target: "Facebook", img: "images/facebook.png"},
  {source: "Facebook", target: "Instagram", type: "acquisition", img: "images/instagram.png"},
  {source: "Facebook", target: "WhatsApp", type: "acquisition", img: "images/whatsapp.png"},
  {source: "Facebook", target: "Oculus VR", type: "acquisition", img: "images/oculus.png"},
  {source: "Oculus VR", target: "Oculus Rift", type: "hardware", img: "images/oculus.png"},
  {source: "Facebook", target: "Facebook.com", type: "main", img: "images/facebook.png"},
  {source: "Facebook.com", target: "Messenger", type: "main", img: "images/facebook-messenger.png"},
  {source: "Messenger", target: "M", type: "main", img: "images/facebook-m.png"},
  {source: "Facebook", target: "FAIR", type: "research", img: "images/facebook.png"},
  {source: "Facebook", target: "React", type: "main", img: "images/facebook-react.png"}
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
  {source: "", target: "Microsoft", img: "images/microsoft.png"},
  {source: "Microsoft", target: "GitHub", type: "acquisition", img: "images/github.png"},
  {source: "Microsoft", target: "Hotmail", type: "acquisition", img: "images/hotmail.png"},
  {source: "Hotmail", target: "Outlook.com", type: "transition", img: "images/outlook.png"},
  {source: "Microsoft", target: "Bing", type: "main", img:"images/bing.png"},
  {source: "Microsoft", target: "Skype", type: "acquisition", img:"images/skype.png"},
  {source: "Microsoft", target: "Linkedin", type: "acquisition", img: "images/linkedin.png"},
  {source: "Microsoft", target: "SQL Server", type: "main", img: "images/microsoft-sqlserver.png"},
  {source: "Microsoft", target: "Minecraft", type: "acquisition", img: "images/minecraft.png"},
  {source: "Microsoft", target: "Windows", type: "main", img:"images/windows.png"},
  {source: "Windows", target: "Windows 10", type: "main", img:"images/windows.png"},
  {source: "Windows", target: "Cortana", type: "main", img:"images/microsoft-cortana.png"},
  {source: "Windows", target: "HoloLens", type: "hardware", img:"images/microsoft-hololens.png"},
  {source: "Windows", target: "Surface", type: "hardware", img:"images/microsoft.png"},
  {source: "Surface", target: "Surface", type: "hardware", img:"images/microsoft.png"},
  {source: "Surface", target: "Surface Go", type: "hardware", img:"images/microsoft.png"},
  {source: "Surface", target: "Surface Pro", type: "hardware", img:"images/microsoft.png"},
  {source: "Surface", target: "Surface Laptop", type: "hardware", img:"images/microsoft.png"},
  {source: "Surface", target: "Surface Book", type: "hardware", img:"images/microsoft.png"},
  {source: "Surface", target: "Surface Studio", type: "hardware", img:"images/microsoft.png"},
  {source: "Surface", target: "Surface Hub", type: "hardware", img:"images/microsoft.png"},
  {source: "Windows", target: "Xbox OS", type: "main", img:"images/windows-xbox.png"},
  {source: "Xbox OS", target: "Xbox One", type: "hardware", img:"images/windows-xbox.png"},
  {source: "Xbox OS", target: "Xbox One X", type: "hardware", img:"images/windows-xbox.png"},
  {source: "Microsoft", target: "Azure", type: "main", img: "images/microsoft-azure.png"},
  {source: "Microsoft", target: "Office", type: "main", img: "images/microsoft-office.png"},
  {source: "Office", target: "SharePoint", type: "main", img: "images/microsoft-sharepoint.png"},
  {source: "Office", target: "Word", type: "main", img: "images/microsoft-word.png"},
  {source: "Office", target: "Excel", type: "main", img: "images/microsoft-excel.png"},
  {source: "Office", target: "PowerPoint", type: "main", img: "images/microsoft-powerpoint.png"},
  {source: "Office", target: "Microsoft Access", type: "main", img: "images/microsoft-access.png"},
  {source: "Microsoft", target: "Research", type: "research", img: "images/microsoft.png"},
  {source: "Microsoft", target: "Maluuba", type: "acquisition", img: "images/maluuba.png"},
  {source: "Microsoft", target: "OneDrive", type: "main", img: "images/microsoft-onedrive.png"},
  {source: "Microsoft", target: "OneDrive", type: "main", img: "images/microsoft-onedrive.png"},
  {source: "Microsoft", target: "Internet Explorer", type: "main", img: "images/microsoft-ie.png"},
  {source: "Internet Explorer", target: "Edge", type: "transition", img: "images/microsoft-edge.png"}
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
