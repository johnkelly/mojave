app.controller('AppCtrl', function($scope, $state, CurrentUser) {
  $scope.first_name = function() {
    return CurrentUser.first_name();
  }

  $scope.signOut = function() {
    CurrentUser.delete_all();
    $state.go('welcome');
  }
})
