(function() {
  function Timer($interval) {
    var Timer = {};

    Timer.timeLeft = 1500;

    Timer.buttonWords = "Start New Session";

    var started = false;

    var start;

    /**
    *
    * @function timeUpdate
    * @desc starts countdown on timer
    */
    var timeUpdate = function(){
      started = true;
      Timer.buttonWords = "Reset";
      Timer.timeLeft--;
    };

    var stop = function() {
      $interval.cancel(start);
      started = false;
      Timer.timeLeft = 1500;
      Timer.buttonWords = "Start New Session";
    }

    Timer.startSession = function () {
      if (!started) {
        start = $interval(timeUpdate, 1000);
      } else {
        stop();
      }
    };

    return Timer;
  };

  angular
    .module('bloctime')
    .factory('Timer', ['$interval', Timer]);
})();
