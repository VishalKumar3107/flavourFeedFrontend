import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../allcss/savedrecipe.css"
import { BASE_URL } from "../hooks/helper";

export const SaveRecipe = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (
<div className="savedContainer">
<h1>Saved Recipes</h1>
{savedRecipes.map((recipe) => (
    <motion.div className="containerS" key={recipe._id} initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:
    0.6}} >
      <div className="product-details">
        <h1>{recipe.name}</h1>
        <p>Prepration Time: {recipe.cookingTime} minutes</p>
        <p className="information">"{recipe.description}"</p>
        <div className="control">
        <Link to={`/recipe/${recipe._id}`}>
          <button className="btn">
            <span className="buy">View Recipe</span>
          </button>
          </Link>
        </div>
      </div>
      <div className="product-image">
        <img
          src={recipe.imageUrl} alt={recipe.name}
        />
        <div className="info">
          <h2>Ingredients</h2>
          <ul>
          {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                      {ingredient}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </motion.div>
    ))}
    </div>
  );
};
