'use strict';

let map;

function initMap() {
  let map, coords, styles, marker;

  coords = {
    lat: 40.67592370621484,
    lng:  -73.9404139314091
  }

  styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

  map = new google.maps.Map(document.getElementById("map"), {
    center: coords,
    zoom: 13,
    styles: styles,
    disableDefaultUI: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
  });

  marker = new google.maps.Marker({
    position: coords,
    map: map,
		title: "What do you want to see, Julia?",
		animation: google.maps.Animation.BOUNCE ,
		draggable: true,
		icon: 'images/marker.png'
	});
}

(function ($) {
  $(document).ready(function () {
    
    // Slider
    $('.slick__slide').slick({
      centerMode: true,
      slidesToShow: 2,
      // prevArrow: '<div class="slider__prev">&larr;</div>',
      // nextArrow: '<div class="slider__next">&rarr;</div>',
      // appendArrows: $('.slider__arrows'),
    }); 

    // Menu
    

    // let content = {
    //   slider: $('#slider').offset().top,
    //   cont: $('#cont').offset().top
    // }

    // $(window).scroll(() => {
    //   let scrTop = $(document).scrollTop() + $(window).height() / 3,
    //   position = '';
      
    //   if(scrTop < content.cont) {
    //     position = 'SLIDER';
    //   } else if (scrTop >= content.cont) {
    //     position = 'CONT';
    //   }

    //   $('.slide__link').removeClass('slide__active');
		// 	$('.slide').find(`[href="#${position}"]`).addClass('slide__active');
    // });
    
  });
})(jQuery);