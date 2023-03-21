import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Login = () => {
    return (
        <div className='LoginPage'>
            <h3>Inicio De Sesion!</h3>
            <h5>Ingrese sus datos</h5>
            <Link to='/'><button className='return'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
            <form className = "nameInput">
                <label>
                    <h6>Nombre</h6>
                    <input type="text" name="name" className = ""/>
                </label>
            </form>
            <form className = "passwordInput">
                <label>
                    <h6>Contraseña</h6>
                    <input type="text" name="name" className = ""/>
                </label>
            </form>
            <Link to='/home'>
                <button className='BotonIniciarHome'>
                    <p>Iniciar Sesion</p>
                </button>
            </Link>

        </div>
    )
}
export default Login;