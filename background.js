chrome.browserAction.onClicked.addListener(function(activeTab) {
	chrome.tabs.executeScript(null, {file: "content.js"});
    });


/*
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	chrome.tabs.executeScript(tabId, {file: "content.js"} );
    });
*/

/*
setInterval(function(activeTab){
	chrome.tabs.executeScript(null, {file: "content.js"});
}, 5000);
*/


