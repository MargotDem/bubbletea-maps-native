// var map
/* global google */

function initMap (bubbleTea) {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(bubbleTea.lat, bubbleTea.long),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  })

  var infowindow = new google.maps.InfoWindow({})

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(bubbleTea.lat, bubbleTea.long),
    map: map
  })

  google.maps.event.addListener(marker, 'click', (function (marker) {
    return function () {
      infowindow.setContent(bubbleTea.info)
      infowindow.open(map, marker)
    }
  })(marker))
}
