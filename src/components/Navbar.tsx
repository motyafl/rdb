import { Link } from "react-router";

function Navbar() {
    return (
       <nav className="navbar">
            <Link to="/" className="nav-link">Logo</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/dash" className="nav-link">TO DASH</Link>
       </nav>
    )
}

export default Navbar
