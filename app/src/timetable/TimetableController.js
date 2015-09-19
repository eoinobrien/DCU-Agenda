(function(){

  angular
       .module('Timetable')
       .controller('TimetableController', [
          'TimetableService', '$filter', '$log', '$q',
          TimetableController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function TimetableController( TimetableService, $filter, $log, $q) {
    var vm = this;

    vm.days = [ ];
    vm.course = "CASE4";
    vm.progress = "indeterminate";
    vm.todays_date = $filter('date')(new Date(),'yyyy-MM-dd');
    vm.tomorrows_date = $filter('date')(new Date(new Date().getTime() + 24 * 60 * 60 * 1000),'yyyy-MM-dd');
    vm.six_days_date = $filter('date')(new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000),'yyyy-MM-dd');

    // Load all Timetables
    TimetableService
          .loadAllTimetables(vm.course, vm.todays_date)
          .then( function( json ) {
            vm.days = [].concat(json.data.message.days);
            vm.progress = "";
          });

  }

})();
