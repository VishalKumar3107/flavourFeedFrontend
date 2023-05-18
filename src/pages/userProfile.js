import React, { useEffect, useState } from "react";
import "../allcss/UserProfile.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../hooks/helper";

function UserProfile() {
  const { username } = useParams();
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    const fetchrecipes = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/recipes/user/${username}`
        );
        setUserRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchrecipes();
  }, []);

  const handleDeleteRecipe = async (recipeId) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/recipe/${recipeId}`
      );
      setUserRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe._id !== recipeId)
      );
    } catch (err) {
      console.log(err);
      alert("There was an error deleting the recipe. Please try again later.");
    }
  };

  return (
    <div className="profileContainer">
      <h1>Account Details</h1>
      <div className="profilebox">
        <div className="displayimage">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6543/6543505.png"
            alt="displayimg"
          />
          <h1>{username}</h1>
        </div>
        <div className="displaytext">
          <h2>Your Contributions</h2>
          {userRecipes.map((recipes) => (
            <div className="userrecipecontainer" key={recipes.id}>
              <button
                    className="deleteButton"
                    onClick={() => handleDeleteRecipe(recipes._id)}
                  >
                    {/* Delete */}
                  </button>
              <div className="carduserrecipe">
                <div className="carduserrecipeimage">
                  <img src={recipes.imageUrl} />
                </div>
                <Link to={`/recipe/${recipes._id}`}>
                  <span className="carduserrecipetitle">{recipes.name}</span>
                  <span className="carduserrecipeprice">
                    Cooking Time: {recipes.cookingTime} mins
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
