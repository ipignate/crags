(function(){
  var Notifier = function(Toastr) {
    return {
      notify: function(msg) {
        Toastr.success(msg);
      }
    }
  }
  Notifier.$inject = ['Toastr'];

  angular.module('cragfinder')
         .factory('Notifier',Notifier)
         .value('Toastr',toastr);
}());