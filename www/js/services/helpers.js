app.factory('Helpers', function(flash, $state, CurrentUser) {
  var root = {};

  root.ajax_error_handling = function(response) {
    if(response.status == 422){
      flash([{ level: 'error', text: response.data.errors.join(" ") }]);
    } else {
      flash([{ level: 'error', text: "We're sorry a technical error has occured." }]);
    }
  }

  root.redirect_if_authenticated = function(response) {
    if(CurrentUser.isAuthenticated()){
      flash([{ level: 'error', text: "You are already signed in." }]);
      $state.go('app.meals');
    }
  }
  return root;
});
