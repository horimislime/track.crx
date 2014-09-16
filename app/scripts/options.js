$(document).ready(function() {
    
    chrome.storage.sync.get({
	'projectId': '',
	'datasetId': '',
	'tableId': ''
    }, function(items) {
	console.log(items);
	$('#project-id').val(items.projectId);
	$('#dataset-id').val(items.datasetId);
	$('#table-id').val(items.tableId);
    });
    
    $('#save').click( function() {
	chrome.storage.sync.set({
	    'projectId': $('#project-id').val(),
	    'datasetId': $('#dataset-id').val(),
	    'tableId': $('#table-id').val()
	}, function() {
	    alert('Settings saved.');
	});
    });
});
