(function(){
    var userListCtrl = function($scope, User) {
      $scope.users = User.query();
    }
    userListCtrl.$inject = ['$scope','User'];

    angular.module('cragfinder')
           .controller('userListCtrl',userListCtrl);
}());