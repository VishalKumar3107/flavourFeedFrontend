import "./category.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import china from "./images/china.jpg";
import india from "./images/india.jpg";
import italy from "./images/italy.jpg";
import france from "./images/french.jpg";
import greek from "./images/greek.jpg";
import german from "./images/german.jpg";
import mexico from "./images/mexico.jpg";
import thai from "./images/thai.jpg";
import spain from "./images/spain.jpg";
import japan from "./images/japan.jpg";

function Category() {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const handleCuisineSelection = (cuisine) => {
    setSelectedCuisine(cuisine);
    nav(`/cuisines/${cuisine}`);
  };
  const nav = useNavigate();
  return (
    <div className="categorycontainer">
      <h1>cuisine</h1>
      <div className="card">
        <p>
          <span>ITALIAN</span>
          <img onClick={() => handleCuisineSelection("italian")} src={italy} />
        </p>
        <p>
          <span>INDIAN</span>
          <img  onClick={() => handleCuisineSelection("indian")} src={india} />
        </p>
        <p>
          <span>FRENCH</span>
          <img onClick={() => handleCuisineSelection("french")} src={france} />
        </p>
        <p>
          <span>SPANISH</span>
          <img onClick={() => handleCuisineSelection("spanish")} src={spain} />
        </p>
        <p>
          <span>GREEK</span>
          <img  onClick={() => handleCuisineSelection("greek")} src={greek} />
        </p>
        <p>
          <span>MEXICAN</span>
          <img  onClick={() => handleCuisineSelection("mexican")} src={mexico} />
        </p>
        <p>
          <span>JAPANESE</span>
          <img  onClick={() => handleCuisineSelection("japanese")} src={japan} />
        </p>
        <p>
          <span>CHINESE</span>
          <img onClick={() => handleCuisineSelection("chinese")} src={china} />
        </p>
        <p>
          <span>GERMAN</span>
          <img  onClick={() => handleCuisineSelection("german")} src={german} />
        </p>
        <p>
          <span>THAI</span>
          <img onClick={() => handleCuisineSelection("thai")} src={thai} />
        </p>
      </div>
      <div className="joinus">
        <h2>
          Join our community and
          <br /> take your love for cooking to the next level!
        </h2>
        <p>
          As a member of our recipe sharing app, you'll get exclusive access to
          a library of delicious and diverse recipes that you won't find
          anywhere else. You'll also have the ability to save your favorite
          recipes, rate and review recipes, and connect with other food
          enthusiasts through our discussion forums. Our community is passionate
          about food and we're always looking for new members to join us on this
          culinary journey. Plus, as a member, you'll receive exclusive
          discounts and promotions on our app, so you can cook up a storm
          without breaking the bank. So why wait? Sign up today and start
          exploring all the great features our app has to offer!
        </p>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text" onClick={()=>{
            nav("/register")
          }} >Signup Now</span>
        </button>
      </div>
    </div>
  );
}

export default Category;
