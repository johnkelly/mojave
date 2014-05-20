app.controller('SignUpCtrl', function($scope, $state, Registration, Helpers, CurrentUser) {
  Helpers.redirect_if_authenticated()

  $scope.signup = { first_name: "", email: "", password: "", password_confirmation: "" }
  $scope.show_step_two = false;

  $scope.returnBack = function() {
    if($scope.show_step_two){
      $scope.toggleShowStepTwo();
    } else {
      $state.go('welcome');
    }
  }

  $scope.toggleShowStepTwo = function() {
    $scope.show_step_two = !$scope.show_step_two;
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
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
    )
  }
});
