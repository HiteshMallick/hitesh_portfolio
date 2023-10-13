import React from "react";
import "./Projects.css";
import { FaPuzzlePiece, FaGithub } from "react-icons/fa6";
import { BsBoxArrowUpRight } from "react-icons/bs";

import P_img from "../../assets/images/gamewd.jpg";

const Projects = () => {
  return (
    <>
      <div id="project" className="main-contents">
        <h2 id="about">Project</h2>
        <div className="udr-1"></div>
        <div className="udr-2"></div>

        <div className="P-title">
          <h3>
            Each project is a unique piece of development{" "}
            <span style={{ color: "green" }}>
              <FaPuzzlePiece />
            </span>
          </h3>
        </div>

        {/* Project-info */}

        <div className="project_main">
          {/* project-details */}
          <div className="project_Details">
            <div className="project_img">
              <img src={P_img} alt="project_img1" />
            </div>
            <div className="project_description">
              <h3>GameZone</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                quisquam fugit earum? Itaque ullam magni inventore deleniti ad
                suscipit id?
              </p>
              <p className="tools">Tech Use | Html, Css, JavaScript</p>
              <a href="">
                Code{" "}
                <span>
                  <FaGithub />
                </span>
              </a>
              <a href="">
                Live{" "}
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
            </div>
          </div>

          <div className="project_Details">
            <div className="project_img">
              <img src={P_img} alt="project_img1" />
            </div>
            <div className="project_description">
              <h3>Fresh Farm</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                quisquam fugit earum? Itaque ullam magni inventore deleniti ad
                suscipit id?
              </p>
              <p className="tools">Tech Use | Html, Css, JavaScript</p>
              <a href="">
                Code{" "}
                <span>
                  <FaGithub />
                </span>
              </a>
              <a href="">
                Live{" "}
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
            </div>
          </div>

          <div className="project_Details">
            <div className="project_img">
              <img src={P_img} alt="project_img1" />
            </div>
            <div className="project_description">
              <h3>Pet-C</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                quisquam fugit earum? Itaque ullam magni inventore deleniti ad
                suscipit id?
              </p>
              <p className="tools">Tech Use | Html, Css, JavaScript</p>
              <a href="">
                Code{" "}
                <span>
                  <FaGithub />
                </span>
              </a>
              <a href="">
                Live{" "}
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
