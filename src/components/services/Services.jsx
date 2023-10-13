import React from "react";
import "./Service.css";
import { FaCode } from "react-icons/fa";
import { ImFilm } from "react-icons/im";
import { AiOutlineMobile } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <div id="service" className="main-contents">
        <h2 id="about">Service</h2>
        <div className="udr-1"></div>
        <div className="udr-2"></div>

        {/* service-section */}

        <div className="service-info">
          {/* service item start */}

          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <div className="ri">
                  <FaCode />
                </div>
              </div>
              <h4>Web Developer</h4>
              <p>
                I am creating user-friendly responsive websites by using React,
                Html, Css and JavaScript and lill-bit backend.
              </p>
            </div>
          </div>

          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <div className="ri">
                  <ImFilm />
                </div>
              </div>
              <h4>Video Editor</h4>
              <p>
                I have a personal experience of mine in editing video's,I edit video for content creators by using tools Daivince Resolve 18, Kinemaster.
              </p>
            </div>
          </div>

          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <div className="ri">
                  <AiOutlineMobile />
                </div>
              </div>
              <h4>Web Design</h4>
              <p>
                I have knowledge of UI/UX Design to create a beautiful websites
                and shape your greate idea into reality.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
