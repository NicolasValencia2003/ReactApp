import React from 'react';
import { Link } from 'react-router-dom';
import './Create.css'


const Create = () => {
    return (
        <div className='CreatePage'>
            <h3>Crear Cuenta!</h3>
            <h5>Ingrese sus datos</h5>
            <Link to='/'><button className='return'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
            <form className = "nameInput">
                <label>
                    <h6>Nombre</h6>
                    <input type="text" name="name" className = ""/>
                </label>
            </form>
            <form className = "adressInput">
                <label>
                    <h6>Apellido</h6>
                    <input type="text" name="name" className = ""/>
                </label>
            </form>
            <form className = "passwordInput">
                <label>
                    <h6>Contraseña</h6>
                    <input type="text" name="name" className = ""/>
                </label>
            </form>

            <Link to='/login'>
                <button className='BotonIniciarLogin'>
                    <p>Registrar</p>
                </button>
            </Link>

        </div>
    )
}
export default Create;