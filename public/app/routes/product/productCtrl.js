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
      mainService.getMoreStraps(thP.straps)
      .then(function(response) {
        // response.data.forEach(function(strap, index, arr) {
        //   arr[index].image = "../.." + strap.image.slice(9);
        // })
        $scope.moreStraps = response.data;
      }).then(function() {
          $('.cmonwork').flickity({
            cellSelector: '.bGridItemItem',
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            setGallerySize: false,
            pageDots: false,
            // prevNextButtons: false
          })
      })
      mainService.getSimilar(thP.coll)
      .then(function(response) {
        $scope.similar = response.data
      })

      $scope.mHead = "How Babes wear their watch"
      $scope.rHead = "SIMILAR WATCHES YOU MAY LIKE";
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


      mainService.similarStraps()
      .then(function(response) {
        console.log(response.data)
        $scope.similar = response.data
      })
      $scope.mHead = "More Pics"
      $scope.rHead = "YOU MAY ALSO LIKE";
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


  $scope.submitReview = function(name, title, body) {
    var rating = $('input[name="rating"]:checked').val();
    var review = {
      'product': $scope.thP.name,
      'name': name,
      'title': title,
      'rating': parseInt(rating),
      'body': body,
      'date': new Date()
    }
    console.log(review)
    if (strapsArr.indexOf($stateParams.id.toString()) == -1) {
      mainService.addWatchReview(review)
      .then(function(response) {
        $scope.thP.reviews = response;
      })
    }
    else {
      mainService.addStrapReview(review)
      .then(function(response) {
        $scope.thP.reviews = response;
      })
    }
    $scope.formAppear = false;
  }

  var $productDetails = $('.productDetails');
  var $page = $(document);
  var $itemBg = $('.itemBg');
  var panelDist = $("#sctl").offset().top;
  var spcsDist = $("#spcs").offset().top - 150;


  $page.bind('scroll', function() {

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





//cart fn
//function updates cart for correct quantity
$scope.putCart = (obj,str)=>{

  if(str.match(/sub/gi)){
    obj.quantity--;
    if(obj.quantity === 0){
      $scope.deleteCartItem(obj);
    }
  }
  if(str.match(/add/gi)){
    obj.quantity++;
  }

  cartSrvc.putCart(obj).then((res)=>{
    for(let i=res.length-1; i >=0; i--){
      if(res[i].quantity === 0){
        res.splice(i,1);
      }
    };
    $scope.cart = res;
    totalCount($scope.cart);
  });
};


//function post new item to cart
$scope.postCart = (obj)=>{
  if(!obj.quantity || obj.quantity == 0){
    obj.quantity = 1;
    // obj.subPrice = (obj.quantity*obj.price);
  }
  console.log(obj.quantity);
  //find duplicates and just add to the quantity
  let postBool = false;
  for(let i = 0; i < $scope.cart.length; i++){
    if(obj._id === $scope.cart[i]._id){
      postBool = true;
    }
  };
  //if there is a duplicate then call put or just add to cart if no duplicate
  if(postBool){
    $scope.putCart(obj,'add');
  }else{
    cartSrvc.postCart(obj).then((res)=>{
      for(let i=res.length-1; i >=0; i--){
        if(res[i].quantity === 0){
          res.splice(i,1);
        }
      };
      $scope.cart = res;
      totalCount($scope.cart);
    });
  }
};

});
