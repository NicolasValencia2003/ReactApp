import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css'


const Start = () => {
    return (
        <div className='StartPage'>
            <h1>BIENVENIDO A LA APP</h1>
            <Link to='/create'>
                <button className='BotonCreate'>
                    <h3>Crear Cuenta</h3>
                </button>
            </Link>
            <Link to='/login'>
                <button className='BotonLogin'>
                    <h3>Iniciar Sesion</h3>
                </button>
            </Link>
        </div>
    )
}
export default Start;