angular.module("app")
.controller('homeCtrl', function($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Paul Valentine | badass watches for babes all over the world – Paul Valentine US";
  var scrollTo = $('.adPop').offset().top;


  var $page = $('.homeMain');

      $(document).ready(function() {
        setTimeout(function() {
          if($page.scrollTop() == 0) {
            console.log($page.scrollTop())
            // $page.animate({
            //   scrollTop: scrollTo
            // }, {duration: 2000})
            $("html,body").animate({ scrollTop: scrollTo }, 1100);
          }
        }, 4500)
      })

  mainService.getWatches()
  .then(function(response) {
    $scope.mainWatches = response.data;
  })
});
