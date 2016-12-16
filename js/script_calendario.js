$(document).ready(function() {	
	if( $("#map").length ) {
        
        $(window).on('resize', function() {
            $('#map').height( $('.contacts').height() );
        }).trigger('resize');
        
        function initialize() {
            var $map = $("#map");
                center = { lat: $map.data('lat'), lng: $map.data('lng')},
                mapOptions = {
                center: center,
                zoom: $map.data('zoom'),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                scrollwheel: false,
                zoomControl: true,
                zoomControlOptions: {
                  style: google.maps.ZoomControlStyle.SMALL
                },
                styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.8}]}]
            };

            var map = new google.maps.Map(document.getElementById('map'), mapOptions);

            var marker = new google.maps.MarkerImage($map.data('marker'),
              new google.maps.Size(32, 32),
              new google.maps.Point(0,0));

            var marker =new google.maps.Marker({
                position: center,
                map: map,
                icon: marker,
                title:'Nuriza'
            });
            
            if( $map.data('info') ) {
                var infowindow = new google.maps.InfoWindow({
                        content: $map.data('info')
                      });

                google.maps.event.addListener(marker, 'click', function(e) {
                    infowindow.open(map,marker);
                });

                window.setTimeout(function(){
                    infowindow.open(map, marker);
                }, 1000);
            }
        }

        // Triggers and Init
        google.maps.event.addDomListener(window, 'load', initialize);
    }
	
	
	
	if( $("#map2").length ) {
        
        $(window).on('resize', function() {
            $('#map2').height(500);
        }).trigger('resize');
        
        function initialize2() {
            var $map = $("#map2");
                center = { lat: $map.data('lat'), lng: $map.data('lng')},
                mapOptions = {
                center: center,
                zoom: $map.data('zoom'),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                scrollwheel: false,
                zoomControl: true,
                zoomControlOptions: {
                  style: google.maps.ZoomControlStyle.SMALL
                },
                styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.8}]}]
            };

            var map = new google.maps.Map(document.getElementById('map2'), mapOptions);

            var marker = new google.maps.MarkerImage($map.data('marker'),
              new google.maps.Size(32, 32),
              new google.maps.Point(0,0));

            var marker =new google.maps.Marker({
                position: center,
                map: map,
                icon: marker,
                title:'Nuriza'
            });
            
            if( $map.data('info') ) {
                var infowindow = new google.maps.InfoWindow({
                        content: $map.data('info')
                      });

                google.maps.event.addListener(marker, 'click', function(e) {
                    infowindow.open(map,marker);
                });

                window.setTimeout(function(){
                    infowindow.open(map, marker);
                }, 1000);
            }
        }

        // Triggers and Init
        google.maps.event.addDomListener(window, 'load', initialize2);
    }
	
	
	if( $("#map3").length ) {
        
        $(window).on('resize', function() {
            $('#map3').height(500);
        }).trigger('resize');
        
        function initialize3() {
            var $map = $("#map3");
                center = { lat: $map.data('lat'), lng: $map.data('lng')},
                mapOptions = {
                center: center,
                zoom: $map.data('zoom'),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                scrollwheel: false,
                zoomControl: true,
                zoomControlOptions: {
                  style: google.maps.ZoomControlStyle.SMALL
                },
                styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.8}]}]
            };

            var map = new google.maps.Map(document.getElementById('map3'), mapOptions);

            var marker = new google.maps.MarkerImage($map.data('marker'),
              new google.maps.Size(32, 32),
              new google.maps.Point(0,0));

            var marker =new google.maps.Marker({
                position: center,
                map: map,
                icon: marker,
                title:'Nuriza'
            });
            
            if( $map.data('info') ) {
                var infowindow = new google.maps.InfoWindow({
                        content: $map.data('info')
                      });

                google.maps.event.addListener(marker, 'click', function(e) {
                    infowindow.open(map,marker);
                });

                window.setTimeout(function(){
                    infowindow.open(map, marker);
                }, 1000);
            }
        }

        // Triggers and Init
        google.maps.event.addDomListener(window, 'load', initialize3);
    }
	
});