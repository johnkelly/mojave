app.factory('Register', function ($resource) {
    return $resource('http://localhost:5000/registrations', {});
});
