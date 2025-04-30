import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar () {
    return <>
    <div className="nav-container">
        <nav className="nav-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    </div>
    </>
}

export default Navbar