// const { WEATHER_API } = Object.assign({}, process.env);
const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

search.addEventListener("click", async () => {
  // API Key for OpenWeatherMap
  const APIKey = "dda1c7218df9e346c6f541c49a54fca7";

  // Get the value of the input box
  const city = document.querySelector(".search-box input").value;

  // If input box is empty, return
  if (city === "") return;

  try {
    // Fetch the weather data for the city from OpenWeatherMap
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    );

    // Convert the response to JSON
    const json = await response.json();

    // If the city is not found, display error and return
    if (json.cod === "404") {
      container.style.height = "400px";
      weatherBox.style.display = "none";
      weatherDetails.style.display = "none";
      error404.style.display = "block";
      error404.classList.add("fadeIn");
      return;
    }

    // If the city is found, hide the error
    error404.style.display = "none";
    error404.classList.remove("fadeIn");

    // Get elements to display weather data
    const image = document.querySelector(".weather-box img");
    const temperature = document.querySelector(".weather-box .temperature");
    const description = document.querySelector(".weather-box .description");
    const humidity = document.querySelector(".weather-details .humidity span");
    const wind = document.querySelector(".weather-details .wind span");

    // Display the appropriate image for the weather
    switch (json.weather[0].main) {
      case "Clear":
        image.src = "images/clear.png";
        break;

      case "Rain":
        image.src = "images/rain.png";
        break;

      case "Snow":
        image.src = "images/snow.png";
        break;

      case "Clouds":
        image.src = "images/cloud.png";
        break;

      case "Haze":
        image.src = "images/mist.png";
        break;

      case "Drizzle":
        image.src = "images/drizzle.png";
        break;

      default:
        image.src = "";
    }

    // Display the weather data
    temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity} %`;
    wind.innerHTML = `${parseInt(json.wind.speed)} Km/H`;

    // Show the weather box and details
    weatherBox.style.display = "";
    weatherDetails.style.display = "";
    weatherBox.classList.add("fadeIn");
    weatherDetails.classList.add("fadeIn");
    container.style.height = "590px";
  } catch (error) {
    // Log any errors
    console.error("Error:", error);
  }
});
