// lets create the function to call the weather api

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// API configuration - works for both local development and production
const isLocalDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_URL = isLocalDevelopment 
  ? "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
  : "/.netlify/functions/weather?city=";

// For local development, you'll need to add your API key here
const LOCAL_API_KEY = "YOUR_API_KEY_HERE"; // Replace with your actual API key for local testing

async function getWeather(city) {
  let url;
  if (isLocalDevelopment) {
    url = API_URL + encodeURIComponent(city) + "&appid=" + LOCAL_API_KEY;
  } else {
    url = API_URL + encodeURIComponent(city);
  }
  
  const response = await fetch(url);

  // to make sure the error message is only displayed when city id not found.
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/raining.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  getWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather(searchBox.value);
  }
});

getWeather(); 