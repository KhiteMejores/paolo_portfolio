import React from 'react'
import profilePhoto from "../assets/images/profilepic.png";
import stayora from "../assets/images/stayora.png";
import { IoHeartSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

export default function stayOra() {
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
        <p>Stayora is the evolution of Tarahane — transformed into a serene and aesthetic retreat that reflects growth, creativity, and attention to detail. Inspired by modern minimalism and warm hospitality, Stayora offers an inviting atmosphere where guests can relax, recharge, and feel inspired.

Every corner is redesigned with purpose — combining elegance, comfort, and a touch of sophistication to create a truly memorable stay.</p>
        <br />
        
      <a href="https://stayora.great-site.net/">STAYORA</a>
      </div>
      <div className="post-project">
          <img className="post-img" src={stayora} alt="" />
        </div>
      <div className="likes-section">
        <div className="likes-shares">
          <div className="icon">
            <IoHeartSharp className="heart-icon" />
            5.9K
          </div>
          <div className="shares">2.1k Shares</div>
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

