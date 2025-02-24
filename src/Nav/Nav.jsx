import React, { useState, useEffect } from 'react';
import "./Nav.styles.css";

const Nav = () => {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    window.addEventListener(' scroll' , () => {
      window.scrollY > 100 ? setShowNav(true) : setShowNav(false);
    });

    return () => {
      window.removeEventListener(' scroll' , setShowNav)
    }
  }, []);

  return (
    <div className={`nav ${showNav && ' nav_black'}`}>
      <img
        alt="Netflix Logo"
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
      />
      <img
        alt="Netflix Logo"
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
      />
    </div>
  );
};

export default Nav;
