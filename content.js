var links1 = document.links;
var current = window.location.href;
//var current_base = window.location.href.match('//(.*)/')[1];
var current_base = window.location.href.match('\/\/(.*?)\/')[1];
var links2 = [];
var links3 = [];
var next;

// store all links    
for (var i = 0; i < links1.length; i++) {
    if (links1.item(i).href.startsWith('http')) {
    	links2.push(links1.item(i).href);
    }    
}

// get new links
for (var i = 0; i < links2.length; i++) {
    if ((links2[i].match('//(.*)/')[1] != current_base)) {  // && ((links2[i].match('//(.*)/')[1].match('.+?(?=\.)')[1] != current_base.match('.+?(?=\.)')[1]))) { 
	links3.push(links2[i]);
    }
}

// go back if no links on page
if (links2.length == 0) window.history.back();


// go to new link
if (links3.length > 0) window.location.href = links3[Math.floor(Math.random()*links3.length)]; //next = links3[Math.floor(Math.random()*links3.length)];
else window.location.href = links2[Math.floor(Math.random()*links2.length)];


