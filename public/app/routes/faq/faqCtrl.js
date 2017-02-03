angular.module("app")
    .controller('faqCtrl', function($scope, $stateParams, mainService, $rootScope) {
        $rootScope.header = "FAQ – Paul Valentine US";

        $scope.openfaq = function() {
          console.log("hello")
            if ($event.currentTarget.siblings().hasClass('openf')) {
                $event.currentTarget.removeClass('openf')
            } else {
                $event.currentTarget.siblings().addClass('openf')
            }
        }
  });
