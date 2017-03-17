(function(){
    var Popup = function($window){
        this.showPopup = function(message){
            return $window.confirm(message);
            console.log('message'+message);
        }
    };
    Popup.$inject = ['$window'];

    angular.module('cragfinder')
           .service('Popup',Popup);
}());