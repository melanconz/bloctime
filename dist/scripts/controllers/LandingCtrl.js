(function() {
  function LandingCtrl(Timer) {
    this.heroTitle = "Stay Focused!";
    this.timer = Timer;
  }

  angular
    .module('bloctime')
    .controller('LandingCtrl', ['Timer', LandingCtrl]);
})();
