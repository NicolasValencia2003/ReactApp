import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Home = () => {
    return (
        <div className='HomePage'>
            <h1 className='Title'>WODBud</h1>
            <p>I am home page</p>
            <Link to="/contact" className='HomeToContactLink'>Contact</Link>
        </div>
    )
}
export default Home;