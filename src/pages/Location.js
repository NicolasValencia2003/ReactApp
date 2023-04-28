import React from 'react';
import styles from './Location.module.css'
import { Link } from 'react-router-dom';


const  Location = () => {
    return (
        <div className='LocationPage'>
            <h2>Location</h2>
            <Link to='/home'><button className='return'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
            <img src="https://img.freepik.com/vector-premium/mapa-minimo-ciudad-cali-colombia-sudamerica_478328-912.jpg" alt='' className='locationMap'/>

            <p> Seleccionar Ubicacion </p>

            <select>
                <option value="Crew">Crew</option>
                <option value="24/7Fitness">24/7 Fitness</option>
                <option selected value="BodyTech">BodyTech</option>
                <option value="GimnasioAsturias">Gimnasio Asturias</option>
            </select>

            <p> Si no encuentras tu sede, agregala aqui </p>

            <form className = "directionInput">
                <label>
                    Dirección:
                    <input type="text" name="name" className = ""/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default Location;