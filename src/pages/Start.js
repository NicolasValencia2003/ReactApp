import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Home = () => {
    return (
        <div className='StartPage'>
            <Link to='/create'>
                <button className='createAccountButton'>
                    Crear cuenta
                </button>
            </Link>
            <Link to='/login'>
                <button className='loginButton'>
                    Iniciar Sesión
                </button>
            </Link>
        </div>
    )
}
export default Home;