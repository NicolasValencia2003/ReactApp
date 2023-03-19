import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Home = () => {
    return (
        <div className='HomePage'>
            <Link to="/nutrition">
                <button className='BotonNutrition'>
                    <img src='https://www.pngitem.com/pimgs/m/43-435774_nutrition-black-and-white-hd-png-download.png' className='imageNutrition'/>
                </button>
            </Link>
            <Link to='/routines'>
                <button className='BotonRoutines'>
                    <img src='https://i.pinimg.com/736x/57/f9/0f/57f90fb40b3b1872e45f42cb053f2a96.jpg' className='imageRoutines'/>
                </button>
            </Link>
            <p></p>
            <Link to="/forum" className='HomeToForumLink'>
                <button className="ForumButton">
                    <img src="https://p.kindpng.com/picc/s/312-3120150_fg-forum-svg-png-icon-free-download-transparent.png" className="imageForum"/>
                </button>
            </Link>
        </div>
    )
}
export default Home;