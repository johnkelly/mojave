app.controller('AppCtrl', function($scope, CurrentUser) {
  $scope.first_name = function() {
    return CurrentUser.first_name();
  }

  $scope.signOut = function() {
    CurrentUser.sign_out();
  }
})
