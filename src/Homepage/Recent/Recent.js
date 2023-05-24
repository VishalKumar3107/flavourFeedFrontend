import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useGetUserID } from "../../../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import axios from "axios";
import { BASE_URL } from "../../../hooks/helper";

export default function Recent() {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/recipes`);
        setRecipes(response.data.slice(0,10));
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/savedRecipes/ids/${userID}`
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
        `${BASE_URL}/recipes`,
        {
          recipeID,
          userID,
        },
        { headers: { Authorization: cookies.access_token } }
      );
      setSavedRecipes(response.data.savedRecipes);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes && savedRecipes.includes(id);

  return (
    <div className="recipedisplaycontainer">
    <h1>Recipes</h1>
    <div class="map-container">
      {recipes.map((recipe) => (
        <div className="card" key={recipe._id}>
            <div className="img">
            <img src={recipe.imageUrl} alt={recipe.name} />
            </div>
            <span>{recipe.name}</span>
            <p className="info">
            {recipe.instructions}
            </p>
            <div className="share">
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
            </div>
            <button
              onClick={() => saveRecipe(recipe._id)}
              disabled={isRecipeSaved(recipe._id)}
            >
              {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
            </button>
          </div>
      ))}
    </div>
  </div>
  );
}
