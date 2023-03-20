import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Create = () => {
    return (
        <div className='CreatePage'>
            <h3>Crear Cuenta!</h3>
            <h5>Ingrese sus datos</h5>
            <form className = "nameInput">
                <label>
                    <h6>Nombre</h6>
                    <input type="text" name="name" className = ""/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <form className = "adressInput">
                <label>
                    <h6>Apellido</h6>
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

            <Link to='/login'>
                <button className='BotonIniciarLogin'>
                    <h3>Registrar</h3>
                </button>
            </Link>

        </div>
    )
}
export default Create;