app.controller('WelcomeCtrl', function($scope, $state, Registration, Session, flash, Helpers, CurrentUser) {
  Helpers.redirect_if_authenticated()

  $scope.showSignUp = false;
  $scope.showSignIn = false;

  $scope.signin = { email: "", password: ""}
  $scope.signup = {}


  $scope.toggleShowSignUp = function() {
    $scope.showSignUp = !$scope.showSignUp;
    $scope.showSignIn = false;
  }

  $scope.toggleShowSignIn = function() {
    $scope.showSignIn = !$scope.showSignIn;
    $scope.showSignUp = false;
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
