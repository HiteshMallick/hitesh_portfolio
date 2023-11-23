import React from "react";
import './About.css'
import { SlCalender } from "react-icons/sl";
import { Link } from "react-scroll";

import Resume from '../../assets/images/Hitesh_Resume.pdf'

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa6";
import { BiLogoJavascript, BiLogoGithub } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div className="main-contents">
        <h2 id="about">About Me</h2>
        <div className="udr-1"></div>
        <div className="udr-2"></div>

        {/* about-info */}

        <div className="about-info">
          <h3>I'm Hitesh Kumar Mallick</h3>
          <p>
            Dedicated web developer with a strong foundation in front-end
            development and basic knowledge of back-end passion for creating
            engaging and user-friendly web applications. Good command on HTML,
            CSS, JavaScript and React.js. Committed to continuous learning and
            staying up-to-date with the latest web-development trends.
          </p>
          <div className="button">
            <a href={Resume} download="Hitesh_Resume" className="btn">
              Resume
            </a>
            <Link to="contact" smooth={true} offset={-60} duration={500} className="btn">
              Contact Me
            </Link>
          </div>

          {/* tech-using */}
          <div className="tech-use">
            <h3>Tech Stack |</h3>
            <p className="tech-use_Icon" style={{ color: "darkorange" }}>
              <FaHtml5 />
            </p>
            <p className="tech-use_Icon" style={{ color: "blue" }}>
              <FaCss3Alt />
            </p>
            <p className="tech-use_Icon" style={{ color: "yellow" }}>
              <BiLogoJavascript />
            </p>
            <p className="tech-use_Icon" style={{ color: "aqua" }}>
              <FaReact />
            </p>
            <p className="tech-use_Icon" style={{ color: "purple" }}>
              <FaBootstrap />
            </p>
            <p className="tech-use_Icon" style={{ color: "orange" }}>
              <FaGitAlt />
            </p>
            <p className="tech-use_Icon" style={{ color: "--textColor" }}>
              <BiLogoGithub />
            </p>
          </div>

          {/* experience section */}
          <div className="about-experience_info">
            <div className="education">
              <h3 className="title">Education</h3>
              <div className="padd-15">
                <div className="timeline">
                  {/* timeline-item */}
                  <div className="timeline-item">
                    <h3 className="timeline-date">
                      <SlCalender /> 2017 - 2021
                    </h3>
                    <h4 className="timeline-title">
                      Bachelor in Computer Science
                    </h4>
                    <p className="timeline-text">
                      I have completed my b.tech in cse from Chhattisgarh Sawami
                      Vivekanand Technical University, Bhilai | Chhattisgarh.
                    </p>
                  </div>

                  {/* timeline item */}
                  <div className="timeline-item">
                    <h3 className="timeline-date">
                      <SlCalender /> 2016 - 2017
                    </h3>
                    <h4 className="timeline-title">12th</h4>
                    <p className="timeline-text">
                      I have completed my 12th in (PCM) from Khalsa Public
                      School, Durg | Chhattisgarh.
                    </p>
                  </div>

                  {/* timeline item */}
                  <div className="timeline-item">
                    <h3 className="timeline-date">
                      <SlCalender /> 2014 - 2015
                    </h3>
                    <h4 className="timeline-title">10th</h4>
                    <p className="timeline-text">
                      I have completed my 10th in (PCMB) from B.S.P Senior
                      Secondary School sector-7, Bhilai | Chhattisgarh.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience">
              <h3 className="title">Experience</h3>
              <div className="padd-15">
                <div className="timeline">
                  {/* timeline item */}
                  <div className="timeline-item">
                    <h3 className="timeline-date">
                      <SlCalender /> Apr - Oct | 2023
                    </h3>
                    <h4 className="timeline-title">Web Developer</h4>
                    <p className="timeline-text">
                      I have sucessfuly completed my internship in Web Developer
                      from FSA, Hyderabad, Telangana. My key role in the
                      organization as a frontend developer, to develop a user
                      friendly responsive website using frontend-tools.
                    </p>
                  </div>

                  {/* timeline item */}
                  <div className="timeline-item">
                    <h3 className="timeline-date">
                      <SlCalender /> Jan - Jun | 2022
                    </h3>
                    <h4 className="timeline-title">video Editor</h4>
                    <p className="timeline-text">
                      i have 6 month of expreience in video editing and i know
                      some editing tools like- Davinci resolve, kinemaster, etc
                    </p>
                  </div>

                  {/* timeline item */}
                  <div className="timeline-item">
                    <h3 className="timeline-date">
                      <SlCalender /> jun - jul | 2019
                    </h3>
                    <h4 className="timeline-title">Assistant</h4>
                    <p className="timeline-text">
                      I have sucessfuly completed my vocational-traning in
                      network-field from BSNL, Durg, Chhattisgarh. My role in
                      the organization is to assist the senior's person when
                      their is any problem related to server-line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
