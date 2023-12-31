import React from 'react'
import './Contact.css'

import { Link } from 'react-scroll';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaRegCopyright,
  FaPhone,
} from "react-icons/fa6";

import {AiOutlineMail, AiFillInstagram, AiOutlineArrowUp} from 'react-icons/ai'


const Contact = () => {

  return (
    <>
          <section className="contact" id="contact">
        <div className="contact_text">
          <h2>Contact <span style={{color:'orange'}}>Me!</span></h2>
          <h4>If You Have Any Question or Project In Your Mind</h4>
          <div className="contact_list">
            <li><a href=""> <span><FaPhone/></span> +91 8770312134</a></li>
            <li><a href=""> <span><AiOutlineMail/></span> officialhitesh1227@gmail.com</a></li>
          </div>

          <div className="contact_icon">
            <a href="/"> <span className="contact-i"><FaLinkedinIn/></span></a>
            <a href="/"> <span className="contact-i"><FaGithub/></span></a>
            <a href="/"> <span className="contact-i"><FaFacebookF/></span></a>
            <a href="/"> <span className="contact-i"><AiFillInstagram/></span></a>
          </div>
        </div>

        <div className="contact_form">
          <form>
            <input type="name" placeholder="Your Name" required/>
            <input type="email" placeholder="Your Email"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <input type="submit" value="Send Message" className="submit" required/>
          </form>
        </div>
      </section>


      {/* section 2 */}

      <section className="footer_end">
        <div className="last_text">
          <p>Copyright <span><FaRegCopyright/></span> 2023 All Right Reserved. Design | Develop by Hitesh Mallick</p>
        </div>

        <div className="top" id="home">
        <Link to="home" smooth={true} offset={-200} duration={500} className='top-item'>
          <AiOutlineArrowUp/>
        </Link>
        </div>
      </section>

    </>
  )
}

export default Contact
