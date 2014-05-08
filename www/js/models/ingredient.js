app.factory('Ingredient', function ($resource, CurrentUser, Host) {
  return $resource(Host + '/user/ingredients/:id',
    { id: '@id' },
    {
      'get':    { method:'GET', headers: CurrentUser.authorization_header() },
      'save':   { method:'POST', headers: CurrentUser.authorization_header() },
      'query':  { method:'GET', isArray:true, headers: CurrentUser.authorization_header() },
      'remove': { method:'DELETE', headers: CurrentUser.authorization_header() },
      'delete': { method:'DELETE', headers: CurrentUser.authorization_header() },
      'update': { method:'PATCH', headers: CurrentUser.authorization_header() }
    });
});
