(function(){    
    var Identity = function($window, User) {
      var currentUser;
      if(!!$window.bootstrappedUserObject) {
        currentUser = new User();
        angular.extend(currentUser, $window.bootstrappedUserObject);
      }
      return {
        currentUser: currentUser,
        isAuthenticated: function() {
          return !!this.currentUser;
        },
        isAuthorized: function(role) {
          return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
      }
    }
    Identity.$inject = ['$window','User'];

    angular.module('cragfinder')
           .factory('Identity',Identity);
}());