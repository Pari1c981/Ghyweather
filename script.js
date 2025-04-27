const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const city = 'Guwahati';
const country = 'IN';

async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Weather data not found');
    }
    const weatherData = await response.json();
    displayWeather(weatherData);
  } catch (error) {
    document.getElementById('weather-details').innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
  }
}

function displayWeather(data) {
  const details = `
    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p><strong>Feels Like:</strong> ${data.main.feels_like}°C</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
  `;
  document.getElementById('weather-details').innerHTML = details;
}

fetchWeather();