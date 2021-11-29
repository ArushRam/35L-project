import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';




function MenuBar(props) {
  return (
    <div className="menubar">
      <h2>Dining Hall Tracker</h2>
      <nav>
        <ul>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/signup">Sign Up</Link>
        </ul>
      </nav>
    </div>
  );
}



export default MenuBar; 