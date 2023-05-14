import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import DateTime from "../../components/DateTime";

const HomePage = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const getIcons = (icons) => {
    return `http://openweathermap.org/img/w/${icons}.png`;
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not enabled in this browser.");
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      axios
        .get(
          `http://localhost:5000/api/weather?latitude=${latitude}&longitude=${longitude}`
        )
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [latitude, longitude]);

  return (
    <>
      <main>
        {weatherData ? (
        <div className="left">
          <div className="card">

            <div className="top_card">
                <h1>
                  {weatherData.name}, {weatherData.sys.country}
                </h1>
                <DateTime />
            </div>

            <div className="bottom_card">
              <div className="bottom_card_header">
                <h1>Weather Status</h1>
              </div>
              <div className="bottom_card_body">
                <div className="info">
                  <h3>Max Temperature: {weatherData.main.temp_max}°C</h3>
                  <h3>Min Temperature: {weatherData.main.temp_min}°C</h3>
                  <h3>Humidity: {weatherData.main.humidity}%</h3>
                  <h3>Wind Speed: {weatherData.wind.speed} km</h3>
                  <h3>Cloudiness: {weatherData.clouds.all}%</h3>
                </div>
                <div className="icon_div">
                  <div className="icon">
                  <img src={getIcons(weatherData.weather[0].icon)} alt="weather icon" />
                  <h2>{weatherData.weather[0].description}</h2>
                  </div>
                  <div className="temp">
                    <h1>{weatherData.main.temp}° C</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) : (
          <div className="lds-hourglass"></div>
      )}
        <div className="right">yooo</div>
      </main>
    </>
  );
};

export default HomePage;
