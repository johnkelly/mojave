app.controller('ShoppingCtrl', function($scope, $state, auth) {
  $scope.user_name = auth.profile.name;
  $scope.avatar = auth.profile.picture;

  $scope.signOut = function() {
    auth.signout();
    $state.go('signin');
  }
})
