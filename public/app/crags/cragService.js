(function(){
  var cragService = function($resource){
    return $resource('/api/crags/:id', {id: '@_id'},{
      update: {
        method:'PUT', isArray:false}
      });
  }
  cragService.$inject = ['$resource'];

  angular.module('cragfinder')
         .factory('cragService',cragService);
}());