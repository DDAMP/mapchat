var map;
function initMap() {
  var myLatLng = {lat: 51.250, lng: 22.57};
  var myLatLng1 = {lat: 51.245, lng: 22.53};
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 13
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });

  var marker1 = new google.maps.Marker({
    map: map,
  });

  var infowindow = new google.maps.InfoWindow({
    content: "Przykładowa wiadomość"
  });

  var infowindow1 = new google.maps.InfoWindow({
    content: "Inna"
  });
  infowindow.open(map, marker);
  setTimeout(function(){
    marker1.setPosition(myLatLng1);
    infowindow1.open(map, marker1);
}, 3000);
}
