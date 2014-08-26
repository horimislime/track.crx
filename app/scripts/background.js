'use strict';

console.log(gapi);
chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
    chrome.tabs.get(tabId, function(tab) {
      console.log('open url = ' + tab.url);
    });
});
