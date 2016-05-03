(function() {
  function Tasks($firebaseArray) {

    var firebaseRef = new Firebase("https://luminous-torch-9711.firebaseio.com/tasks");

    var tasks = $firebaseArray(firebaseRef);

    return {
      all: tasks
    };
  }

  angular
    .module('bloctime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();
