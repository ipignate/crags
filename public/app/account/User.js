(function(){
    var User = function($resource) {
      var UserResource = $resource('/api/users/:id', {_id: "@id"}, {
        update: {method:'PUT',isArray:false}
      });

      UserResource.prototype.isAdmin = function() {
        return this.roles && this.roles.indexOf('admin') > -1;
      }
    return UserResource;
    }
    User.$inject = ['$resource'];

    angular.module('cragfinder')
           .factory('User',User);
}());