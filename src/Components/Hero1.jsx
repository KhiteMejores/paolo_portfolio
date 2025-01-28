import React from 'react'
import coverPhoto from "../assets/images/pexels-photo-247791.webp"
import profilePhoto from '../assets/images/profile2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import Navmenu from './Navmenu'
export default function Hero1() {
  return (
    <div className="container-hero">
                 <div className="hero">
                     <div className="hero-cover-photo">
                        <img className="coverPhoto" src={coverPhoto} width="700px" height="245"  alt="" />
                     </div>
                        <div className="profile">
                                <img src={profilePhoto} alt="" />
                                <div className="profile-name">
                                    <p>Mejores.ph</p>
                                    <p className='followers'>1.3K followers • 21 following</p>
                                </div>
                                <div className="social-media">
                                <GrFacebookOption className='social-media-icon' />
                                <FaInstagram className='social-media-icon' />
                                <FaTiktok  className='social-media-icon' />
                                <FaYoutube className='social-media-icon' />
                                </div>
                        </div>
                          <div className="horizontal-line"></div>
                 </div>
         </div>
  )
}
