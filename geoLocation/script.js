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
    getWeatherData(latitude, longitude);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);

  function getWeatherData(latitude, longitude){

  var URL = `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}`
  var API_KEY = `&appid=f95c4888187e4ad64b526da1158daf6d`
  console.log(URL + API_KEY)
//  Why doesn't the ajax call work?
  var xhr = new XMLHttpRequest();
  xhr.open('GET', URL + API_KEY, false);
  xhr.onload = function() {
      if (xhr.status === 200) {
          alert('Data produced: ' + xhr.responseText);
          console.log(xhr.responseText)
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();

  }


}





