const api = {
    key: "7013775a8239d2e90d50a3bf8b430e4f", 
    baseurl: "https://api.openweathermap.org/data/2.5/" 
}

// getDefaultResults(2158177);

// function getDefaultResults(defaultLocation) {
//     fetch(`${api.baseurl}weather?id=${defaultLocation}&units=metric&appid=${api.key}`)
//         .then(weather => weather.json())
//         .then(displayResults);
// }

//let testVar = `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude})&lon=${longitude}&exclude=current,hourly,minutely,alerts&units=metric&appid=${api}`;

getLocation(); 

function getLocation() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(returnPosition);
  } else {
    return "Geolocation is not supported by this browser."; 
  }
}

function returnPosition(position) { 
  getDefaultResults2(position.coords.latitude, position.coords.longitude);
  get7DayForecast(position.coords.latitude, position.coords.longitude);
  console.log(getDefaultResults2);
}

function getDefaultResults2(latitude, longitude) {
    fetch(`${api.baseurl}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`)
        .then(weather => weather.json())
        .then(displayResults);
}

function get7DayForecast(latitude, longitude) {
    fetch(`${api.baseurl}onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly,minutely,alerts&units=metric&appid=${api.key}`)
      .then(weatherforecast => weatherforecast.json())
      .then(displayForeCastResults);
}

function displayForeCastResults(weatherforecast) {
  console.log(weatherforecast);
  let forecastEl = document.querySelector('.weather .forecast');
  forecastEl.innerText = `${weatherforecast.daily[0].dt}`; 
}

console.log 


const searchbox = document.querySelector('.search-box');

searchbox.addEventListener('keypress', setQuery);

function setQuery(event) {
    if (event.keyCode == 13){
        console.log(searchbox.value); 
        getResults(searchbox.value); 
    }
}
function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(weather => weather.json())
        .then(displayResults);
}

function displayResults(weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`; 

    let now = new Date();
    let date = document.querySelector('.location .date'); 
    date.innerText = dateBuilder(now);
    
    let temp = document.querySelector('.current .temp'); 
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`; 

    let weathericon = document.querySelector('.weathericon');
    weathericon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

}


function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;

}






