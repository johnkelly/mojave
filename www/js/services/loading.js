app.service('Loading', function($ionicLoading) {
  var currentLoading;

  this.start = function() {
    if (!currentLoading) {
      currentLoading = $ionicLoading.show({
        content: 'Loading',
      });
    }
  }

  this.stop = function() {
    if (currentLoading) {
      currentLoading.hide();
      currentLoading = null;
    }
  }
});
