app.service('CurrentUser', function(localStorageService) {

  this.store = function(token, email, first_name){
    localStorageService.add('mojave_token', token);
    localStorageService.add('mojave_email', email);
    localStorageService.add('mojave_first_name', first_name);
  }

  this.delete_all = function() {
    localStorageService.clearAll();
  }

  this.mojave_token = function(){
    return localStorageService.get('mojave_token');
  }

  this.email = function(){
    return localStorageService.get('mojave_email');
  }

  this.first_name = function(){
    return localStorageService.get('mojave_first_name');
  }

  this.authorization_header = function() {
    if(this.isAuthenticated()) {
      return { 'Authorization': 'Token token="' + this.mojave_token() + '", email="' + this.email() + '"' };
    } else {
      return { 'Authorization': 'Token token="null"' };
    }
  };

  this.isAuthenticated = function(){
    return ( this.mojave_token() != null && this.email() != null && this.mojave_token().length != 0 && this.email().length != 0)
  }

  this.update = function(user){
    localStorageService.add('mojave_email', user.email);
    localStorageService.add('mojave_first_name', user.first_name);
  }

  this.sign_out = function(){
    this.delete_all();
    location.reload()
  }
});
