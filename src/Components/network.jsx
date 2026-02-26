import { IoHeartSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import iot from "../assets/images/IOT.png";
import bus from "../assets/images/BUS TOPOLOGY.png"
import dns from "../assets/images/DNS WITH SERVER.png"
import simul from "../assets/images/SIMULATE DHCP WITH EMAIL.png"
import wireless from "../assets/images/WIRELESS TO WIRED CONNECTIONS.png"
import React from 'react'
import profilePhoto from "../assets/images/profilepic.png";
export default function ciscoNetwork() {
  return (
    <>
    <div className="post-section">
      <div className="user-profile">
        <img className="profile-photo" src={profilePhoto} alt="" />
        <div className="proile-name">
          <p>paolo.ph</p>
          <p>Posted 1m ago</p>
        </div>
      </div>
      <div className="post-text">
        <p>I’ve been practicing networking using Cisco Packet Tracer where I configure routers and switches, set up VLANs, assign IP addresses, configure DHCP, and test connectivity. It helped me understand how real networks operate and improved my troubleshooting skills using Cisco CLI.</p>
        <br />
      </div>
      <div className="post-project">
          <img className="post-img-network" src={iot} alt="" />
  
        </div>
      <div className="likes-section">
        <div className="likes-shares">
          <div className="icon">
            <IoHeartSharp className="heart-icon" />
            1.1K
          </div>
          <div className="shares">1.1k Shares</div>
        </div>
      
          <div className="horizontal-line"></div>

          <div className="react-btn">
            <div className="btn">
              <AiFillLike /> Like
            </div>
            <div className="btn">
            <FaComment /> Comments
            </div>
            <div className="btn">
            <FaShare /> Share
            </div>
          </div>
      </div>
  </div>
  </>
  )
}

