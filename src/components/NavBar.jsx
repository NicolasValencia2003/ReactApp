import { Component } from "react";
import { Link } from "react-router-dom"

class NavBar extends Component {
    render(){
        return(
        <div className="NavBar">
            <Link to="/">
                <button className="HomeButton">
                    <img src="https://cdn-icons-png.flaticon.com/128/4885/4885157.png" className="imageHome"/>
                </button>
            </Link>
            <Link to='/systemsettings'>
                <button className='Botonsettings'>
                    <img src='https://cdn-icons-png.flaticon.com/128/3178/3178130.png' className='imageSettings'/>
                </button>
            </Link>
            <Link to='/profile'>
                <button className="BotonProfile">
                    <img src="https://cdn-icons-png.flaticon.com/128/4519/4519729.png" className="imageProfile"/>
                </button>
            </Link>
            <Link to='/scrollpage'>
                <button className='BotonScroll'>
                    <img src='https://cdn-icons-png.flaticon.com/128/7971/7971369.png' className='imageScroll'/>
                </button>
            </Link>
        </div>
        )
    }
}

export default NavBar;