const apiKey = "2fe077ea183cd26e5495b761e829bd92";
const API_URL_CITY = "http://api.openweathermap.org/geo/1.0/direct?limit=5&q=";
const API_URL_WEATHER = "http://api.openweathermap.org/data/2.5/weather?";
const searchBox = document.querySelector(".search input");
const searchBTN = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

document
  .querySelector("#search-form")
  .addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const search = ev.target.elements.item("input").value;
    await checkWeather(search);
  });

async function checkWeather(city) {
  const cityResponse = await fetch(API_URL_CITY + city + `&appid=${apiKey}`);
  let cityData = await cityResponse.json();
  if (cityData.length === 0) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    searchBox.value = "";
  } else {
    const weatherResponse = await fetch(
      API_URL_WEATHER +
        `lat=${cityData[0].lat}&lon=${cityData[0].lon}` +
        `&appid=${apiKey}` +
        `&units=metric`
    );
    let weatherData = await weatherResponse.json();
    document.querySelector(".city").innerHTML = weatherData.name;
    document.querySelector(".temp").innerHTML =
      Math.round(weatherData.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      weatherData.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML =
      weatherData.wind.speed + "km/h";

    let weatherCondition = weatherData.weather[0].main;

    document.querySelector(".weather-icon").src =
      weatherConditionPic[weatherCondition];

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    searchBox.value = "";
    console.log(cityData);
  }
}
const weatherConditionPic = {
  Clouds: "images/clouds.png",
  Clear: "images/clear.png",
  Blizzard: "images/blizzard.png",
  Fog: "images/fog.png",
  Mist: "images/mist.png",
  Rainy: "images/rainy.png",
  Snow: "images/snow.png",
  Storm: "images/storm.png",
  Sleet: "images/sleet.png",
  Thunder: "images/thunder.png",
  Tornado: "images/tornado.png",
  Sandstorm: "images/sandstorm.png",
  Drizzle: "images/drizzle.png",
};
