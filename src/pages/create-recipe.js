import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import "../allcss/createrecipe.css";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { BASE_URL } from "../hooks/helper";

export const CreateRecipe = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: '',
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleCuisineChange = (e) => {
    setRecipe({
      ...recipe,
      cuisines: Array.from(e.target.selectedOptions, (option) => option.value),
    });
  };

  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `${BASE_URL}/recipes`,
        recipe,
        // { ...recipe },
        {
          headers: { Authorization: cookies.access_token },
        }
      );

      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="createRecipecontainer">
      <h1>Create Recipe</h1>
      <div className="recipe-box">
        <form onSubmit={handleSubmit}>
          <div className="user-box-select">
            <label htmlFor="cuisines">Cuisines</label>
            <select
              multiple
              id="cuisines"
              name="cuisines"
              value={recipe.cuisines}
              onChange={handleCuisineChange}
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            >
              <option class="select-option" value="indian">
                Indian
              </option>
              <option class="select-option" value="italian">
                Italian
              </option>
              <option class="select-option" value="french">
                French
              </option>
              <option class="select-option" value="spanish">
                Spanish
              </option>
              <option class="select-option" value="greek">
                Greek
              </option>
              <option class="select-option" value="thai">
                Thai
              </option>
              <option class="select-option" value="german">
                German
              </option>
              <option class="select-option" value="mexican">
                Mexican
              </option>
              <option class="select-option" value="chinese">
                Chinese
              </option>
              <option class="select-option" value="japanese">
                Japanese
              </option>
            </select>
          </div>

          <div className="user-box">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={recipe.name}
              onChange={handleChange}
            />
          </div>
          <div className="user-box">
            <label htmlFor="description">Instructions</label>
            <input
              id="description"
              name="description"
              value={recipe.description}
              onChange={handleChange}
            />
          </div>
          <div className="user-boxi">
            <label htmlFor="ingredients">Ingredients</label>
            {recipe.ingredients.map((ingredient, index) => (
              <input
                key={index}
                type="text"
                name="ingredients"
                value={ingredient}
                onChange={(event) => handleIngredientChange(event, index)}
              />
            ))}
            <button
              className="addingredient"
              type="button"
              onClick={handleAddIngredient}
            >
              <FontAwesomeIcon className="formicon" icon={faSquarePlus} />
            </button>
          </div>
          <div className="user-box">
            <label htmlFor="instructions">Description</label>
            <input
              id="instructions"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
            />
          </div>
          <div className="user-box">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={recipe.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className="user-box">
            <label htmlFor="cookingTime">Cooking Time (minutes)</label>
            <input
              type="number"
              id="cookingTime"
              name="cookingTime"
              placeholder="in minutes"
              value={recipe.cookingTime}
              onChange={handleChange}
            />
          </div>
          <center>
            <button type="submit">
              Create Recipe
              <span></span>
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};
