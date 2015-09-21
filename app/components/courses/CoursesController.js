(function(){

  angular
  .module('courses')
  .controller('CoursesController', [
    'CoursesService', '$router', '$filter', '$log', '$q', '$mdDialog',
    CoursesController
  ]);

  function CoursesController( CoursesService, $router, $filter, $log, $q, $mdDialog) {
    var vm = this;

    vm.list = [ ];
    vm.progress = "indeterminate";

    // Load Courses
    CoursesService
    .loadCoursesList()
    .then( function( json ) {
      vm.list = [].concat(json.data.message);
      vm.progress = "";
    });

    vm.showAbout = function(ev) {
      $mdDialog.show({
        controller: AboutController,
        templateUrl: 'components/timetable/view/about.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
    };
    vm.showAddCourse = function(ev) {
      $mdDialog.show({
        controller: AddCourseController,
        templateUrl: 'components/courses/view/addCourse.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
    };
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

  function AddCourseController($scope, $mdDialog) {
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
