import { Link } from "react-router";
import ASCiiLogo from "./ASCiiLogo.tsx"

function Navbar() {
    const img1 = "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";
    const img2 = "https://www.pngfind.com/pngs/b/11-111643_astronaut-helmet-png.png";

    return (
       <nav className="navbar">
            <Link to="/" className="nav-logo"> <ASCiiLogo/> </Link>

            <div className="nav-links">
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/dash" className="nav-link">DASH</Link>
            </div>

        <div className="nav-logo-wrapp">
        <a href="https://www.nasa.gov/roman" target="_blank" rel="noopener noreferrer">
            <img src={img1} alt="NASA" className="logo-image-N" />
        </a>

        <a href="https://esa.int" target="_blank" rel="noopener noreferrer">
            <img src={img2} alt="ESA" className="logo-image-E" />
        </a>
        </div>
       </nav>
    )
};

export default Navbar;
