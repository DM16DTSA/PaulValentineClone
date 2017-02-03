angular.module("app")
    .controller('faqCtrl', function($scope, $stateParams, mainService, $rootScope) {
        $rootScope.header = "FAQ – Paul Valentine US";

        $scope.openfaq = function($event) {
          console.log("hello")
          var thisf = $event.currentTarget;
            if (thisf.siblings().hasClass('openf')) {
                thisf.siblings.removeClass('openf')
            } else {
                thisf.siblings().addClass('openf')
            }
        }
  });
