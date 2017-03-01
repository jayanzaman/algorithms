function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=14&size=1440x1440&sensor=false";

    output.appendChild(img);
    getWeatherData();
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}


// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}
var getWeatherData (lat, lon){

var API_KEY = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}


var xhr = new XMLHttpRequest();
xhr.open('GET', API_KEY);
xhr.onload = function() {
    if (xhr.status === 200) {
        alert('Date produced: ' + xhr.responseText);
        console.log(xhr.responseText)
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();

}


