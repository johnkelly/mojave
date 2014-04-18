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
    console.log($scope.signin);

    Session.save(
      { session: $scope.signin },
      function(response) {
        var user = response.user;
        CurrentUser.store(user.auth_token, user.email, user.gravatar, user.first_name);
        $state.go('app.dashboard');
        flash([{ level: 'success', text: "Welcome Back!" }]);
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
    )
  }

  $scope.signUp = function() {
    console.log($scope.signup);

    Registration.save(
      { register: $scope.signup },
      function(response) {
        var user = response.user;
        CurrentUser.store(user.auth_token, user.email, user.gravatar, user.first_name);
        $state.go('app.dashboard');
        flash([{ level: 'success', text: "Welcome!" }]);
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
    )
  }
});
