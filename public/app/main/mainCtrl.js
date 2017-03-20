(function(){
    var mainCtrl = function($scope, $http, Geo){
      //Variable definition
      var formData = {},
          mks = {},
          queryBody = {},
          queryResults = {},
          queryCount = 0;
      
      // Define map object
      $scope.map = {
                      center: {
                          latitude: 38.74,
                          longitude: -9.14
                      },
                      zoom: 6,
                      bounds: {
                          ne: {
                              latitude: 41.951679,
                              longitude: -6.591010
                          },
                          sw: { 
                              latitude: 37.010141,
                              longitude: -8.944450
                          }
                      }
      };
      $scope.options = {
          scrollwheel: false
      };

      //Get the crag dataset for querying and displaying
      $scope.queryCrags = function() {
      // Assemble queryBody
        queryBody = {
           name: $scope.name,
           region: $scope.region,
           grade: $scope.grade
        };
        
        $http.post('/api/crags/query', queryBody)
             .success(function(queryResults) {
                $scope.queryCount = queryResults.length;
                $scope.crags = queryResults;
                $scope.mks = Geo.convertToMarkers(queryResults);
             })
             .error(function(error){
                console.log('Error: ' + error);
             });
      }

      //Initialize
      $scope.queryCrags();
    };

    mainCtrl.$inject = ['$scope','$http','Geo'];

    angular.module('cragfinder')
           .controller('mainCtrl',mainCtrl);
}());