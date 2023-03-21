import { Component } from "react";
import { Link } from "react-router-dom"

class NavBar extends Component {
    render(){
        return(
        <div className="NavBar">
            <Link to="/home">
                <button className="HomeButton">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className="imageHome" alt=""/>
                </button>
            </Link>
            <Link to='/systemsettings'>
                <button className='Botonsettings'>
                    <img src='https://cdn-icons-png.flaticon.com/512/126/126472.png' className='imageSettings' alt=""/>
                </button>
            </Link>
            <Link to='/profile'>
                <button className="BotonProfile">
                    <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="imageProfile" alt=""/>
                </button>
            </Link>
            <button className="MenuPullUp">
                <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" className="menuImage" alt=""/>
            </button>
        </div>
        )
    }
}

export default NavBar;