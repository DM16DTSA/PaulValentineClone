angular.module("app")
.directive('secondaryNavbarDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/directives/secondaryNavbarTmpl.html',
    controller: function($scope) {
      $scope.menuSwitch = function() {
        if($('.collMenuTabs').hasClass('open')) {
          $('.collMenuTabs').removeClass('open')
        } else {
          $('.collMenuTabs').addClass('open')
        }
      }
    }
  };


});
