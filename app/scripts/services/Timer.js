(function() {
  function Timer($interval) {
    var Timer = {};

    var timeLeft = 1500;

    /**
    * @function timeUpdate
    * @desc updates timer
    */
    var timeUpdate = function(time){
      var timeLeft = 1500;
      timeLeft--;
    };

    $interval(timeUpdate, 1000);

    return Timer;
  };



  angular
    .module('bloctime')
    .factory('Timer', ['$interval', Timer]);
})();
