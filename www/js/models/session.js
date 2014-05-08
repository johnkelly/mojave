app.factory('Session', function ($resource, Host) {
    return $resource(Host + '/session', {});
});

