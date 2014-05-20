app.controller('WelcomeCtrl', function($scope, $state, Helpers) {
  Helpers.redirect_if_authenticated()

  $scope.go_to_sign_in = function() {
    $state.go('sign_in');
  }

  $scope.go_to_sign_up = function() {
    $state.go('sign_up');
  }
});
