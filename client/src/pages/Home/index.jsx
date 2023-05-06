import React, { useState, useEffect } from "react";
import axios from "axios";
import Greeting from "../../components/Greeting";
import "./styles.css";


const HomePage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const getWeatherData = async () => {
      if (latitude && longitude) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/weather?lat=${latitude}&lon=${longitude}`
          );
          setWeatherData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getWeatherData();
  }, [latitude, longitude]);

  return (
    <div className="page">
      {weatherData ? (
        <>
          <Greeting />
          <div className="main-body">
            <h2>
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <h1>{weatherData.main.temp}°C</h1>
            <h5>Weather: {weatherData.weather[0].description}</h5>
            <h5>Humidity: {weatherData.main.humidity}%</h5>
          </div>
        </>
      ) : (
        <p className="loader">Loading weather data...</p>
      )}
    </div>
  );
};

export default HomePage;
