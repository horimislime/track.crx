'use strict';

console.log(gapi);
chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);

    gapi.auth.authorize({'immediate': false}, function(token) {
	if(!token) {
	    alert('Authentication failed! Check the OAuth client ID and scopes.');
	}
	console.log('auth success. token = ' + token.access_token);
    });
});

chrome.tabs.onUpdated.addListener(function (tabId, info) {

    if (info.status == 'loading') {
	return;
    }
    
    chrome.tabs.get(tabId, function(tab) {
	var data = {
	    "kind": "bigquery#tableDataInsertAllRequest",
	    "rows": [
		{
		    "json": {
			"title": tab.title,
			"url": tab.url
		    }
		}
	    ]
	};
	
	gapi.client.request({
	    'path': '/bigquery/v2/projects/pelagic-sorter-660/datasets/log/tables/weblog/insertAll',
	    'method': 'POST',
	    'body': data,
	    'callback': function(json, raw) {
		console.log('json resp = '+JSON.stringify(json));
		console.log('raw resp = '+raw);
	    }
	});
    });
});
