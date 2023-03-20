import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Login = () => {
    return (
        <div className='LoginPage'>
            <h3>Inicio De Sesion!</h3>
            <h5>Ingrese sus datos</h5>
            <form className = "nameInput">
                <label>
                    <h6>Nombre</h6>
                    <input type="text" name="name" className = ""/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <form className = "passwordInput">
                <label>
                    <h6>Contraseña</h6>
                    <input type="text" name="name" className = ""/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <Link to='/'>
                <button className='BotonIniciarHome'>
                    <h3>Iniciar Sesion</h3>
                </button>
            </Link>

        </div>
    )
}
export default Login;