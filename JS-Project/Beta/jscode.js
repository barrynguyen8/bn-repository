const api = {
    key: "7013775a8239d2e90d50a3bf8b430e4f", 
    baseurl: "https://api.openweathermap.org/data/2.5/" 
} 

function getLocation() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(getDefaultResults);
  } else {
    return "Geolocation is not supported by this browser."; 
  }
}
getLocation();

function fetchQuery(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
  .then(weather => weather.json())
  .then(displayResults);
}

function getDefaultResults(position) { 
    fetch(`${api.baseurl}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${api.key}`)
        .then(weather => weather.json())
        .then(displayResults);
}

const forecastEl = document.querySelectorAll('section');
const iconForecast = forecastEl[0];
const tempForecast = forecastEl[1];
const dayForecast = forecastEl[2];

function displayForecastResults(weatherForecast) {
  forecastEl.innerText = `${weatherForecast.daily[0].dt} ${weatherForecast.daily[1].temp.day} date/time`;
  tempForecast.innerText = `${Math.round(weatherForecast.daily[1].temp.day)}°C   ${Math.round(weatherForecast.daily[2].temp.day)}°C   ${Math.round(weatherForecast.daily[3].temp.day)}°C   ${Math.round(weatherForecast.daily[4].temp.day)}°C   ${Math.round(weatherForecast.daily[5].temp.day)}°C   ${Math.round(weatherForecast.daily[6].temp.day)}°C   ${Math.round(weatherForecast.daily[7].temp.day)}°C`; 
}

const searchbox = document.querySelector('.search-box');
const dropdown = document.getElementById('dropdown');
dropdown.addEventListener('change', getResultsDropdown);
searchbox.addEventListener('keypress', getResultsSearchbox);

function getResultsDropdown(event) { 
  const dropdownValue = event.target.value 
  const bodyEl = document.getElementsByTagName("body"); 
  
  switch(dropdownValue) {
    case "ho chi minh":
      bodyEl[0].style.backgroundImage = 'url("./images/hochiminh.jpeg")';
      break;
    case "san francisco":
      bodyEl[0].style.backgroundImage = 'url("./images/goldengatebridge.jpeg")';
      break;
    case "melbourne,au":
      bodyEl[0].style.backgroundImage = 'url("./images/melbourne.jpeg")';
      break; 
    case "sydney":
      bodyEl[0].style.backgroundImage = 'url("./images/sydney.jpeg")';
      break;
    case "new york":
      bodyEl[0].style.backgroundImage = 'url("./images/new_york.jpeg")';
      break;
    case "london":
      bodyEl[0].style.backgroundImage = 'url("./images/london.jpeg")';
      break;
    case "shanghai":
      bodyEl[0].style.backgroundImage = 'url("./images/shanghai.jpeg")';
      break;
    case "paris":
      bodyEl[0].style.backgroundImage = 'url("./images/paris.jpeg")';
      break;
    case "tokyo":
      bodyEl[0].style.backgroundImage = 'url("./images/tokyo.jpeg")';
      break;
    case "beijing":
      bodyEl[0].style.backgroundImage = 'url("./images/beijing.jpeg")';
      break;
  }  
  fetchQuery(dropdownValue);
}

function getResultsSearchbox(event) {
  if (event.keyCode == 13) {
    const searchboxValue = event.target.value
    fetchQuery(searchboxValue);
  }
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

    fetch(`${api.baseurl}onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${api.key}`)
    .then(weatherForecast => weatherForecast.json())
    .then(displayForecastResults);
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let abbreviatedDays = ["SUN", "MON", "TUE", "WED", "THU ", "FRI ", "SAT"];
    let day = days[d.getDay()];

    let tomorrow = new Date(d);
    tomorrow.setDate(new Date().getDate()+1);
    let abbreviatedDay1 = abbreviatedDays[tomorrow.getDay()]; 
    tomorrow.setDate(new Date().getDate()+2);
    let abbreviatedDay2 = abbreviatedDays[tomorrow.getDay()]; 
    tomorrow.setDate(new Date().getDate()+3);
    let abbreviatedDay3 = abbreviatedDays[tomorrow.getDay()]; 
    tomorrow.setDate(new Date().getDate()+4);
    let abbreviatedDay4 = abbreviatedDays[tomorrow.getDay()]; 
    tomorrow.setDate(new Date().getDate()+5);
    let abbreviatedDay5 = abbreviatedDays[tomorrow.getDay()]; 
    tomorrow.setDate(new Date().getDate()+6);
    let abbreviatedDay6 = abbreviatedDays[tomorrow.getDay()]; 
    let abbreviatedDay7 = abbreviatedDays[d.getDay()]; 
    dayForecast.innerText = `${abbreviatedDay1} ${abbreviatedDay2} ${abbreviatedDay3} ${abbreviatedDay4} ${abbreviatedDay5} ${abbreviatedDay6} ${abbreviatedDay7}`; 
    
    let date = d.getDate();
    let month = months[d.getMonth()+1];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

