import React from 'react'
import profilePhoto from "../assets/images/profilepic.png";
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
          <p>paolo.ph</p>
          <p>Posted 1hr ago</p>
        </div>
      </div>
      <div className="post-text">
        <p>🏨 Capstone Project: Hotel Reservation System </p> <br />
       <p>Developed using PHP, JavaScript, and MySQL, featuring separate user and admin panels, real-time booking, admin dashboard, and secure database integration.</p>
   <p>This project enhanced my skills in web development, database management, and building real-world systems. </p>
   <br />
  <p>#CapstoneProject #WebDevelopment #PHP #MySQL #Portfolio</p>
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

