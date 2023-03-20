import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Login = () => {
    return (
        <div className='LoginPage'>
            <h3>Inicio De Sesion!</h3>
            <h5>Ingrese sus datos</h5>
            <Link to='/'>
                <button className='BotonIniciarHome'>
                    <h3>Iniciar Sesion</h3>
                </button>
            </Link>

        </div>
    )
}
export default Login;