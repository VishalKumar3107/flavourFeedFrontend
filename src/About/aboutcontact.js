import React from "react";
import "./aboutcontact.css"

function Aboutcontact() {
  return (
    <div className="Aboutcontactbox">
      <form className="formContact">
        <h2 className="abouthead">CONTACT US</h2>
        <p className="aboutpara" type="Email:">
          <input placeholder="Let us know how to contact you back.."></input>
        </p>
        <p  className="aboutpara" type="Message:">
          <input placeholder="What would you like to tell us.."></input>
        </p>
        <button className="contactsend">Send Message</button>
        <div className="aboutcontactdetails">
          <span className="fa fa-phone"></span>898 127 1157
          <span className="fa fa-envelope-o"></span> flavourfeed@info.com
        </div>
      </form>
    </div>
  );
}

export default Aboutcontact;
