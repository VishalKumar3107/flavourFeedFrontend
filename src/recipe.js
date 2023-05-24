import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../allcss/recipe.css";
import { BASE_URL } from "../hooks/helper";

const RecipeDetail = () => {
  const nav = useNavigate();

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const handleDeleteRecipe = () => {
      axios.delete(`${BASE_URL}/recipes/${id}`);
      nav('/');
  }
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/recipes/${id}`);
        setRecipe(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }


  return (
    <div className="recipecontainer">
      <h1>{recipe.name}</h1>
      {/* <button onClick={handleDeleteRecipe}>Delete</button> */}
      <div className="containerrecipebox">
        <div className="article-1"><img src={recipe.imageUrl} alt="foodimage"/></div>
        <div className="a-Rl5RG-0">
          <div>Published By: {recipe.userOwner.username}</div>
          <div>Preperation Time: {recipe.cookingTime} minutes</div>
          <div style={{marginTop:'40px'}}>
            <h4>Ingredients Requiered</h4>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
        </div>
        <div className="article-7">
          <h4>Instructions</h4>
          {recipe.description.split(/\.\s*/).map((sentence, index) => (
            <li key={index}>{sentence.trim()}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
