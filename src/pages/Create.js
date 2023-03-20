import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Create = () => {
    return (
        <div className='CreatePage'>
            <h3>Crear Cuenta!</h3>
            <h5>Ingrese sus datos</h5>
            <Link to='/login'>
                <button className='BotonIniciarLogin'>
                    <h3>Iniciar Sesion</h3>
                </button>
            </Link>

        </div>
    )
}
export default Create;