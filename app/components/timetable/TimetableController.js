(function(){

  angular
  .module('timetable')
  .controller('TimetableController', [
    'TimetableService', '$routeParams', '$filter', '$log', '$q', '$mdDialog',
    TimetableController
  ])
  .filter('removeOldDaysClasses', ['$filter', RemoveOldDaysClasses]);

  function TimetableController(TimetableService, $routeParams, $filter, $log, $q, $mdDialog) {
    var vm = this;

    vm.days = [];
    vm.course = $routeParams.id;
    vm.progress = "indeterminate";
    vm.todays_date = $filter('date')(new Date(),'yyyy-MM-dd');
    vm.time_now = Date.now();
    vm.tomorrows_date = $filter('date')(new Date(new Date().getTime() + 24 * 60 * 60 * 1000),'yyyy-MM-dd');
    vm.six_days_date = $filter('date')(new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000),'yyyy-MM-dd');

    var timetable = TimetableService.getTimetableLocalStorage(vm.course)

    if(timetable === null){
      // Load Timetable if update to date version not in localstorage
      TimetableService
      .getTimetableAPI(vm.course, vm.todays_date)
      .then( function( json ) {
        vm.days = [].concat(json.data.message.days);
        TimetableService.setTimetableLocalStorage(vm.course, json.data.message);
        vm.progress = "";
      });
    } else {
      vm.days = [].concat(timetable.days);
      vm.progress = "";
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

  function RemoveOldDaysClasses($filter) {
    return function(input) {
      var todays_date = $filter('date')(new Date(),'yyyy-MM-dd');
      var days_out = [];

      angular.forEach(input, function(day) {
        if (day.date >= todays_date) {
          days_out.push(day);
        }
      })

      var classes_out = [];
      angular.forEach(days_out, function(day) {
        var future_classes = RemoveOldClasses(day.events);
        if(future_classes != ""){
          day.events = future_classes;
          classes_out.push(day);
        }
      })

      return classes_out;
    }
  }

  function RemoveOldClasses(input) {
    var time_now = Date.now();
    var out = [];

    angular.forEach(input, function(event) {
      if (event.end_timestamp * 1000 > time_now) {
        out.push(event)
      }
    })
    return out;
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
