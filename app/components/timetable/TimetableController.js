(function(){

  angular
  .module('timetable')
  .controller('TimetableController', [
    'TimetableService', '$routeParams', '$filter', '$log', '$q', '$mdDialog',
    TimetableController
  ])
  .filter('removeOldDays', ['$filter',RemoveOldDays])
  .filter('removeOldClasses', RemoveOldClasses);

  function TimetableController(TimetableService, $routeParams, $filter, $log, $q, $mdDialog) {
    var vm = this;

    vm.days = [ ];
    vm.course = $routeParams.id;
    vm.progress = "indeterminate";
    vm.todays_date = $filter('date')(new Date(),'yyyy-MM-dd');
    vm.tomorrows_date = $filter('date')(new Date(new Date().getTime() + 24 * 60 * 60 * 1000),'yyyy-MM-dd');
    vm.six_days_date = $filter('date')(new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000),'yyyy-MM-dd');

    var timetable = TimetableService.getTimetableLocalStorage(vm.course)

    if(timetable === null){
      // Load Timetable
      TimetableService
      .getTimetableAPI(vm.course, vm.todays_date)
      .then( function( json ) {
        vm.days = [].concat(json.data.message.days);
        TimetableService.setTimetableLocalStorage(vm.course, json.data.message);
        vm.progress = "";
      });
    } else {
      vm.days = timetable;
    }


    vm.showAbout = function(ev) {
      $mdDialog.show({
        controller: AboutController,
        templateUrl: 'components/timetable/view/about.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
    };
  }

  function RemoveOldDays($filter) {
    return function(input) {
      var todays_date = $filter('date')(new Date(),'yyyy-MM-dd');
      var out = [];

      angular.forEach(input, function(day) {
        if (day.date >= todays_date) {
          out.push(day)
        }
      })
      return out;
    }
  }

  function RemoveOldClasses() {
    return function(input) {
      var time_now = Date.now();
      var out = [];

      angular.forEach(input, function(event) {
        if (event.end_timestamp < time_now) {
          out.push(event)
        }
      })
      return out;
    }
  }

  function AboutController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

})();
