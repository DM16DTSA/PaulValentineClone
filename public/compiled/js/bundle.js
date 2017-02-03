"use strict";

var app = angular.module("app", ['ui.router']);

angular.module("app").config(function ($stateProvider, $urlRouterProvider) {

  // INITIALIZE STATES
  // ============================================================
  $stateProvider

  // .state('carttest',{
  //   url: '/carttest',
  //   templateUrl: './app/routes/cartTest.html',
  //   controller: 'cartCtrl'
  // })


  // HOME STATE
  .state('home', {
    url: '/',
    templateUrl: './app/routes/home/homeTmpl.html',
    controller: 'homeCtrl'
  })

  // ABOUT STATE
  .state('about', {
    url: '/about',
    templateUrl: './app/routes/about/aboutTmpl.html',
    controller: 'aboutCtrl'
  })

  // ACCOUNT STATE
  .state('account', {
    url: '/account',
    templateUrl: './app/routes/account/accountTmpl.html',
    controller: 'accountCtrl'
  })

  //CART STATE
  .state('cart', {
    url: '/cart',
    templateUrl: './app/routes/cart/cartTmpl.html',
    controller: 'cartCtrl'
  })

  // CHECKOUT STATE
  .state('checkout', {
    url: '/checkout',
    templateUrl: './app/routes/checkout/checkoutTmpl.html',
    controller: 'checkoutCtrl'
  })

  // CONTACT STATE
  .state('contact', {
    url: '/contact',
    templateUrl: './app/routes/contact/contactTmpl.html',
    controller: 'contactCtrl'
  })

  // FAQ STATE
  .state('faq', {
    url: '/faq',
    templateUrl: './app/routes/faq/faqTmpl.html',
    controller: 'faqCtrl'
  })

  //JOURNAL STATE
  .state('journal', {
    url: '/journal',
    templateUrl: './app/routes/journal/journalTmpl.html',
    controller: 'journalCtrl'
  })

  // LEGAL NOTICE STATE
  .state('legal', {
    url: '/legal',
    templateUrl: './app/routes/legal/legalTmpl.html',
    controller: 'legalCtrl'
  })

  // LOOKBOOK STATE
  .state('lookbook', {
    url: '/lookbook',
    templateUrl: './app/routes/lookbook/lookbookTmpl.html',
    controller: 'lookbookCtrl'
  })

  // PRIVACY STATE
  .state('privacy', {
    url: '/privacy',
    templateUrl: './app/routes/privacy/privacyTmpl.html',
    controller: 'privacyCtrl'
  })

  // RETURNS STATE
  .state('returns', {
    url: '/returns',
    templateUrl: './app/routes/returns/returnsTmpl.html',
    controller: 'returnsCtrl'
  })

  // SHIPPING STATE
  .state('shipping', {
    url: '/shipping',
    templateUrl: './app/routes/shipping/shippingTmpl.html',
    controller: 'shippingCtrl'
  })

  // SHOP INSTAGRAM STATE
  .state('shop_instagram', {
    url: '/shop_instagram',
    templateUrl: './app/routes/shopInstagram/shopInstagramTmpl.html',
    controller: 'shopInstagramCtrl'
  })

  // STORE FINDER STATE
  .state('store_finder', {
    url: '/store_finder',
    templateUrl: './app/routes/storeFinder/storeFinderTmpl.html',
    controller: 'storeFinderCtrl'
  })

  // TERMS & CONDITIONS STATE
  .state('terms', {
    url: '/terms',
    templateUrl: './app/routes/terms/termsTmpl.html',
    controller: 'termsCtrl'
  })

  // COLLECTIONS
  // ALL-WATCHES STATE
  .state('watches', {
    url: '/collections/all-watches',
    templateUrl: './app/routes/watches/watchesTmpl.html',
    controller: 'watchesCtrl'
  })

  // MARINA COLLECTION STATE
  .state('marina', {
    url: '/collections/marina',
    templateUrl: './app/routes/watches/marinaTmpl.html',
    controller: 'watchesCtrl'
  })

  // PEARL COLLECTION STATE
  .state('pearl', {
    url: '/collections/pearl',
    templateUrl: './app/routes/watches/pearlTmpl.html',
    controller: 'watchesCtrl'
  })

  // FELIZ COLLECTION STATE
  .state('feliz', {
    url: '/collections/feliz',
    templateUrl: './app/routes/watches/felizTmpl.html',
    controller: 'watchesCtrl'
  })

  // STRAPS COLLECTION STATE
  .state('straps', {
    url: '/collections/straps',
    templateUrl: './app/routes/straps/strapsTmpl.html',
    controller: 'strapsCtrl'
  })
  // WATCH PRODUCT STATE
  .state('product', {
    url: '/product/:id',
    templateUrl: './app/routes/product/productTmpl.html',
    controller: 'productCtrl'
  });
  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module("app").directive('inboxLoveDir', function () {

  return {
    restrict: 'AE',
    templateUrl: './app/directives/inboxLoveTmpl.html'
  };
});
'use strict';

angular.module("app").directive('overallNavbarDir', function () {

  return {
    restrict: 'AE',
    templateUrl: './app/directives/overallNavbarTmpl.html',
    controller: function controller($scope, mainService, cartSrvc, $state, $rootScope) {
      var $navbar = $('.overall-navbar-container-fixed');
      var $page = $(document);
      if ($state.current.name === 'home') {
        $page.bind('scroll', function () {
          if ($page.scrollTop() === 0) {
            $navbar.removeClass("shownav");
          } else {
            $navbar.addClass("shownav");
          }
        });
      } else {
        $navbar.addClass("shownav");
      }
      $(document).ready(function () {
        $('#navbar-ham').click(function () {
          var clicks = $(this).data('clicks');
          if (clicks) {
            // odd clicks
            $(".navbar-white-container").css({
              "border-right": "1px solid rgb(235, 235, 235)",
              "background-color": "white",
              "-webkit-transition": "background-color 600ms ease-in-out",
              "-moz-transition": "background-color 600ms ease-in-out",
              "-o-transition": "background-color 600ms ease-in-out",
              "transition": "background-color 600ms ease-in-out"
            });
            $(".navbar-logo-white").css({
              "display": "none",
              "-webkit-transition": "display 600ms ease-in-out",
              "-moz-transition": "display 600ms ease-in-out",
              "-o-transition": "display 600ms ease-in-out",
              "transition": "display 600ms ease-in-out"
            });
            $(".navbar-logo").css({
              "display": "block",
              "-webkit-transition": "display 600ms ease-in-out",
              "-moz-transition": "display 600ms ease-in-out",
              "-o-transition": "display 600ms ease-in-out",
              "transition": "display 600ms ease-in-out"
            });
            $(".bag-icon").css({
              "display": "block",
              "-webkit-transition": "display 600ms ease-in-out",
              "-moz-transition": "display 600ms ease-in-out",
              "-o-transition": "display 600ms ease-in-out",
              "transition": "display 600ms ease-in-out"
            });
            $(".bag-icon-white").css({
              "display": "none",
              "-webkit-transition": "display 600ms ease-in-out",
              "-moz-transition": "display 600ms ease-in-out",
              "-o-transition": "display 600ms ease-in-out",
              "transition": "display 600ms ease-in-out"
            });
            $(".bag-icon-qty span").css({
              "color": "rgb(17, 17, 17)"
            });
            $(".bar").css({
              "background-color": "rgb(25, 25, 25)",
              "-webkit-transition": "background-color 2s",
              "-moz-transition": "background-color 2s",
              "-o-transition": "background-color 2s",
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
            $(".submenus").css({
              "-webkit-transform": "translateX(-363px)",
              "transform": "translateX(-363px)"
            });
            $(".grid-item").css({
              "pointer-events": "auto"
            });
            $(".gray-filter-layer2").css({
              "display": "none"
            });
            $(".submenu-brand").css({
              "-webkit-transform": "translateX(-363px)",
              "transform": "translateX(-363px)"
            });
            $(".submenu-customer").css({
              "-webkit-transform": "translateX(-363px)",
              "transform": "translateX(-363px)"
            });
          } else {
            // even clicks
            $(".navbar-white-container").css({
              "border-right": "1px solid rgb(51, 51, 51)",
              "background-color": "rgb(25, 25, 25)",
              "-webkit-transition": "background-color 600ms ease-in-out",
              "-moz-transition": "background-color 600ms ease-in-out",
              "-o-transition": "background-color 600ms ease-in-out",
              "transition": "background-color 600ms ease-in-out"
            });
            $(".navbar-logo-white").css({
              "display": "block",
              "-webkit-transition": "display 600ms ease-in-out",
              "-moz-transition": "display 600ms ease-in-out",
              "-o-transition": "display 600ms ease-in-out",
              "transition": "display 600ms ease-in-out"
            });
            $(".navbar-logo").css({
              "display": "none",
              "-webkit-transition": "display 600ms ease-in-out",
              "-moz-transition": "display 600ms ease-in-out",
              "-o-transition": "display 600ms ease-in-out",
              "transition": "display 600ms ease-in-out"
            });
            $(".bag-icon").css({
              "display": "none",
              "-webkit-transition": "display 600ms ease-in-out",
              "-moz-transition": "display 600ms ease-in-out",
              "-o-transition": "display 600ms ease-in-out",
              "transition": "display 600ms ease-in-out"
            });
            $(".bag-icon-white").css({
              "display": "block",
              "-webkit-transition": "display 600ms ease-in-out",
              "-moz-transition": "display 600ms ease-in-out",
              "-o-transition": "display 600ms ease-in-out",
              "transition": "display 600ms ease-in-out"
            });
            $(".bag-icon-qty span").css({
              "color": "white"
            });
            $(".bar").css({
              "background-color": "white",
              "-webkit-transition": "background-color 2s",
              "-moz-transition": "background-color 2s",
              "-o-transition": "background-color 2s",
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
            $(".submenus").css({
              "-webkit-transform": "translateX(363px)",
              "transform": "translateX(363px)"
            });
            $(".grid-item").css({
              "pointer-events": "none"
            });
            $(".gray-filter-layer2").css({
              "display": "block"
            });
          }
          $(this).data("clicks", !clicks);
        });

        $('#submenu-brand').click(function () {
          var clicks = $(this).data('clicks');
          if (clicks) {
            // odd clicks
            $(".submenu-brand").css({
              "-webkit-transform": "translateX(-363px)",
              "transform": "translateX(-363px)"
            });
          } else {
            // even clicks
            $(".submenu-brand").css({
              "-webkit-transform": "translateX(363px)",
              "transform": "translateX(363px)"
            });
            $(".submenu-customer").css({
              "-webkit-transform": "translateX(-363px)",
              "transform": "translateX(-363px)"
            });
          }
          $(this).data("clicks", !clicks);
        });

        $('#submenu-customer').click(function () {
          var clicks = $(this).data('clicks');
          if (clicks) {
            // odd clicks
            $(".submenu-customer").css({
              "-webkit-transform": "translateX(-363px)",
              "transform": "translateX(-363px)"
            });
          } else {
            // even clicks
            $(".submenu-customer").css({
              "-webkit-transform": "translateX(363px)",
              "transform": "translateX(363px)"
            });
            $(".submenu-brand").css({
              "-webkit-transform": "translateX(-363px)",
              "transform": "translateX(-363px)"
            });
          }
          $(this).data("clicks", !clicks);
        });

        $('#bag-click').click(function () {
          var clicks = $(this).data('clicks');
          if (clicks) {
            // odd clicks
            $(".cart-dir-container").css({
              "-webkit-transform": "translateX(340px)",
              "transform": "translateX(340px)"
            });
            $(".gray-filter-layer").css({
              "display": "none"
            });
          } else {
            // even clicks
            $(".cart-dir-container").css({
              "-webkit-transform": "translateX(0px)",
              "transform": "translateX(0px)"
            });
            $(".gray-filter-layer").css({
              "display": "block"
            });
          }
          $(this).data("clicks", !clicks);
        });
      });

      // function gets cart from session. If no cart then sets cart to null;
      $scope.bagQty = 0;
      var getCart = function getCart() {
        cartSrvc.getCart().then(function (res) {
          $scope.cart = res.cart;
          $scope.total = res.subTotal;

          $scope.bagQty = $scope.cart.reduce(function (prev, curr) {
            return prev + curr.quantity;
          }, 0);
          // if(!$scope.cart || !$scope.cart[0] ){
          // }
        });
      };

      //delete one item off of cart
      $scope.deleteCartItem = function (obj) {
        cartSrvc.deleteCartItem(obj).then(function (res) {
          //call getCart to render cart on DOM
          getCart();
        });
      };

      $scope.$on('getCartDir', function (event, args) {
        getCart();
      });

      // render cart on DOM when hitting page
      getCart();
    }
  };
});
'use strict';

angular.module("app").directive('revealedFooterDir', function () {

  return {
    restrict: 'AE',
    templateUrl: './app/directives/revealedFooterTmpl.html'
  };
});
'use strict';

angular.module("app").directive('secondaryNavbarDir', function () {

  return {
    restrict: 'AE',
    templateUrl: './app/directives/secondaryNavbarTmpl.html',
    controller: function controller($scope) {
      $scope.menuSwitch = function () {
        if ($('.collMenuTabs').hasClass('open')) {
          $('.collMenuTabs').removeClass('open');
        } else {
          $('.collMenuTabs').addClass('open');
        }
      };
    }
  };
});
'use strict';

angular.module('app').service('cartSrvc', function ($http) {
  //get all cart from session cart
  this.getCart = function () {
    return $http({
      method: 'GET',
      url: '/api/cart'
    }).then(function (res) {
      console.log('Cart service get cart', res.data);
      return res.data;
    });
  };
  //post new item to cart
  this.postCart = function (obj) {
    console.log(obj);
    if (!obj.quantity) {
      obj.quantity = 1;
    }
    console.log('Cart service Post cart', obj);
    return $http({
      method: 'POST',
      url: '/api/cart',
      data: obj
    }).then(function (res) {
      console.log('Cart service Post cart', res.data);
      return res.data;
    });
  };
  //put for cart, change quantity on cart. uses obj_id and obj.quantity
  this.putCart = function (obj, str) {
    return $http({
      method: 'PUT',
      url: '/api/cart/' + obj._id + '/' + str
    }).then(function (res) {
      console.log('Cart service Put cart', res.data);
      return res.data;
    });
  };
  //delete item from cart. uses obj_id
  this.deleteCartItem = function (obj) {
    return $http({
      method: 'DELETE',
      url: '/api/cart/' + obj._id
    }).then(function (res) {
      console.log('Cart service delete cart', res.data);
      return res.data;
    });
  };
  this.destroyCart = function () {
    return $http({
      method: 'DELETE',
      url: '/api/destroy'
    }).then(function (res) {
      console.log('Cart service destroyCart', res.data);
      return res.data;
    });
  };
}); //closing
'use strict';

angular.module('app').service('contactSrvc', function ($http) {
  this.send = function (obj) {
    return $http({
      method: 'POST',
      url: '/sendmail',
      data: obj
    }).then(function (res) {
      console.log(res);
    });
  };
}); //closing
"use strict";

angular.module("app").service("mainService", function ($http) {
	this.getWatches = function (x) {
		return $http.get('/watches').then(function (response) {
			if (x) {
				return response.data.filter(function (el) {
					if (el._id == x) {
						return el;
					}
				});
			} else {
				return response;
			}
		});
	};
	this.getStraps = function (y) {
		return $http.get('/straps').then(function (response) {
			if (y) {
				return response.data.filter(function (el) {
					if (el._id == y) {
						return el;
					}
				});
			} else {
				return response;
			}
		});
	};
	this.addWatchReview = function (review) {
		return $http.put('/watches', review).then(function (response) {
			return response;
		});
	};
	this.addStrapReview = function (review) {
		return $http.put('/straps', review).then(function (response) {
			return response;
		});
	};
	this.getMoreStraps = function (arr) {
		return $http.post('/morestraps', arr).then(function (response) {
			return response;
		});
	};
	this.getSimilar = function (coll) {
		return $http.get('/similarW/' + coll).then(function (response) {
			return response;
		});
	};
	this.similarStraps = function () {
		return $http.get('/similarS').then(function (response) {
			return response;
		});
	};
});
"use strict";

angular.module("app").controller('accountCtrl', function ($scope, $stateParams, mainService, $rootScope) {});
"use strict";

angular.module("app").controller('aboutCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "About – Paul Valentine US";
});
'use strict';

angular.module('app').controller('cartCtrl', function ($scope, $stateParams, $rootScope, cartSrvc, mainService) {

  // function gets cart from session. If no cart then sets cart to null;
  var getCart = function getCart() {
    cartSrvc.getCart().then(function (res) {
      $scope.cart = res.cart;
      $scope.total = res.subTotal;
      $rootScope.$broadcast("getCartDir");
    });
  };

  //function post new item to cart
  $scope.postCart = function (obj) {
    //obj needs to be the watch obj from page
    cartSrvc.postCart(obj);
    //call getCart to render cart on DOM
    getCart();
  };

  //function updates cart for correct quantity
  $scope.putCart = function (obj, str) {
    console.log(str);
    //string argument needs to be either 'add' or 'sub'
    cartSrvc.putCart(obj, str).then(function (res) {
      //call getCart to render cart on DOM
      getCart();
    });
  };

  //delete one item off of cart
  $scope.deleteCartItem = function (obj) {
    cartSrvc.deleteCartItem(obj).then(function (res) {
      //call getCart to render cart on DOM
      getCart();
    });
  };
  //delete all items in cart
  $scope.deleteAllCart = function () {
    cartSrvc.destroyCart().then(function (res) {
      //call getCart to render cart on DOM
      getCart();
    });
  };
  // render cart on DOM when hitting page
  getCart();
}); //closing
"use strict";

angular.module("app").controller('journalCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Journal – Paul Valentine US";
  $scope.test = 'HELLOWORLD';
});
"use strict";

angular.module("app").controller('faqCtrl', function ($scope, $stateParams, mainService, $rootScope) {
    $rootScope.header = "FAQ – Paul Valentine US";

    $('.faq-question').on('click', function () {
        if ($(this).siblings().hasClass('open')) {
            $(this).siblings().removeClass('open');
        } else {
            $(this).siblings().addClass('open');
        }
    });
});
"use strict";

angular.module("app").controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Paul Valentine | badass watches for babes all over the world – Paul Valentine US";
  var scrollTo = $('.adPop').offset().top;

  var $page = $('.homeMain');

  $(document).ready(function () {
    setTimeout(function () {
      if ($page.scrollTop() == 0) {
        // $page.animate({
        //   scrollTop: scrollTo
        // }, {duration: 2000})
        $("html,body").animate({ scrollTop: scrollTo }, 1100);
      }
    }, 4500);
  });

  mainService.getWatches().then(function (response) {
    $scope.mainWatches = response.data;
  });
});
'use strict';

angular.module("app").controller('contactCtrl', function ($scope, $stateParams, contactSrvc, $rootScope) {
  // $rootScope.header = "Contact – Paul Valentine US";
  $scope.send = function (name, email, number, message) {
    console.log('contactCtrl fired', name, email, number, message);
    if (!name || !email || !number || !message) {
      return swal('please fill out all fields');
    }
    if (!email.match(/@/gi)) {
      return swal('please enter a valid email');
    }
    var obj = {
      name: name,
      email: email,
      phone: number,
      message: message
    };
    contactSrvc.send(obj);
    $scope.name = '';
    $scope.email = '';
    $scope.number = '';
    $scope.message = '';
  };
  // return alert('Info sent');
});
"use strict";

angular.module("app").controller('legalCtrl', function ($scope, $stateParams, mainService, $rootScope) {});
"use strict";

angular.module("app").controller('lookbookCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Lookbook – Paul Valentine US";
});
"use strict";

angular.module("app").controller('privacyCtrl', function ($scope, $stateParams, mainService, $rootScope) {});
"use strict";

angular.module("app").controller('returnsCtrl', function ($scope, $stateParams, mainService, contactSrvc, $rootScope) {
  $rootScope.header = "Returns – Paul Valentine US";

  $scope.send = function (name, email, number, order, message) {
    console.log('returnCtrl fired', name, email, number, order, message);
    if (!name || !email || !number || !order || !message) {
      return swal('please fill out all fields');
    }
    if (!email.match(/@/gi)) {
      return swal('please enter a valid email');
    }

    var obj = {
      name: name,
      email: email,
      phone: number,
      order: order,
      message: message
    };

    contactSrvc.send(obj);

    $scope.name = '';
    $scope.email = '';
    $scope.number = '';
    $scope.order = '';
    $scope.message = '';
  };
});
"use strict";

angular.module("app").controller('shippingCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Shipping – Paul Valentine US";
});
"use strict";

