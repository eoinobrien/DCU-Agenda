(function(){
  'use strict';
  angular
  .module('dcuTimetable', ['ngMaterial', 'Timetable'])
  .config(function($mdThemingProvider, $mdIconProvider, $httpProvider){

    // $mdIconProvider
    // .defaultIconSet("./assets/svg/avatars.svg", 128)
    // .icon("menu"       , "./assets/svg/menu.svg"        , 24)
    // .icon("share"      , "./assets/svg/share.svg"       , 24)
    // .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
    // .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
    // .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
    // .icon("phone"      , "./assets/svg/phone.svg"       , 512);

    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('amber');

    // $httpProvider.defaults.useXDomain = true;
    // $httpProvider.defaults.withCredentials = true;
    // delete $httpProvider.defaults.headers.common["X-Requested-With"];
    // $httpProvider.defaults.headers.common["Accept"] = "application/json";
    // $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  });
})();