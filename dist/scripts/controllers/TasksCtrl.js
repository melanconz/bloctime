(function() {
  function TasksCtrl(Tasks, $scope) {
    var vm = this;
    vm.tasks = Tasks.all;
    $scope.addTask = function(newTask) {
      vm.tasks = vm.tasks.$add(newTask);
    }
  }

  angular
    .module('bloctime')
    .controller('TasksCtrl', ['Tasks', '$scope', TasksCtrl]);
})();