angular.module("app").controller('shopInstagramCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Shop Instagram – Paul Valentine US";
});
"use strict";

angular.module("app").controller('storeFinderCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Store Finder – Paul Valentine US";

  $scope.initMap = function () {

    var uluru = {
      lat: 48.244668,
      lng: 14.236425
    };

    var uluruTwo = {
      lat: 48.308553,
      lng: 14.021768
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: uluru,
      styles: [{ elementType: 'geometry', stylers: [{ color: '#555555' }] }, { elementType: 'labels.text', stylers: [{ visibility: "off", font: 'AvenirLTStd-Roman' }] }, { elementType: 'labels.text.fill', stylers: [{ color: '#746855', font: 'AvenirLTStd-Roman' }] }, {
        featureType: 'administrative.locality',
        elementType: 'labels',
        stylers: [{ visibility: "off" }]
      }, {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: "off" }]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ opacity: "0.2" }]
      }, {
        featureType: 'poi.park',
        elementType: 'labels',
        stylers: [{ opacity: "0.2" }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      }, {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      }, {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{ visibility: "off" }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#333' }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#333' }]
      }, {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#fff' }]
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      }, {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#fff' }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#303030' }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#fff' }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#fff' }]
      }]
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: '../../styles/images/icons/mappin.png'
    });

    var markerTwo = new google.maps.Marker({
      position: uluruTwo,
      map: map,
      icon: '../../styles/images/icons/mappin.png'
    });
  };

  $scope.initMap();
});
"use strict";

