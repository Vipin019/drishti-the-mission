import React,{useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {

  const[x,setX]=useState(-1);

  function handleBarClick(){
    setX(-1*x)
  }

  return (
    <>
      {
        x===1?<div id="navbar">
      <div className="navbar">
        <Link to="/">
          <div className="navbar__name">
            <h1>
              <h1 id="navbar__name--firstName">दृष्टि</h1>
              <h2 id="navbar__name--lastName">द मिशन</h2>
            </h1>
          </div>
        </Link>
        <div className="navbar__home">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div className="navbar__about">
          <Link to="/about">
            <button>About Us</button>
          </Link>
        </div>
        <div className="navbar__contact">
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
        <div className="navbar__registration">
          <div className="navbar__registration--button"></div>
          <Link to="/registration">
            <button>Register Now</button>
          </Link>
        </div>
        <div className="navbar__bar" onClick={handleBarClick}>
          <FaBars></FaBars>
        </div>
      </div>
      <div className="smallNavbar">
        <div className="smallNavbar__home">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div className="smallNavbar__about">
          <Link to="/about">
            <button>About Us</button>
          </Link>
        </div>
        <div className="smallNavbar__contact">
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
        <div className="smallNavbar__registration">
          <div className="smallNavbar__registration--button"></div>
          <Link to="/registration">
            <button>Register Now</button>
          </Link>
        </div>
      </div>
    </div>:
    <div id="navbar">
      <div className="navbar">
        <Link to="/">
          <div className="navbar__name">
            <h1>
              <h1 id="navbar__name--firstName">दृष्टि</h1>
              <h2 id="navbar__name--lastName">द मिशन</h2>
            </h1>
          </div>
        </Link>
        <div className="navbar__home">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div className="navbar__about">
          <Link to="/about">
            <button>About Us</button>
          </Link>
        </div>
        <div className="navbar__contact">
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
        <div className="navbar__registration">
          <div className="navbar__registration--button"></div>
          <Link to="/registration">
            <button>Register Now</button>
          </Link>
        </div>
        <div className="navbar__bar" onClick={handleBarClick}>
          <FaBars></FaBars>
        </div>
      </div>
    </div>
      }
    </>
  );
};

export default Navbar;
