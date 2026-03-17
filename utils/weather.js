console.log("Loaded API KEY:", process.env.WEATHER_API);

const axios = require("axios");

async function getWeather(city) {
    try {
        const API_KEY = process.env.WEATHER_API; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
        
        const { data } = await axios.get(url);
        
        return {
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            weather: data.weather[0].main,
            description: data.weather[0].description,
        };
    } catch (err) {
        return null;  
    }
}

module.exports = getWeather;
