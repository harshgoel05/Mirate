google.maps.event.addDomListener(window, "load", init);
function init() {
  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    navigationControl: false,
    center: new google.maps.LatLng(12.8231, 80.0458)
  };
  var mapElement = document.getElementById("rt-gmap");
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(12.8231, 80.0458),
    map: map,
    title: "SRM University"
  });
}
