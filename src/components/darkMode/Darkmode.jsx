import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import './Darkmode.css';

const Darkmode = () => {

    const [icon, setIcon] = useState(true, 'light-theme')

    useEffect(()=>{
      document.body.className = icon;
    },[icon])

    const changeIcon= () =>{
        // e.stopPropagation()
        if(icon === 'dark-theme'){
          setIcon('light-theme')
        }else{
          setIcon('dark-theme')
        }
    }


  return (
    <>
      <div className="style-switch">
        <div className="day-night s-icon">
          <div className="sw-i" onClick={changeIcon}>{icon === 'dark-theme' ? <FaMoon/> : <FaSun/>} </div>
        </div>
      </div>
    </>
  );
};

export default Darkmode;
