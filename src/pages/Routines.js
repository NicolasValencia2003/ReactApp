import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Routines.css';

const Routines = () => {
  const [latPushUpCount, setLatPushUpCount] = useState(0);
  const [vueltaCount, setVueltaCount] = useState(0);
  const [squatCount, setSquatCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const handleLatPushUpClick = () => {
    if (latPushUpCount < 5) {
      setLatPushUpCount(latPushUpCount + 1);
    }
  };

  const handleVueltaClick = () => {
    if (vueltaCount < 1) {
      setVueltaCount(vueltaCount + 1);
    }
  };

  const handleSquatClick = () => {
    if (squatCount < 3) {
      setSquatCount(squatCount + 1);
    }
  };

  // Check if all exercises are completed
  if (latPushUpCount === 5 && vueltaCount === 1 && squatCount === 3 && completedCount === 0) {
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: 'You have completed all exercises.',
    });
    setCompletedCount(1);
  }

  return (
    <div className="RoutinesPage">
      <Link to="/home">
        <button className="returnR">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png" className="returnImage" alt="" />
        </button>
      </Link>
      <img src='http://ejerciciosencasa.es/wp-content/uploads/2014/04/istock-woman-running.jpg' className="routineImage" alt="Routine" />
      <h2>Rutina Sergio Estrada</h2>
      <div className="exerciseContainer">
        <div className="exercise">
          <button className="repButton" onClick={handleLatPushUpClick}>
            <span>Lat Push Ups</span>
            <span className="count">{latPushUpCount}/5</span>
          </button>
        </div>
        <div className="exercise">
          <button className="repButton" onClick={handleVueltaClick}>
            <span>Vuelta a la manzana</span>
            <span className="count">{vueltaCount}/1</span>
          </button>
        </div>
        <div className="exercise">
          <button className="repButton" onClick={handleSquatClick}>
            <span>Squats asistidos</span>
            <span className="count">{squatCount}/3</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Routines;
