import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import "../allcss/displayrecipe.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../hooks/helper";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/recipes`);
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/recipes",
        {
          recipeID,
          userID,
        },
        { headers: { Authorization: cookies.access_token } }
      );
      setSavedRecipes(response.data.savedRecipes);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes &&  savedRecipes.includes(id);

  return (

    <div className="recipedisplaycontainer">
      <h1>Recipes</h1>
      <div class="map-container">
        {recipes.map((recipe) => (
          <motion.div className="cardrecipe" key={recipe._id} whileHover={{ scale: [null, 1.3, 1.2] }}
          transition={{ duration: 0.3 }}>
            <div className="img">
              <img src={recipe.imageUrl} alt={recipe.name} />
            </div>
            <div className="namecontent">
              <span>{recipe.name}</span>
              <p className="inforecipes">{recipe.instructions}</p>
            </div>
            <div className="share">
              <p>Cooking Time: {recipe.cookingTime} minutes</p>
            </div>
            <div className="buttonoptions">
              <button
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                {isRecipeSaved(recipe._id) ? (
                  <FontAwesomeIcon className="saved" icon={faHeart} />
                ) : (
                  <FontAwesomeIcon className="saved" icon={faHeart} />
                )}
              </button>
              <Link to={`/recipe/${recipe._id}`}>
                <button>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
