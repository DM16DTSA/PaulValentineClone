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

    // LOOKBOOK STATE
    .state('lookbook', {
      url: '/lookbook',
      templateUrl: './app/routes/lookbook/lookbookTmpl.html',
      controller: 'lookbookCtrl'
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
      templateUrl: './app/routes/marina/marinaTmpl.html',
      controller: 'marinaCtrl'
    })

    // PEARL COLLECTION STATE
    .state('pearl', {
      url: '/collections/pearl',
      templateUrl: './app/routes/pearl/pearlTmpl.html',
      controller: 'pearlCtrl'
    })

    // FELIZ COLLECTION STATE
    .state('feliz', {
      url: '/collections/feliz',
      templateUrl: './app/routes/feliz/felizTmpl.html',
      controller: 'felizCtrl'
    })

    // STRAPS COLLECTION STATE
    .state('straps', {
      url: '/collections/straps',
      templateUrl: './app/routes/straps/strapsTmpl.html',
      controller: 'strapsCtrl'
    })

    //journal state
    .state('journal',{
      url: '/journal',
      templateUrl:'./app/routes/journal/journalTmpl.html',
      controller: 'journalCtrl'
    });

    // ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('/home');
  })
