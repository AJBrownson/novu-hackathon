import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Greeting from '../../components/Greeting';
import "./styles.css";


const HomePage = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const getIcons = (icons) => {
    return `http://openweathermap.org/img/w/${icons}.png`;
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }, (error) => {
        console.log(error);
      });
    } else {
      console.log('Geolocation is not enabled in this browser.');
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      axios.get(`http://localhost:5000/api/weather?latitude=${latitude}&longitude=${longitude}`)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [latitude, longitude]);

  return (
    <div className="page">
    {weatherData ? (
      <>
        <Greeting />
        <div>
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <h1>{weatherData.main.temp}°C</h1>
          <img src={getIcons(weatherData.weather[0].icon)} alt="weather icon" />
          <h5>Weather: {weatherData.weather[0].description}</h5>
          <h5>Humidity: {weatherData.main.humidity}%</h5>
          <h5>Wind Speed: {weatherData.wind.speed}</h5>
        </div>
      </>
    ) : (
      <div className="lds-hourglass"></div>
    )}
  </div>
  );
}

export default HomePage;
