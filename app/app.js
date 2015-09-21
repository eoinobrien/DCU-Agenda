(function(){
  'use strict';
  angular
  .module('DCUTimetable', ['ngNewRouter', 'ngMaterial', 'timetable',
  'courses', 'LocalStorageModule'])
  .config(function($mdThemingProvider, $mdIconProvider, $httpProvider, localStorageServiceProvider){

    $mdIconProvider
    .icon("menu"       , "./assets/svg/more_vert.svg"   , 24)
    .icon("close"      , "./assets/svg/close.svg"       , 24)
    // .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
    // .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
    // .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
    // .icon("phone"      , "./assets/svg/phone.svg"       , 512);

    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('amber');

    localStorageServiceProvider
    .setPrefix('dcu');

    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  })
  .controller('AppController', ['$router', AppController]);

  function AppController($router) {
    $router.config([
      { path: '/', component: 'courses' },
      { path: '/:id', component: 'timetable' }
    ]);
  }
})();