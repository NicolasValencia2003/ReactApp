import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Start = () => {
    return (
        <div className='StartPage'>
            <p>I am START page</p>
            <Link to="/login">
                <button className='BotonLogin'>
                    <img src='https://cdn-icons-png.flaticon.com/128/1000/1000997.png' className='imageLogin'/>
                </button>
            </Link>
            <div className='spaceBetween'></div>
            <Link to="/create">
                <button className='BotonCreate'>
                    <img src='https://cdn-icons-png.flaticon.com/128/1828/1828395.png' className='imageCreate'/>
                </button>
            </Link>

        </div>
    )
}
export default Start;