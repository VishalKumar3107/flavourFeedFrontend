import React from "react";
import "./Footer.css";
import insta from "./instagram.png"
function Footer() {
  return (
    <div className="Footercontainer">
      <div className="c-heroImageGrid">
        <div className="containerF">
          <div className="column"></div>
          <div className="column">
            <div className="row"></div>
            <div className="row">
              <div>
                <div className="text">
                  <h6>Cooking is love made visible</h6>
                  <p>
                    We believe that good food brings people together. Join us
                    and share the joy of cooking.Cooking is not just a skill,
                    it's an art. Join our community and unleash your creativity
                    in the kitchen.Join our community and let's explore
                    together!
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
      <div className="followusoninsta"> ...follow us on instagram <img src = {insta}/> </div>
    </div>
  );
}

export default Footer;
