angular.module("app")
.directive('overallNavbarDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/directives/overallNavbarTmpl.html',
    controller: function($scope, mainService) {

      $(document).ready(function() {
      $('#submenus').click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
           // odd clicks
             $(".navbar-white-container").css({
               "border-right": "1px solid rgb(235, 235, 235)",
               "background-color": "white",
               "-webkit-transition": "background-color 600ms ease-in-out",
               "transition": "background-color 600ms ease-in-out"
             });
             $(".navbar-logo-white").css({
               "display": "none",
               "-webkit-transition": "display 600ms ease-in-out",
               "transition": "display 600ms ease-in-out"
             });
             $(".navbar-logo").css({
               "display": "block",
               "-webkit-transition": "display 600ms ease-in-out",
               "transition": "display 600ms ease-in-out"
             });
             $(".bag-icon").css({
               "display": "block",
               "-webkit-transition": "display 600ms ease-in-out",
               "transition": "display 600ms ease-in-out"
             });
             $(".bag-icon-white").css({
               "display": "none",
               "-webkit-transition": "display 600ms ease-in-out",
               "transition": "display 600ms ease-in-out"
             });
             $(".bar").css({
               "background-color": "rgb(25, 25, 25)",
               "-webkit-transition": "background-color 2s",
               "transition": "background-color 2s"
             });
             $(".bar").css({
               "-webkit-transform": "rotateZ(0deg)",
               "-ms-transform": "rotateZ(0deg)",
               "transform": "rotateZ(0deg)",
               "transition-duration": "4s"
             });
             $(".top").css({
               "margin-top": "0px",
               "-webkit-transition": ".5s",
               "-moz-transition": ".5s",
               "-o-transition": ".5s",
               "transition": ".5s"
             });
             $(".bottom").css({
               "margin-top": "20px",
               "-webkit-transition": ".5s",
               "-moz-transition": ".5s",
               "-o-transition": ".5s",
               "transition": ".5s"
             });
             $("#center").css({
               "margin-top": "10px",
               "visibility": "visible",
               "width": "25px",
               "height": "1px",
               "-webkit-transition": "200ms",
               "-moz-transition": "200ms",
               "-o-transition": "200ms",
               "transition": "200ms"
             });

        } else {
           // even clicks
           $(".navbar-white-container").css({
             "border-right": "1px solid rgb(51, 51, 51)",
             "background-color": "rgb(25, 25, 25)",
             "-webkit-transition": "background-color 600ms ease-in-out",
             "transition": "background-color 600ms ease-in-out"
           });
           $(".navbar-logo-white").css({
             "display": "block",
             "-webkit-transition": "display 600ms ease-in-out",
             "transition": "display 600ms ease-in-out"
           });
           $(".navbar-logo").css({
             "display": "none",
             "-webkit-transition": "display 600ms ease-in-out",
             "transition": "display 600ms ease-in-out"
           });
           $(".bag-icon").css({
             "display": "none",
             "-webkit-transition": "display 600ms ease-in-out",
             "transition": "display 600ms ease-in-out"
           });
           $(".bag-icon-white").css({
             "display": "block",
             "-webkit-transition": "display 600ms ease-in-out",
             "transition": "display 600ms ease-in-out"
           });
               $(".bar").css({
                 "background-color": "white",
                 "-webkit-transition": "background-color 2s",
                 "transition": "background-color 2s"
               });
               $(".top").css({
                 "-webkit-transform": "rotateZ(-45deg)",
                 "-ms-transform": "rotateZ(-45deg)",
                 "transform": "rotateZ(-45deg)",
                 "margin-top": "10px",
                 "-webkit-transition": ".5s",
                 "-moz-transition": ".5s",
                 "-o-transition": ".5s",
                 "transition": ".5s"
               });
               $(".bottom").css({
                 "margin-top": "10px",
                 "-webkit-transform": "rotateZ(45deg)",
                 "-ms-transform": "rotateZ(45deg)",
                 "transform": "rotateZ(45deg)",
                 "-webkit-transition": ".5s",
                 "-moz-transition": ".5s",
                 "-o-transition": ".5s",
                 "transition": ".5s"
               });
               $("#center").css({
                 "visibility": "hidden",
                 "width": "0px",
                 "height": "0px"
               });
        }
        $(this).data("clicks", !clicks);
      });
      });

      $(window).ready(function() {
        $('#submenus').on('click', function(){
          $(this).toggleClass('clicked');
        });
        $('#brand').on('click', function(){
          $(this).toggleClass('clicked-brand');
        });
        $('#customer_care').on('click', function(){
          $(this).toggleClass('clicked-customer');
        });
        $('#bag').on('click', function(){
          $(this).toggleClass('clicked');
        });
      });

    }
  }


});
