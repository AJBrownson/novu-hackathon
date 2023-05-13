import React from "react";
import './styles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navlogo">
            <h1>Tempi</h1>
        </div>
        <ul>
            <Link className="link" to='/records'>
            <li>Saved</li>
            </Link>

            <Link className="link" to='/notifications'>
            <li>Notifications</li>
            </Link>

            <Link className="link" to='/search'>
            <li>Search</li>
            </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
