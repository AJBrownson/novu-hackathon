import { useState, useEffect } from 'react'
import axios from 'axios'
import Greeting from "../../components/Greeting"
import "./styles.css"



const HomePage = () => {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.lat);
      setLong(position.coords.long);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long])


  return (
    <>
    <div className="page">
    <Greeting />
    <div className='main-body'>
        <h2>Lagos</h2>
        {/* <p>Your location is {lat} + {long}</p> */}
        <h1>19&deg;</h1>
        <h5>Mostly Clear</h5>
        <p>H:24 L:18</p>
    </div>
    </div>
    </>
  )
}

export default HomePage