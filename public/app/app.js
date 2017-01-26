var app = angular.module("app", ['ui.router']);

angular.module("app")
  .config(function($stateProvider, $urlRouterProvider) {

    // INITIALIZE STATES
		// ============================================================
		$stateProvider

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

    // CART STATE
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
    .state('journal',{
      url: '/journal',
      templateUrl:'./app/routes/journal/journalTmpl.html',
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
      url:'/product/:id',
      templateUrl: './app/routes/product/productTmpl.html',
      controller: 'productCtrl'
    });
    // ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('/');
  })
