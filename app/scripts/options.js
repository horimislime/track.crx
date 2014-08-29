$(document).ready(function() {
    $('#save').click( function() {
	console.log('click');
	localStorate['project-id'] = $('#project-id').val();
	localStorage['dataset-id'] = $('#dataset-id').val();
	localStorage['table-id'] = $('#table-id').val();
	console.log(JSON.stringify(localStorage));
    });
});
