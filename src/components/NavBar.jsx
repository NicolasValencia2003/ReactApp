import { Component } from "react";
import { Link } from "react-router-dom"

class NavBar extends Component {
    render(){
        return(
        <div className="NavBar">
            <Link to="/" className='ForumToHomeLink'>
                <button className="HomeButton">
                    <img src="data:image/png;base64,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" className="imageHome"/>
                </button>
            </Link>
            <Link to='/systemsettings'>
                <button className='Botonsettings'>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/006/542/150/small/setting-icon-design-tools-cog-gear-line-style-for-graphic-design-logos-web-sites-social-media-ui-mobile-app-free-vector.jpg' className='imageSettings'/>
                </button>
            </Link>
        </div>
        )
    }
}

export default NavBar;