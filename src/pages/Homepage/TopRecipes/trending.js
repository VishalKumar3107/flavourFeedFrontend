import "./recipe.css";
import add from "./icons/add.png";
import manage from "./icons/manage.png";
import nutrition from "./icons/nutrition.png";
import plan from "./icons/plan.png";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Trending() {
  const [lastfive, setLastfive] = useState([]);
  const [lastten, setLastten] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/recipes");
      setLastfive(response.data.slice(-5));
      setLastten(response.data.slice(-10, -5));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="trendingcontainer">
      <div className="trendingbox">
        <div className="services">
          <div className="servicerow">
            <div className="servicess">
              <p className="sevicetitle">ADD YOUR RECIPE</p>
              <img src={add} />
              <p className="sevicedescription">
                Share your favorite recipes with the community and get inspired
                by other users' creations.
              </p>
            </div>
            <div className="servicess">
              <p className="sevicetitle">MANAGE YOUR RECIPE</p>
              <img src={manage} />
              <p className="sevicedescription">
                Keep all your recipes in one place, easily accessible from your
                device, and never forget your go-to meals.
              </p>
            </div>
            <div className="servicess">
              <p className="sevicetitle">PLAN YOUR MEAL</p>
              <img src={plan} />
              <p className="sevicedescription">
                Create a weekly meal plan to help you stay organized and save
                time grocery shopping.
              </p>
            </div>
            <div className="servicess">
              <p className="sevicetitle">GET NUTRITION CONTENT</p>
              <img src={nutrition} />
              <p className="sevicedescription">
                Monitor your calorie intake, track your macros, and make
                informed choices about your diet with our nutrition information.
              </p>
            </div>
          </div>
          <h1>trending recipes...</h1>
          <div className="trendingrecipes">
            <motion.div className="reciperowone">
              {lastfive.map((recipe) => (
                <div class="cardone" key={recipe._id}>
                  <div className="icon">
                    <img src={recipe.imageUrl} />
                  </div>
                  <Link to={`/recipe/${recipe._id}`}><span>{recipe.name}</span></Link>
                </div>
              ))}

              <Link to={'/auth'}><div class="cardonelogin">
                <strong>LOGIN</strong>
                {/* <span>Or Signup</span> */}
              </div></Link>
            </motion.div>

            <div className="reciperowone">
            <Link to={'/auth'}><div class="cardonelogin">
                <strong>SIGNUP</strong>
                {/* <span>Or Login</span> */}
              </div></Link>
            {lastten.map((recipe) => (
                <div class="cardone" key={recipe._id}>
                  <div className="icon">
                    <img src={recipe.imageUrl} />
                  </div>
                  <Link to={`/recipe/${recipe._id}`}><span>{recipe.name}</span></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
