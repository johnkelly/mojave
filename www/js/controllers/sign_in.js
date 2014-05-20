app.controller('SignInCtrl', function($scope, $state, Session, flash, Helpers, CurrentUser) {
  Helpers.redirect_if_authenticated()

  $scope.signin = { email: "", password: ""}

  $scope.returnToWelcome = function() {
    $state.go('welcome');
  }

  $scope.signIn = function() {
    Helpers.show_loading();
    Session.save(
      { session: $scope.signin },
      function(response) {
        Helpers.hide_loading();
        var user = response.user;
        CurrentUser.store(user.auth_token, user.email, user.first_name);
        $state.go('app.meals');
        flash([{ level: 'success', text: "Welcome Back!" }]);
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
    )
  }
})
