(function() {
  'use strict';
    angular
    .module('portfolio', [
      'ngRoute',
    ])
    .config(function ($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'name.html',
        controller: 'MainController'
      })
      .when('/contents', {
        templateUrl: 'contents.html',
        controller: 'MainController'
      })
      .when('/main', {
        templateUrl: 'main.html',
        controller: 'MainController'
      })
      .when('/404', {
        templateUrl: 'views/biz.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTp: '/404'
      })
    });
}());
