'use strict';

angular.module('testApp', [
  'ngRoute'
])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/details/:routeId', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .when('/mapView', {
        templateUrl: 'views/mapview.html',
        controller: 'MapviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });