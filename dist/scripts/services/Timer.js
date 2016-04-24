(function() {
  function Timer($interval) {
    var Timer = {};

    Timer.timeLeft = 1500;

    Timer.buttonWords = "Start New Session";

    var started = false;

    var onBreak = false;

    var start;

    /**
    *
    * @function timeUpdate
    * @desc starts countdown on timer
    */
    var timeUpdate = function(){
      started = true;
      Timer.timeLeft--;
      if (Timer.timeLeft === 0 && !onBreak) {
        Timer.buttonWords = "Take a Break";
        resetBreak();
      } else if (Timer.timeLeft === 0 && onBreak){
        Timer.buttonWords = "Start New Session";
        resetSession();
      }
    };

    var resetSession = function() {
      $interval.cancel(start);
      started = false;
      onBreak = false;
      Timer.timeLeft = 1500;
      Timer.buttonWords = "Start New Session";
    };

    var resetBreak = function() {
      $interval.cancel(start);
      started = false;
      onBreak = true;
      Timer.timeLeft = 300;
      Timer.buttonBreakWords = "Take a Break";
    };

    Timer.startSession = function () {
      if (!started && !onBreak) {
        Timer.buttonWords = "Reset";
        Timer.timeLeft = 1500;
        start = $interval(timeUpdate, 1000);
      } else if (started && !onBreak) {
        resetSession();
      } else if (!started && onBreak) {
        Timer.buttonWords = "Reset";
        Timer.timeLeft = 300;
        start = $interval(timeUpdate, 1000);
        if (Timer.timeLeft === 0) {
          resetSession()
        }
      } else if (started && onBreak) {
        resetBreak();
      }
    };

    Timer.startBreak = function () {
      if (!started) {

      } else {

      }
    }

    return Timer;
  };

  angular
    .module('bloctime')
    .factory('Timer', ['$interval', Timer]);
})();
