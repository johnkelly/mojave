app.controller('WelcomeCtrl', function($scope, $stateParams, Registration, Session, flash) {
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
        console.log("Signed In");
      },
      function(response) {
        if(response.status == 422){
          flash([{ level: 'error', text: response.data.errors.join(" ") }]);
        } else {
          flash([{ level: 'error', text: "We're sorry a technical error has occured." }]);
        }
      }
    )
  }

  $scope.signUp = function() {
    console.log($scope.signup);

    Registration.save(
      { register: $scope.signup },
      function(response) {
        console.log("Signed Up");
        flash([{ level: 'success', text: "Welcome!" }]);
      },
      function(response) {
        if(response.status == 422){
          flash([{ level: 'error', text: response.data.errors.join(" ") }]);
        } else {
          flash([{ level: 'error', text: "We're sorry a technical error has occured." }]);
        }
      }
    )
  }
});
