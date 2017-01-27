angular.module("app")
.controller('productCtrl', function($scope, $stateParams, mainService, $rootScope) {
  $scope.sel = "des"
  var strapsArr = ["587e9f6110648c27aee6d521", "587ea2d8be9a8127b9337ede", "587ea2d8be9a8127b9337edf", "587ea2d8be9a8127b9337ee0", "587ea2d8be9a8127b9337ee1", "587ea2d8be9a8127b9337ee2", "587ea2d8be9a8127b9337ee3", "587ea2d8be9a8127b9337ee4"];

//check if product is from straps collection or watches
  if(strapsArr.indexOf($stateParams.id.toString()) == -1) {
    mainService.getWatches($stateParams.id)
    .then(function(response) {
      var thP = response[0];
      $rootScope.header = thP.name + " – Paul Valentine US";
      //fix file paths for gallery images and bg
      thP.gallery.forEach(function(pic, index, arr) {
        arr[index] = "../.." + pic.slice(9)
      })
      thP.background = "../.." + thP.background.slice(9);



      if(thP.inStock === true) {
        $scope.buttonText = "ADD TO BAG";
      }
      else {
        $scope.buttonText = "EMAIL ME WHEN AVAILABLE"
      }

      if(thP.gallery.length === 3) {
        $("<div class='gridItemThird'><a class='fancybox' rel='gallery1' href='" + thP.gallery[0] + "'><img src='" + thP.gallery[0] + "' alt=''></a><a class='fancybox' rel='gallery1' href='" + thP.gallery[1] + "'><img src='" + thP.gallery[1] + "' alt=''></a></div><div class='gridItem2Thirds'><a class='fancybox' rel='gallery1' href='" + thP.gallery[2] + "'><img src='" + thP.gallery[2] + "' alt=''></a></div>").appendTo(".gGrid2");
        $(".4thCell").remove();
      }
      else {
        $("<div class='gridItem'><a class='fancybox' rel='gallery1' href='" + thP.gallery[0] + "'><img src='" + thP.gallery[0] + "' alt='pic'></a></div><div class='gridItem'><a class='fancybox' rel='gallery1' href='" + thP.gallery[1] + "'><img src='" + thP.gallery[1] + "' alt='pic'></a></div><div class='gridItem'><a class='fancybox' rel='gallery1' href='" + thP.gallery[2] + "'><img src='" + thP.gallery[2] + "' alt='pic'></a></div><div class='gridItem'><a class='fancybox' rel='gallery1' href='" + thP.gallery[3] + "'><img src='" + thP.gallery[3] + "' alt='pic'></a></div>").appendTo(".gGrid2");
      }
      // thP.inStock = false;
      $scope.mHead = "How Babes wear their watch"
      $scope.thP = thP;
    }).then( function() {
       $('.gGrid').flickity({
        cellSelector: '.gridCell',
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        setGallerySize: false
      })
    })
  }
  else {
    mainService.getStraps($stateParams.id)
    .then(function(response) {
      var thP = response[0];
      $rootScope.header = thP.name + " – Paul Valentine US";

      thP.background = "../.." + thP.background.slice(9);
      thP.gallery.forEach(function(pic, index, arr) {
        arr[index] = "../.." + pic.slice(9)
      })
      $scope.thP = thP;

      if(thP.inStock === true) {
        $scope.buttonText = "ADD TO BAG";
      }
      else {
        $scope.buttonText = "EMAIL ME WHEN AVAILABLE"
      }
      $(".4thCell").remove();
      $(".3rdCell").remove();

      $("<div class='gridItemHalf'><a class='fancybox' rel='gallery1' href='" + thP.gallery[0] + "'><img src='" + thP.gallery[0] + "' alt='pic'></a></div><div class='gridItemHalf'><a class='fancybox' rel='gallery1' href='" + thP.gallery[1] + "'><img src='" + thP.gallery[1] + "' alt='pic'></a></div>").appendTo(".gGrid2");

      $scope.mHead = "More Pics"

    }).then( function() {
       $('.gGrid').flickity({
        cellSelector: '.gridCell',
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        setGallerySize: false
      })
    }).then(function() {
      $('.gGrid').addClass('hundred');
      $('.flickity-viewport').css('height', '100vw!important');
    })
  }


  $(".photoZoomed").on('mousemove', function(e){
    var containerHeight = $(this).innerHeight();
    var mousePositionY = (event.pageY / containerHeight) * 300;

    $(this).css({'background-position-y': mousePositionY + '%'
    });
 });




 $(document).ready(function() {

   $("a.fancybox").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600,
		'speedOut'		:	200,
		'overlayShow'	:	true,
    'frameWidth' : 497,
    'padding' : 0,
    'overlayColor' : '#666'
	});
});

var $productDetails = $('.productDetails');
var $page = $(document);
var $itemBg = $('.itemBg');
var panelDist = $("#sctl").offset().top;
var spcsDist = $("#spcs").offset().top - 150;
// var perc = $('.home').height() * .01;

$page.bind('scroll', function() {
  // console.log($page.scrollTop())
  if ($page.scrollTop() >= panelDist) {
      $productDetails.addClass("pScrolled");
  }
  else {
    $productDetails.removeClass("pScrolled")
  }
  if($page.scrollTop() >= spcsDist) {
    $itemBg.addClass("stuck");
  }
  else {
    $itemBg.removeClass("stuck")
  }
});


});
