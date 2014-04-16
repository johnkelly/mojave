app.controller('SignInCtrl', function ($scope, $stateParams, auth, Loading, Register) {
  $scope.show_email_and_password_form = false;

  $scope.toggle_email_and_password_form = function() {
    $scope.show_email_and_password_form = !$scope.show_email_and_password_form;
  }

  $scope.signIn = function() {
    auth.signin({
      connection: 'Username-Password-Authentication',
      username: $scope.username,
      password: $scope.password
    });
    Loading.start();
  }

  $scope.signinWithTwitter = function() {
    auth.signin({
      connection: 'twitter'
    });
    Loading.start();
  }

  $scope.signinWithFacebook = function() {
    auth.signin({
      connection: 'facebook'
    });
    Loading.start();
  }

  $scope.signinWithGoogle = function() {
    auth.signin({
      connection: 'google-oauth2'
    });
    Loading.start();
  }

  $scope.signUpWithEmailPassword = function() {
    console.log($scope.signup);

    Register.save(
      { register: $scope.signup },
      function(response) {
        console.log($scope.signup);
        auth.signin({
          connection: 'Username-Password-Authentication',
        username: $scope.sign_up.email,
        password: $scope.sign_up.password,
        name: $scope.sign_up.name
        });
        Loading.start();
      }
    )
  }
});
