angular.module("app")
.controller('strapsCtrl', function($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Straps – Paul Valentine US";
  mainService.getStraps()
  .then(function(response) {
    $scope.collStraps = response.data;
    // console.log(response.data)
  })


  $('.collNav').ready(function() {
  var navPosition = $('.collNav').offset().top;
  // console.log(navPosition)
    $(window).scroll(function () {
      if ($(window).scrollTop() >= navPosition) {
        $('.collNav').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < navPosition) {
        $('.collNav').removeClass('navbar-fixed');
      }
    });
  });
  $scope.menuSwitch = function() {
    if($('.collMenuTabs').hasClass('open')) {
      $('.collMenuTabs').removeClass('open')
    } else {
      $('.collMenuTabs').addClass('open')
    }
  }
});
