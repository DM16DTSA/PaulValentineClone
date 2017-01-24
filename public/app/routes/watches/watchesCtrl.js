angular.module("app")
.controller('watchesCtrl', function($scope, mainService, $rootScope, $document, $state) {
  $rootScope.header = $state.current.name.charAt(0).toUpperCase() + $state.current.name.substr(1) + " – Paul Valentine US";
  mainService.getWatches()
  .then(function(response) {
    $scope.collWatches = response.data;
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
