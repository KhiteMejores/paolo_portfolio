import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineFilterAlt } from "react-icons/md";
import PostSection from './postSection';



export default function Post() {
  return (
    <div className="main-container">
      <div className="container-post">
        <div className="profile-left">
          <div className="intro">
            <h3>Intro</h3>
            <p>
              Proficient in working
              with front-end libraries like React and Bootstrap to create
              dynamic user interfaces. Passionate about learning new
              technologies, with a strong commitment to continuous improvement
              and problem-solving.{" "}
            </p>
            <div className="horizontal-line"></div>

            <div className="information">
              <div>
                <IoInformationCircleOutline /> Digital Creator | Web Developer
              </div>
              <div>
                <BsTelephoneFill /> +63 960 451 2203
              </div>
              <div>
                <TfiEmail /> paolomejores4@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="post-right">
          <div className="post-filter">
            <p>Posts</p>
            <button>
              <div className="filter-icon">
                <MdOutlineFilterAlt />
              </div>
              <div> Filters</div>
            </button>
          </div>
       
         <PostSection></PostSection>
         <PostSection></PostSection>
         <PostSection></PostSection>
         <PostSection></PostSection>
      
       
        </div>
      </div>
    </div>
  );
}
