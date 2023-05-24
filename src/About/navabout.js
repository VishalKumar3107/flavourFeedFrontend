import React from "react";
import "./navabout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faCirclePlus,
  faFileCircleExclamation,
  faFileCirclePlus,
  faHeart,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

function Navabout() {
  return (
    <div className="navaboutcontainer">
      <div className="blocks">
        <a href="#" className="block" style={{ "--bg": "var(--gradient-6)" }}>
          <div className="block__item">
            <FontAwesomeIcon className="iconnavone" icon={faFileCirclePlus} />
            <span>
              ADD
              <br />
              RECIPES
            </span>
          </div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-7)" }}>
          <div className="block__item">
            <FontAwesomeIcon className="iconnavone" icon={faListCheck} />
            <span>
                SAVE<br/>RECIPES
            </span>
          </div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-8)" }}>
          <div className="block__item">
            <FontAwesomeIcon
              className="iconnavone"
              icon={faFileCircleExclamation}
            />
            <span>
                MANAGE<br/>RECIPES
            </span>
          </div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-9)" }}>
          <div className="block__item">
            <FontAwesomeIcon className="iconnavone" icon={faBowlFood} />
            <span>
                PLAN<br/>MEAL
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navabout;
