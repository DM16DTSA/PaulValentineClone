angular.module("app")
.directive('overallNavbarDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/directives/overallNavbarTmpl.html',
    controller: function($scope, mainService) {

      $(window).ready(function() {
        $('#submenus').on('click', function(){
          $(this).toggleClass('clicked');
        });
      });

    }
  }


});
