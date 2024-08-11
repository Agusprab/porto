import React from "react";
import './1info.css';
import { MdMoreHoriz } from "react-icons/md";

function Contact({Profile, toggleSidebar}) {
    return (
        <div className="sidebar-info">
   
        <div className="avatar-box" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
          <img src={Profile.image} alt={Profile.image} className="avatar-img"/>
        </div>
   
        <div className="info-content">
          <h1 className="name" title={Profile.name}>
            {Profile.name}
          </h1>
          <h1 className="name" title={Profile.name}>
            {Profile.surname}
          </h1>
          <p className="title">{Profile.title}</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn="" onClick={toggleSidebar}>
        <span>Personal Information</span>
        <MdMoreHoriz className='icon' size={20}/>
        </button>
      </div>
    );
}

export default Contact;