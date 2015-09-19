(function(){
  'use strict';

  angular.module('Timetable')
  .service('TimetableService', ['$q', '$http', TimetableService]);

  /**
  * Users DataService
  * Uses embedded, hard-coded data model; acts asynchronously to simulate
  * remote data service call(s).
  *
  * @returns {{loadAll: Function}}
  * @constructor
  */
  function TimetableService($q, $http){

    // Promise-based API
    return {
      loadAllTimetables : function(course, date) {
        return $http.get('http://api.dcusignin.me/v1/timetable/day/'+ course + '/' +date+'/10');
      }
    };
  }

})();
