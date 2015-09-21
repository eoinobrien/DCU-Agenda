(function(){
  'use strict';

  angular.module('courses')
  .service('CoursesService', ['$q', '$http', 'localStorageService', CoursesService]);

  /**
  * Users DataService
  * Uses embedded, hard-coded data model; acts asynchronously to simulate
  * remote data service call(s).
  *
  * @returns {{loadAll: Function}}
  * @constructor
  */
  function CoursesService($q, $http, localStorageService){

    // Promise-based API
    return {
      loadCoursesList : function() {
        return $http.get('http://api.dcusignin.me/v1/timetable/');
      }
    };
  }

})();
