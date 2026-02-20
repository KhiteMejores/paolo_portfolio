import Navmenu from "./Navmenu";
export default function About() {
  return (
    <>
      <Navmenu />
      
      <div className="container-about">
           <div className="main_about">
                      <p>Web Developer & IT Technical Support Specialist</p>
                      <p> Jala jala, Rizal 1990 </p>
             </div>
            <div className="main_about">
              <h1>TECH SKILLS</h1>
                    <p>
                      Basic Networking (DNS, DHCP, LAN), Hardware and Software Troubleshooting, IP
                      Addressing, Router and Switch Configuration (Basic)
                      HTML, CSS, JavaScript, Native PHP, Database Management (MySQL), React JS, Laravel,
                      Figma, Responsive Web Design, Bootstrap, Tailwind CSS, Git, GitHub,
                    </p>
            </div>
             <div className="main_about">
               <h1>WORK EXPERIENCE</h1>
              <div className="head">     
                <p style={{fontWeight: "bold"}}>IT Help Desk Intern / Fusion CX - BPO</p> <p>Febuary 2025 - May 2025</p>
              </div>
                  <ul className="ul_adjust">
                    <li>Managed complaints with calm, clear communication and problem-solving.</li>
                    <li>Assisted in troubleshooting and resolving equipment malfunctions to minimize downtime.</li>
                  </ul>
            </div>
             <div className="main_about">
              <h1>PROJECTS</h1>
              <p style={{fontWeight: "bold"}}>Hotel Reservation System - (Capstone Project)</p>
              <p>Tech: PHP, JavaScript, MySQL</p>
              <ul className="ul_adjust">
                <li>Implemented separate user flows for customers and administrators to manage reservations and room availability (https://tarahane.free.nf/?i=2)</li>
              </ul>
              <br/>
              <p style={{fontWeight: "bold"}}>Tuneify – (E-commerce Web Application)</p>
              <p>Tech: PHP, JavaScript, MySQL</p>
              <ul className="ul_adjust">
                <li>Integrated PayPal payment gateway for secure online transactions and automated payment processing. (https://tuneify.42web.io/)</li>
              </ul>
              
            </div>
             <div className="main_about">
              <h1>EDUCATION</h1>
              <div className="head">
                <p>Bachelor of Science in Information Technology</p> <p>2021 - 2025</p>
              </div>
              <ul className="ul_adjust">
                <li>System Technology Institute College Tanay (BSIT)</li>
              </ul>
              <br />
              <div className="head">
                <p>Information Communication Technology</p> <p>2018 - 2021</p>
              </div>
              <ul className="ul_adjust">
                <li>System Technology Institute College Ortigas Cainta (ICT) - (SHS)</li>
              </ul>
            </div>

              
         </div>
       
    </>
  );
}
