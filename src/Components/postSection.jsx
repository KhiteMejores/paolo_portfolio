import React from 'react'
import profilePhoto from "../assets/images/profile2.png";
import tanayPhoto from "../assets/images/tarahane.png";
import { IoHeartSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

export default function PostSection() {
  return (
    <>
    <div className="post-section">
      <div className="user-profile">
        <img className="profile-photo" src={profilePhoto} alt="" />
        <div className="proile-name">
          <p>Mejores.ph</p>
          <p>Posted 1hr ago</p>
        </div>
      </div>
      <div className="post-text">
      The goal of this system is to collect, analyze, and define the features and needs of the web-based hotel and resort management system. 
      The primary focus, along with the rationale behind their existence, is on the abilities needed by the owner and the intended users. 
      This software is designed to make reservation management easier, more accurate, and more efficient. It will greatly benefit the owner and the clients who will use the system.
   <br />
      <a href="https://tarahane.free.nf/?i=1">https://tarahane.free.nf/?i=1</a>
      </div>
      <div className="post-project">
          <img className="post-img" src={tanayPhoto} alt="" />
        </div>
      <div className="likes-section">
        <div className="likes-shares">
          <div className="icon">
            <IoHeartSharp className="heart-icon" />
            1.1K
          </div>
          <div className="shares">156 Shares</div>
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

