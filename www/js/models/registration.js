app.factory('Registration', function ($resource) {
    return $resource('http://localhost:5000/registration', {});
});
