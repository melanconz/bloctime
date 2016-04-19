(function() {
  function Timer($rootScope) {
    var Timer = {};

    var timeStart = 1500;

    /**
    * @function timeUpdate
    * @desc updates timer
    */
    var timeUpdate = function(){
      timeStart--;
    }

    $interval(timeUpdate, 1000);
  };


  angular
    .module('blocJams')
    .factory('Timer', ['$rootScope', Timer])
})
