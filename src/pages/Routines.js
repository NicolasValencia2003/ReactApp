import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Routines = () => {
    return (
        <div className='RoutinesPage'>
            <Link to='/home'><button className='returnR'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
            <img src='http://ejerciciosencasa.es/wp-content/uploads/2014/04/istock-woman-running.jpg' 
            className='routineImage' alt=''/>
            <h2>Rutina Sergio Estrada</h2>
            <label className = "checkBoxRoutine">
                <input
                type="checkbox"
                />
                5x Lat Push Ups
            </label>
            <label className = "checkBoxRoutine">
                <input
                type="checkbox"
                />
                1x vuelta a la manzana
            </label>
            <label className = "checkBoxRoutine">
                <input
                type="checkbox"
                />
                3x Squats asistidos
            </label>
            <h3>Similares</h3>
            <Link to=''>
                <button className='botonSimilares'>
                    <img src='https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/phul_-_1200x630.jpg?itok=LRC9qayO' className='imageSimilares' alt=''/>
                </button>
            </Link>
            <Link to=''>
                <button className='botonSimilares'>
                    <img src='https://cdn.shopify.com/s/files/1/0568/5064/5177/articles/8-ways-to-adjust-your-gym-workouts-after-a-long-break_1024x1024.jpg?v=1624465096' className='imageSimilares' alt=''/>
                </button>
            </Link>
            

        </div>

    )
}
export default Routines;