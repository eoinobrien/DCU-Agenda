(function(){
  'use strict';

  angular.module('timetable')
  .service('TimetableService', ['$q', '$http', 'localStorageService', TimetableService]);

  /**
  * Users DataService
  * Uses embedded, hard-coded data model; acts asynchronously to simulate
  * remote data service call(s).
  *
  * @returns {{loadAll: Function}}
  * @constructor
  */
  function TimetableService($q, $http, localStorageService){

    // Promise-based API
    return {
      getTimetableAPI : function(course, date) {
        return $http.get('http://api.dcusignin.me/v1/timetable/day/'+ course + '/' + date +'/10');
      },
      getTimetableLocalStorage : function(course){
        if(localStorageService.isSupported){
          var timetable = localStorageService.get("tt." + course);

          var yesterdays_time = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000).getTime();
          if(timetable !== null && timetable.fetched_timestamp * 1000 > yesterdays_time){
            return timetable;
          }
          return null;
        }
        return null;
      },
      setTimetableLocalStorage : function(course, value){
        if(localStorageService.isSupported){
          return localStorageService.set("tt." + course, value);
        }
        return false;
      }
    };
  }

})();
