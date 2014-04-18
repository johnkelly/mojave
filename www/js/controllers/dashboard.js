app.controller('DashboardCtrl', function($scope, $state, CurrentUser) {
  $scope.first_name = function() {
    return CurrentUser.first_name();
  }

  $scope.gravatar = function() {
    return CurrentUser.gravatar();
  }

  $scope.signOut = function() {
    CurrentUser.delete_all();
    $state.go('welcome');
  }
})
