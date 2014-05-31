app.factory('Helpers', function($state, CurrentUser, $ionicLoading, $ionicPopup) {
  var root = {};

  root.ajax_error_handling = function(response) {
    this.hide_loading();
    if(response.status == 422){
      this.showAlert(response.data.errors.join(" "));
    } else if(response.status == 401) {
      CurrentUser.sign_out();
    } else {
      this.showAlert("We're sorry a technical error has occured.");
    }
  }

  root.redirect_if_authenticated = function(response) {
    if(CurrentUser.isAuthenticated()){
      $state.go('app.meals');
    }
  }

  root.shuffle_array = function(array) {
    for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
  }

  root.show_loading = function() {
    $ionicLoading.show({content: '<div class="large-loading-icon ion-loading-c"></div>'});
  }

  root.hide_loading = function() {
    $ionicLoading.hide();
  }

  root.showAlert = function(message) {
    var alertPopup = $ionicPopup.alert({
      title: message,
      template: ''
    });
  }

  return root;
});
