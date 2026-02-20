import React from 'react'
import profilePhoto from "../assets/images/profilepic.png";
import tuneify from "../assets/images/tuneify.png";
import { IoHeartSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

export default function tuneifyPost() {
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
        <p>  🛒 Tuneify – E-commerce Website Project</p><br />
        <p>Developed an e-commerce website using PHP, JavaScript, and MySQL, with product listings, secure checkout, and PayPal payment integration.</p>
        <p>This project improved my skills in web development, payment integration, and database management. 💻</p>
        <br />
        <p>#Ecommerce #WebDevelopment #PHP #MySQL #Tuneify #Portfolio</p>
      <a href="https://tuneify.42web.io/">https://tuneify.42web.io/</a>
      </div>
      <div className="post-project">
          <img className="post-img" src={tuneify} alt="" />
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

