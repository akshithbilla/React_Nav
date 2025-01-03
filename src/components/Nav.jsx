import React, { useState } from "react";
import { Link } from "react-router-dom"; 
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const myFunction = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Nav */}
      <div className="w3-bar w3-black">
        <Link to="/" className="w3-bar-item w3-button">Home</Link>  
        <Link to="/about" className="w3-bar-item w3-button w3-hide-small">About</Link>  
        <Link to="/projects" className="w3-bar-item w3-button w3-hide-small">Projects</Link>  
        <Link to="/contact" className="w3-bar-item w3-button w3-hide-small">Contact</Link>  
        
        {/* Mobile menu button */}
        <button
          className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
          onClick={myFunction}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>
      </div>

      {/* Collapsed mobile menu */}
      <div
        id="demo"
        className={`w3-bar-block w3-black ${isMenuOpen ? "" : "w3-hide"} w3-hide-large w3-hide-medium`}
      >
        <Link to="/about" className="w3-bar-item w3-button">About</Link>  
        <Link to="/projects" className="w3-bar-item w3-button">Projects</Link> 
        <Link to="/contact" className="w3-bar-item w3-button">Contact</Link>  
      </div>
    </div>
  );
}

export default Nav;
