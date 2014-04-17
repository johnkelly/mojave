app.factory('Session', function ($resource) {
    return $resource('http://localhost:5000/session', {});
});

