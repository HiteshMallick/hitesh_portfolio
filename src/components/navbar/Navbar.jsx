import React, { useRef } from "react";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

import image from "../../assets/images/h-img.jpg";

import { Link } from "react-scroll";

import Darkmode from "../darkMode/Darkmode";



const Navbar = () => {
  const navref = useRef();

  const showNavbar = () => {
    navref.current.classList.toggle("responsive_nav");
  };

  const [typeEffect] = useTypewriter({
    words: ["Web Developer", "Video Editor", "Youtuber"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const handelRemove = () => {
    navref.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <h3>Hitesh.dev</h3>
        <nav ref={navref}>
          <Link
            to="home"
            smooth={true}
            offset={-200}
            duration={500}
            onClick={handelRemove}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handelRemove}
          >
            About
          </Link>
          <Link
            to="service"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={handelRemove}
          >
            Service
          </Link>
          <Link
            to="project"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handelRemove}
          >
            Project
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handelRemove}
          >
            Contact
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <Darkmode></Darkmode>
      </header>

      {/* main section */}
      <div className="main-content" id="home">
        {/* Home start*/}
        <section className="home section">
          <div className="container">
            <div className="row">
              <div className="home-info padd-15">
                <h3 className="hello">
                  Hello, my name is{" "}
                  <span className="name">Hitesh Kr Mallick</span>
                </h3>
                <h3 className="my-profession">
                  I'm a <span className="typing">{typeEffect}</span>
                </h3>
                <p>
                  who loves to create websites as well as video editior and
                  youtuber. My expertise is to create website, video and many
                  more...
                </p>
                <a href="/contact" className="btn hire-me">
                  Hire Me
                </a>
              </div>
              <div className="home-img padd-15">
                <img src={image} alt="profile-pic" />
              </div>
            </div>
          </div>
        </section>
        {/* Home end*/}
      </div>
      {/* main section */}
    </>
  );
};

export default Navbar;