angular.module("app").controller('productCtrl', function ($scope, $stateParams, mainService, cartSrvc, $rootScope) {
  $scope.sel = "des";
  var strapsArr = ["587e9f6110648c27aee6d521", "587ea2d8be9a8127b9337ede", "587ea2d8be9a8127b9337edf", "587ea2d8be9a8127b9337ee0", "587ea2d8be9a8127b9337ee1", "587ea2d8be9a8127b9337ee2", "587ea2d8be9a8127b9337ee3", "587ea2d8be9a8127b9337ee4"];

  //check if product is from straps collection or watches
  if (strapsArr.indexOf($stateParams.id.toString()) == -1) {
    mainService.getWatches($stateParams.id).then(function (response) {
      var thP = response[0];
      $rootScope.header = thP.name + " – Paul Valentine US";
      //fix file paths for gallery images and bg
      thP.gallery.forEach(function (pic, index, arr) {
        arr[index] = "../.." + pic.slice(9);
      });
      thP.background = "../.." + thP.background.slice(9);

      if (thP.inStock === true) {
        $scope.buttonText = "ADD TO BAG";
      } else {
        $scope.buttonText = "EMAIL ME WHEN AVAILABLE";
      }

      if (thP.gallery.length === 3) {
        $("<div class='gridItemThird'><a class='fancybox' rel='gallery1' href='" + thP.gallery[0] + "'><img src='" + thP.gallery[0] + "' alt=''></a><a class='fancybox' rel='gallery1' href='" + thP.gallery[1] + "'><img src='" + thP.gallery[1] + "' alt=''></a></div><div class='gridItem2Thirds'><a class='fancybox' rel='gallery1' href='" + thP.gallery[2] + "'><img src='" + thP.gallery[2] + "' alt=''></a></div>").appendTo(".gGrid2");
        $(".4thCell").remove();
      } else {
        $("<div class='gridItem'><a class='fancybox' rel='gallery1' href='" + thP.gallery[0] + "'><img src='" + thP.gallery[0] + "' alt='pic'></a></div><div class='gridItem'><a class='fancybox' rel='gallery1' href='" + thP.gallery[1] + "'><img src='" + thP.gallery[1] + "' alt='pic'></a></div><div class='gridItem'><a class='fancybox' rel='gallery1' href='" + thP.gallery[2] + "'><img src='" + thP.gallery[2] + "' alt='pic'></a></div><div class='gridItem'><a class='fancybox' rel='gallery1' href='" + thP.gallery[3] + "'><img src='" + thP.gallery[3] + "' alt='pic'></a></div>").appendTo(".gGrid2");
      }
      mainService.getMoreStraps(thP.straps).then(function (response) {
        // response.data.forEach(function(strap, index, arr) {
        //   arr[index].image = "../.." + strap.image.slice(9);
        // })
        $scope.moreStraps = response.data;
      }).then(function () {
        $('.cmonwork').flickity({
          cellSelector: '.bGridItemItem',
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          setGallerySize: false,
          pageDots: false
        });
      });
      mainService.getSimilar(thP.coll).then(function (response) {
        $scope.similar = response.data;
      });

      $scope.mHead = "How Babes wear their watch";
      $scope.rHead = "SIMILAR WATCHES YOU MAY LIKE";
      $scope.thP = thP;
    }).then(function () {
      $('.gGrid').flickity({
        cellSelector: '.gridCell',
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        setGallerySize: false
      });
      setTimeout(function () {
        $scope.$straps = $(".productStraps").offset().top - 80;
        $scope.$details = $(".dets").offset().top + 80;
        $scope.$inspiration = $(".productStats").offset().top - 80;
        $scope.scrollToThis = function (where) {
          $("html,body").animate({ scrollTop: where + 1 }, 1000);
        };
        $page.bind('scroll', function () {
          if ($page.scrollTop() >= panelDist) {
            $productDetails.addClass("pScrolled");
          } else {
            $productDetails.removeClass("pScrolled");
          }
          if ($page.scrollTop() >= spcsDist) {
            $itemBg.addClass("stuck");
          } else {
            $itemBg.removeClass("stuck");
          }
          if ($page.scrollTop() < $scope.$details) {
            $scope.scrollP = 'ov';
          }
          if ($page.scrollTop() >= $scope.$details && $page.scrollTop() < $scope.$inspiration) {
            $scope.scrollP = 'det';
          }
          if ($page.scrollTop() >= $scope.$inspiration && $page.scrollTop() < $scope.$straps) {
            $scope.scrollP = 'insp';
          } else if ($page.scrollTop() >= $scope.$straps) {
            $scope.scrollP = 'str';
          }
          $scope.$apply();
        });
      }, 500);
    });
  } else {
    mainService.getStraps($stateParams.id).then(function (response) {
      var thP = response[0];
      $rootScope.header = thP.name + " – Paul Valentine US";

      thP.background = "../.." + thP.background.slice(9);
      thP.gallery.forEach(function (pic, index, arr) {
        arr[index] = "../.." + pic.slice(9);
      });
      $scope.thP = thP;

      if (thP.inStock === true) {
        $scope.buttonText = "ADD TO BAG";
      } else {
        $scope.buttonText = "EMAIL ME WHEN AVAILABLE";
      }
      $(".4thCell").remove();
      $(".3rdCell").remove();

      $("<div class='gridItemHalf'><a class='fancybox' rel='gallery1' href='" + thP.gallery[0] + "'><img src='" + thP.gallery[0] + "' alt='pic'></a></div><div class='gridItemHalf'><a class='fancybox' rel='gallery1' href='" + thP.gallery[1] + "'><img src='" + thP.gallery[1] + "' alt='pic'></a></div>").appendTo(".gGrid2");

      mainService.similarStraps().then(function (response) {
        $scope.similar = response.data;
      });
      $scope.mHead = "More Pics";
      $scope.rHead = "YOU MAY ALSO LIKE";
    }).then(function () {
      $('.gGrid').flickity({
        cellSelector: '.gridCell',
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        setGallerySize: false
      });
    }).then(function () {
      $('.gGrid').addClass('hundred');
      $('.flickity-viewport').css('height', '100vw!important');

      $scope.$details = $(".dets").offset().top + 80;
      $scope.$inspiration = $(".productStats").offset().top - 80;

      $scope.scrollToThis = function (where) {
        $("html,body").animate({ scrollTop: where + 1 }, 1000);
        // $("html,body").animate({ scrollTop: scrollTo }, 1000);
      };
      $page.bind('scroll', function () {

        if ($page.scrollTop() >= panelDist) {
          $productDetails.addClass("pScrolled");
        } else {
          $productDetails.removeClass("pScrolled");
        }
        if ($page.scrollTop() >= spcsDist) {
          $itemBg.addClass("stuck");
        } else {
          $itemBg.removeClass("stuck");
        }
        if ($page.scrollTop() < $scope.$details) {
          $scope.scrollP = 'ov';
        }
        if ($page.scrollTop() >= $scope.$details - 1 && $page.scrollTop() < $scope.$inspiration) {
          $scope.scrollP = 'det';
        }
        if ($page.scrollTop() >= $scope.$inspiration) {
          $scope.scrollP = 'insp';
        }
        $scope.$apply();
      });
    });
  }

  $(".photoZoomed").on('mousemove', function (e) {
    var containerHeight = $(this).innerHeight();
    var mousePositionY = event.pageY / containerHeight * 300;

    $(this).css({ 'background-position-y': mousePositionY + '%'
    });
  });

  $(document).ready(function () {

    $("a.fancybox").fancybox({
      'transitionIn': 'elastic',
      'transitionOut': 'elastic',
      'speedIn': 600,
      'speedOut': 200,
      'overlayShow': true,
      'frameWidth': 497,
      'padding': 0,
      'overlayColor': '#666'
    });
  });

  $scope.submitReview = function (name, title, body) {
    var rating = $('input[name="rating"]:checked').val();
    var review = {
      'product': $scope.thP.name,
      'name': name,
      'title': title,
      'rating': parseInt(rating),
      'body': body,
      'date': new Date()
    };
    console.log(review);
    if (strapsArr.indexOf($stateParams.id.toString()) == -1) {
      mainService.addWatchReview(review).then(function (response) {
        $scope.thP.reviews.push(response.config.data);
        console.log(response.config.data);
      });
    } else {
      mainService.addStrapReview(review).then(function (response) {
        $scope.thP.reviews.push(response.config.data);
      });
    }

    $scope.formAppear = false;
  };

  var $productDetails = $('.productDetails');
  var $page = $(document);
  var $itemBg = $('.itemBg');
  var panelDist = $("#sctl").offset().top;
  var spcsDist = $("#spcs").offset().top - 150;

  $scope.scrollP = 'ov';

  //function post new item to cart
  $scope.postCart = function (obj) {
    console.log(obj);
    //obj needs to be the watch obj from page
    cartSrvc.postCart(obj);
    $rootScope.$broadcast("getCartDir");
  };
});
"use strict";

