import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import WeatherSearch from './weathersearch';
import WeatherDisplay from './weatherdisplay';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    const apiKey = 'b9ac39ba7129ce9a55efea28f038a2c8'; 
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await axios.get(url);
      console.log(response.data)
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Weather App
      </Typography>
      <WeatherSearch onSearch={fetchWeatherData} />
      {weatherData && <WeatherDisplay data={weatherData} />}
   
    </Container>
  );
};

export default Weather;
