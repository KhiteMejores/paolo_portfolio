import React from "react";
import Navmenu from "./Navmenu";
export default function WorkMe() {
  return (
    
    <>
      <Navmenu></Navmenu>
    
  <div class="container_contact">
  <div class="card">
    <h1>Contact Me</h1>
    <p className="fill_up">Fill up the form below to send us a message.</p>
    <form action="https://api.web3forms.com/submit" method="POST" id="form">
      <input type="hidden" name="access_key" value="7ae79254-0ed9-454c-b0f0-7d3cc0d33ee5" />
      <input type="hidden" name="subject" value="New Submission from Web3Forms" />
    

      <label for="name">Full Name</label>
      <input type="text" name="name" id="name" placeholder="John Doe" required />

      <label for="email">Email Address</label>
      <input type="email" name="email" id="email" placeholder="you@company.com" required />

      <label for="phone">Phone Number</label>
      <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required />

      <label for="message">Your Message</label>
      <textarea rows="5" name="message" id="message" placeholder="Your Message" required></textarea>

      <button className="button_contact" type="submit">Send Message</button>
      <p id="result"></p>
    </form>
  </div>
</div>
    </>
    
  );
}


