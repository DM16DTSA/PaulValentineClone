angular.module("app")
.controller('storeFinderCtrl', function($scope, $stateParams, mainService, $rootScope) {
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
          styles: [
            {elementType: 'geometry', stylers: [{color: '#555555'}]},
            {elementType: 'labels.text', stylers: [{visibility: "off", font: 'AvenirLTStd-Roman' }]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855', font: 'AvenirLTStd-Roman'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels',
              stylers: [{visibility: "off" }]
            },
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{visibility: "off" }]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{ opacity: "0.2" }]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels',
              stylers: [{ opacity: "0.2"}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels',
              stylers: [{  visibility: "off" }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#333'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#333'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#fff'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#fff'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#303030'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#fff'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#fff'}]
            }
          ]
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
  }

  $scope.initMap();

});
