(function(){
  'use strict';
  var app = angular.module('cragfinder',[
                           'ngResource', 
                           'ngRoute',
                           'uiGmapgoogle-maps',
                           'ngTagsInput'
  ]);
      
  app.config(['$routeProvider', 
              '$locationProvider', 
              'uiGmapGoogleMapApiProvider', configRoutes]);
      
  function configRoutes($routeProvider,
                        $locationProvider,
                        uiGmapGoogleMapApiProvider) {

        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyA1zZ6RcphiTFpr4yUDJKYTAn_LzTOZdL4',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });

        var routeRoleChecks = {
          admin: {auth: function(Auth) {
            return Auth.authorizeCurrentUserForRoute('admin')
          }},
          user: {auth: function(Auth) {
            return Auth.authorizeAuthenticatedUserForRoute()
          }}
        };

        $locationProvider.html5Mode(true);
        
        $routeProvider
            .when('/', { 
              templateUrl: '/partials/main/main', 
              controller: 'mainCtrl'
            })
            .when('/manage',{
              templateUrl: '/partials/crags/manage',
              controller: 'manageCtrl'
            })
            .when('/add',{
              templateUrl: '/partials/crags/add', 
              controller: 'addCtrl',
              resolve: routeRoleChecks.user
            })
            .when('/edit/:id',{
              templateUrl: '/partials/crags/edit', 
              controller: 'editCtrl',
              resolve: routeRoleChecks.user
            })
            .when('/delete',{
              templateUrl: '/partials/crags/delete', 
              controller: 'manageCtrl',
              resolve: routeRoleChecks.user
            })
            .when('/admin/users', { 
              templateUrl: '/partials/admin/userlist',
              controller: 'userListCtrl', 
              resolve: routeRoleChecks.admin
            })
            .when('/signup', { 
              templateUrl: '/partials/account/signup',
              controller: 'signupCtrl'
            })
            .when('/profile', { 
              templateUrl: '/partials/account/profile',
              controller: 'profileCtrl', 
              resolve: routeRoleChecks.user
            })
            .otherwise({ redirectTo: "/" });
      }      
      app.run(function($rootScope, $location) {
          $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
              if(rejection === 'not authorized') {
                  $location.path('/');
              }
          })
      });
}());