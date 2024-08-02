import logo from "./logo.svg"
import menu from "./menu.svg"
import "./styles/nav.css"
import { useState } from "react"
import { Link } from "react-router-dom"

function Mynav() {

    const [isMenuVisible, setMenuVisible] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setMenuVisible(prevState => !prevState);
    };

    return (
        <div className="nav">
            <div className="navIcon">
                <img className="logo" src={logo} alt="logo" />
                <img className="menu" onClick={toggleMenu} src={menu} alt="menu" />
            </div>
            <ul className={`navLink ${isMenuVisible ? 'active' : ''}`} >
                <li><Link className="Link" to="/">Home</Link></li>
                <li><Link className="Link" to="/NGO's" >NGO's</Link></li>
                <li><Link className="Link" to="/Events" >Events</Link></li>  
            </ul>
        </div>
    )
}

export default Mynav;