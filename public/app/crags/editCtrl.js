(function(){
    var editCtrl = function($scope, $routeParams, $location, cragService) {
    //Get the crag to be edited by getting the id from the previous choice
      $scope.loadCrag=function(){
        $scope.crag=cragService.get({id:$routeParams.id});
      }
      //load the crag onto the view
      $scope.loadCrag();

      //update the crag when the user presses the submit button
      $scope.saveCrag=function(){
        $scope.crag.$update(function(){
          $location.path('/manage');
        });
      };
    }
    editCtrl.$inject = ['$scope','$routeParams','$location','cragService'];

    angular.module('cragfinder')
           .controller('editCtrl',editCtrl);
}());