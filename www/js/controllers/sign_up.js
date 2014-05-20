app.controller('SignUpCtrl', function($scope, $state, Registration, flash, Helpers, CurrentUser) {
  Helpers.redirect_if_authenticated()

  $scope.signup = {}

  $scope.returnToWelcome = function() {
    $state.go('welcome');
  }

  $scope.go_to_sign_in = function() {
    $state.go('sign_in');
  }

  $scope.signUp = function() {
    Helpers.show_loading();
    Registration.save(
      { register: $scope.signup },
      function(response) {
        Helpers.hide_loading();
        var user = response.user;
        CurrentUser.store(user.auth_token, user.email, user.first_name);
        $state.go('app.kitchen');
        flash([{ level: 'success', text: "Welcome!" }]);
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
    )
  }
});
