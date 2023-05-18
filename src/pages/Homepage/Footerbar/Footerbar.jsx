import React from "react";
import "./Footerbar.css";
import top from "./threeimage.png";
import bottom from "./footerback.png";
import fb from "./socialicons/facebook.png";
import twi from "./socialicons/twitter.png";
import git from "./socialicons/github.png";
import li from "./socialicons/linkedin.png";
import { Link, useNavigate } from "react-router-dom";

function Footerbar() {
  const nav = useNavigate();
  const hadleclick=()=>{
    nav("/create");
  }
  return (
    <div className="footerbarcontainer">
      <div className="footerbarbox">
        <div className="footerboxtop">
          <div className="footerbarimage">
            <img src={top} />
          </div>
          <div className="footerbartext">
            <h2>PUBLISH YOUR RECIPE FOR FREE TODAY</h2>
            <p>
              Join our community of food lovers and discover new recipes every
              day.
            </p>
            <a className="fancy" href="#">
              <span className="top-key"></span>
              <span className="text" onClick={hadleclick}>Submit Recipe</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-basic">
        <div className="social">
          <a href="https://fb.com/kumar.vishal.3107">
            <img src={fb} />
          </a>
          <a href="https://twitter.com/kumarvishal3107">
            <img src={twi} />
          </a>
          <a href="https://github.com/VishalKumar3107">
            <img src={git} />
          </a>
          <a href="https://linkedin.com/in/vishal31">
            <img src={li} />
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to={'/'}>HOME</Link>
          </li>
          <li className="list-inline-item">
          <Link to={'/about'}>ABOUT</Link>
          </li>
          <li className="list-inline-item">
          <Link to={'/contact'}>CONTACT</Link>
          </li>
        </ul>
        <p className="copyright">flavourfeed © 2023</p>
      </div>
    </div>
  );
}

export default Footerbar;
