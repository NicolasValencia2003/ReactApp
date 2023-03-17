import { Component } from "react";
import { Link } from "react-router-dom"

class NavBar extends Component {
    render(){
        return(
        <div className="NavBar">
            <Link to="/" className='ContactToHomeLink'>Home</Link>
            <Link to="/contact" className='HomeToContactLink'>Contact</Link>
        </div>
        )
    }
}

export default NavBar;