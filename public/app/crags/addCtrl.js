(function(){
    var addCtrl = function($scope, $location, $http, cragService, Popup) {
        // Bind user form data 
        $scope.newCrag=new cragService();

        $scope.newCrag.tags = ["Family","Dog","Shop","Restaurant","Hospital"];

        $scope.addCrag=function() {
            //console.log('newCrag.tags:' + JSON.stringify($scope.newCrag));
            $scope.newCrag
                .$save()
                .then(function(){
                    Popup.showPopup('Crag added to the database!');
                    $location.path('/manage');
                })
        }
    }
    addCtrl.$inject = ['$scope','$location','$http','cragService','Popup'];

    angular.module('cragfinder')
           .controller('addCtrl',addCtrl);
}());