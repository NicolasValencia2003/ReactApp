import React from 'react';
import '../App.css'


const  Location = () => {
    return (
        <div className='LocationPage'>
            <h2> Location</h2>
            <img src="https://img.freepik.com/vector-premium/mapa-minimo-ciudad-cali-colombia-sudamerica_478328-912.jpg"
                 className='locationMap'/>

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