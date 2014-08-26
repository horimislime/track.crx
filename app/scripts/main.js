function authorize(params, callback) {
  console.log(gapi);
  gapi.auth.authorize(params, function(accessToken) {
    if (!accessToken) {
      var error = document.createElement("p");
      error.textContent = 'Unauthorized';
      document.querySelector("body").appendChild(error);
    } else {
      callback();
    }
  });
}

function test() {
  alert('auth success!');
}

function gapiIsLoaded() {
  var params = { 'interactive': true };
  // if (!(chrome && chrome.app && chrome.app.runtime)) {
  //   // This part of the sample assumes that the code is run as a web page, and
  //   // not an actual Chrome application, which means it takes advantage of the
  //   // GAPI lib loaded from https://apis.google.com/. The client used below
  //   // should be working on http://localhost:8000 to avoid origin_mismatch error
  //   // when making the authorize calls.
  //   params.scope = "https://www.googleapis.com/auth/tasks.readonly";
  //   params.client_id = "966771758693-dlbl9dr57ufeovdll13bb0evko6al7o3.apps.googleusercontent.com";
  //   gapi.auth.init(authorize.bind(null, params, test));
  // } else {
    authorize(params, test);
  // }
}
