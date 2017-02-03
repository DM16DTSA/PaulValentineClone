angular.module("app")
    .controller('faqCtrl', function($scope, $stateParams, mainService, $rootScope) {
        $rootScope.header = "FAQ – Paul Valentine US";

        $('.faq-question').on('click', function() {
            if ($(this).siblings().hasClass('openf')) {
                $(this).siblings().removeClass('openf')
            } else {
                $(this).siblings().addClass('openf')
            }
        })
    });
