import React from 'react'
import Greeting from "../components/Greeting"
import "./styles.css"
import { WiDegrees } from "react-icons/wi"

const HomePage = () => {
  return (
    <>
    <div className="page">
    <Greeting />
    <div className='main-body'>
        <h2>Lagos</h2>
        <h1>19&deg;</h1>
        <h5>Mostly Clear</h5>
        <p>H:24 L:18</p>
    </div>
    </div>
    </>
  )
}

export default HomePage