app.factory('Registration', function ($resource, Host) {
    return $resource(Host + '/registration', {});
});
