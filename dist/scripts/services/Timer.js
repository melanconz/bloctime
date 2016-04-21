(function() {
  function Timer($interval) {
    var Timer = {};


    Timer.timeLeft = 1500;

    Timer.buttonWords = "Start New Session";

    /**
    *
    * @function timeUpdate
    * @desc updates timer
    */
    var timeUpdate = function(){
      console.log('pickle!');
      Timer.timeLeft--;
    };

    Timer.startSession = function () {
      console.log('This');
      $interval(timeUpdate, 1000);
    };

    return Timer;
  };

  angular
    .module('bloctime')
    .factory('Timer', ['$interval', Timer]);
})();
