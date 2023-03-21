import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Home = () => {
    return (
        <div className='HomePage'>
            <Link to="/nutrition">
                <button className='BotonNutrition'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3373/3373025.png' className='imageNutrition'alt=''/>
                </button>
            </Link>
            <Link to='/routines'>
                <button className='BotonRoutines'>
                    <img src='https://cdn3.iconfinder.com/data/icons/arm-building-exercises-and-muscle-building/263/arm-building-exercises-009-512.png' className='imageRoutines' alt=''/>
                </button>
            </Link>
            <div className='spaceBetween'></div>
            <Link to="/forum">
                <button className="ForumButton">
                    <img src="https://static.thenounproject.com/png/3327115-200.png" className="imageForum" alt=''/>
                </button>
            </Link>
            <Link to="/location">
                <button className='BotonLocation'>
                    <img src='https://cdn-icons-png.flaticon.com/512/64/64665.png' className='imageLocation'alt=''/>
                </button>
            </Link>

        </div>
    )
}
export default Home;