import React from 'react'
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div className='ContactPage'>
            <h1>WODBud</h1>
            <p>I am contact page</p>
            <Link to="/" className='ContactToHomeLink'>Home</Link>
        </div>
    )
}
export default Contact