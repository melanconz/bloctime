(function() {
  function TasksCtrl(Tasks, $scope) {
    var vm = this;
    vm.tasks = Tasks.all;
    //$scope.tasks = vm.tasks;

    $scope.addTask = function(newTask) {
      console.log(newTask);
      vm.tasks.$add(newTask);
    }
  }

  angular
    .module('bloctime')
    .controller('TasksCtrl', ['Tasks', '$scope', TasksCtrl]);
})();
