import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import Highlight from "./../assets/images/forest1.jpg";
import Highlight2 from "./../assets/images/mycat.jpg";
import Highlight3 from "./../assets/images/forest2.jpg";
import friend3 from "../assets/images/billgates.webp";
import { BsTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineFilterAlt } from "react-icons/md";
import PostSection from "./postSection";
import friend1 from "../assets/images/MarkZuckerberg.jpg";
import friend2 from "../assets/images/elon-musk-ap-5.webp";
import TuneifyPost from "./tuneify";
import Network from "./network";
import StayOra from "./stayora";
export default function Post() {
  return (
    <div className="main-container">
      <div className="container-post">
        <div className="profile-left">
          <div className="intro">
              <h3>Intro</h3>
              <p>
              Hello, I am an IT professional with knowledge in IT Technical Support and Web Development. I have experience troubleshooting technical issues and building web applications using PHP, JavaScript, MySQL, HTML, and CSS. I am passionate about technology and eager to apply my skills to support users and develop efficient systems.{" "}
              </p>
              <div className="horizontal-line"></div>

                <div className="information">
                  <div>
                    <IoInformationCircleOutline /> Digital Creator | Web Developer
                  </div>
                  <div>
                    <BsTelephoneFill /> +63 968 600 2545
                  </div>
                  <div>
                    <TfiEmail /> paolomejores4@gmail.com
                  </div>
                </div>
          </div>

          <div className="Highlights">
              <p style={{color: "white"}}>Highlights</p>
              <div className="highLights_img">
                  <img src={Highlight} alt="" />
                  <img src={Highlight2} alt="" />
                 <img src={Highlight3} alt="" />
                   <img src={Highlight2} alt="" />
              </div>
          </div>

          <div className="friends">
                 <div className="friends_p">Friends</div>
                 <div className="friend_list">
                      <div><img src={friend1} alt="Friend 1" />
                      <p>Mark Zuckerberg</p>
                      </div>
                       <div><img src={friend2} alt="Friend 2" />
                      <p>Elon Musk</p>
                      </div>
                      <div><img src={friend3} alt="Friend 3" />
                      <p>Bill Gates</p>
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
         
        
         <PostSection/>
         <StayOra/>
         <TuneifyPost/>
         <Network/>
       
        </div>
      </div>
    </div>
  );
}
