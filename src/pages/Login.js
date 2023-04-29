import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleLogin = (event) => {
        event.preventDefault()
        const preloadUser = {name: 'ejemplo', password: 'hola123'}
        if(name === preloadUser.name && password === preloadUser.password){
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Login Successful :)',
                showConfirmButton: false,
                timer: 1500
              })
            navigate("/home")
        }
        else{
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Wrong Username or Password :(',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
    return (
        <div className='LoginPage'>
            <h3>Inicio De Sesion!</h3>
            <h5>Ingrese sus datos</h5>
            <Link to='/'><button className='return'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
            <form onSubmit={handleLogin}>
                <form className = "nameInput">
                    <label>
                        <h6>Nombre</h6>
                        <input type="text" name="name" className = "" value={name} onChange={handleNameChange}/>
                    </label>
                </form>
                <form className = "passwordInput">
                    <label>
                        <h6>Contraseña</h6>
                        <input type="password" name="password" className = "" value={password} onChange={handlePasswordChange}/>
                    </label>
                </form>
                    <button className='BotonIniciarHome' type='submit'>
                        <p>Iniciar Sesion</p>
                    </button>
            </form>

        </div>
    );
}
export default Login;

