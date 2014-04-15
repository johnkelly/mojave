app.controller('SignInCtrl', function ($scope, $stateParams, auth, Loading) {
  $scope.signIn = function() {
    auth.signin({
      connection: 'Username-Password-Authentication',
      username: $scope.username,
      password: $scope.password
    });
    Loading.start();
  }
});