angular.module("app").controller('checkoutCtrl', function ($scope, $stateParams, mainService, cartSrvc, $rootScope) {

  // function gets cart from session. If no cart then sets cart to null;
  var getCart = function getCart() {
    cartSrvc.getCart().then(function (res) {
      $scope.cart = res.cart;
      $scope.total = res.subTotal;
    });
  };

  //function post new item to cart
  $scope.postCart = function (obj) {
    //obj needs to be the watch obj from page
    cartSrvc.postCart(obj);
    //call getCart to render cart on DOM
    getCart();
  };

  //function updates cart for correct quantity
  $scope.putCart = function (obj, str) {
    console.log(str);
    //string argument needs to be either 'add' or 'sub'
    cartSrvc.putCart(obj, str).then(function (res) {
      //call getCart to render cart on DOM
      getCart();
    });
  };

  //delete one item off of cart
  $scope.deleteCartItem = function (obj) {
    cartSrvc.deleteCartItem(obj).then(function (res) {
      //call getCart to render cart on DOM
      getCart();
    });
  };
  //delete all items in cart
  $scope.deleteAllCart = function () {
    cartSrvc.destroyCart().then(function (res) {
      //call getCart to render cart on DOM
      getCart();
    });
  };
  // render cart on DOM when hitting page
  getCart();
});
"use strict";

angular.module("app").controller('termsCtrl', function ($scope, $stateParams, mainService, $rootScope) {});
"use strict";

angular.module("app").controller('strapsCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Straps – Paul Valentine US";
  mainService.getStraps().then(function (response) {
    $scope.collStraps = response.data;
    // console.log(response.data)
  });

  $('.collNav').ready(function () {
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
  $scope.menuSwitch = function () {
    if ($('.collMenuTabs').hasClass('open')) {
      $('.collMenuTabs').removeClass('open');
    } else {
      $('.collMenuTabs').addClass('open');
    }
  };
});
"use strict";

angular.module("app").controller('watchesCtrl', function ($scope, mainService, $rootScope, $document, $state) {
  $rootScope.header = $state.current.name.charAt(0).toUpperCase() + $state.current.name.substr(1) + " – Paul Valentine US";
  mainService.getWatches().then(function (response) {
    $scope.collWatches = response.data;
    // console.log(response.data)
  });

  $('.collNav').ready(function () {
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

  $scope.menuSwitch = function () {
    if ($('.collMenuTabs').hasClass('open')) {
      $('.collMenuTabs').removeClass('open');
    } else {
      $('.collMenuTabs').addClass('open');
    }
  };
});
//# sourceMappingURL=bundle.js.map
