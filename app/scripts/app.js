// User Submitted Variables
var project_id = 'pelagic-sorter-660';
var client_id = '755035748276-12damo7j83om9h2ss5nb25l1hnvgg5f3.apps.googleusercontent.com';

var config = {
  'client_id': client_id,
  'scope': 'https://www.googleapis.com/auth/bigquery'
};

function showProjects() {
  var request = gapi.client.bigquery.projects.list();
  request.execute(function(response) {
      $('#result_box').html(JSON.stringify(response, null));
  });
}

function showDatasets() {
  var request = gapi.client.bigquery.datasets.list({
    'projectId':'publicdata'
  });
  request.execute(function(response) {
      $('#result_box').html(JSON.stringify(response.result.datasets, null));
  });
}

function runQuery() {
 var request = gapi.client.bigquery.jobs.query({
    'projectId': project_id,
    'timeoutMs': '30000',
    'query': 'SELECT TOP(repository_language, 5) as language, COUNT(*) as count FROM [publicdata:samples.github_timeline] WHERE repository_language != "";'
  });
  request.execute(function(response) {
      console.log(response);
      $('#result_box').html(JSON.stringify(response.result.rows, null));
  });
}

function auth() {
  gapi.auth.authorize(config, function() {
      gapi.client.load('bigquery', 'v2');
      $('body').html('BigQuery client initiated');
      $('#auth_button').fadeOut();
      $('#projects_button').fadeIn();
      $('#dataset_button').fadeIn();
      $('#query_button').fadeIn();
  });
}


$(document).ready(function(){
  $('#authorize').on('click', function()   {
    // chrome.identity.getAuthToken(function(token){
    //   console.log('token='+token);
    //   console.log('error='+chrome.runtime.lasterror);
    // });
    auth();
  });
});
