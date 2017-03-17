(function(){
    var manageCtrl = function($scope, $location, $routeParams, cragService, Popup){
        // Put crags into scope for the view model
        $scope.craglist=cragService.query();

        $scope.updateCrag=function(thisCrag){
        $location.path('/edit/'+ thisCrag._id);
        };

        $scope.deleteCrag=function(thisCrag){
            if(Popup.showPopup('Really delete this Crag?')){
                thisCrag.$delete({id: thisCrag._id});
                $location.path('/');
            }
        }
   }
   manageCtrl.$inject = ['$scope','$location','$routeParams','cragService','Popup'];

   angular.module('cragfinder')
          .controller('manageCtrl',manageCtrl);
}());