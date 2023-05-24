import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Slide from "./Slides/slides";
import { BASE_URL } from "../../../hooks/helper";

function Hero() {
  const [newList, setNewList] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`${BASE_URL}/recipes`);
    const data = await response.json();
    setNewList(data);
  };

  const filteredList = newList.filter((recipe) => {
    return (
      searchRecipe === "" ||
      recipe.name.toLowerCase().includes(searchRecipe.toLowerCase())
    );
  });

  return (
    <>
      <div className="Herocontainer">
        <div className="herobox">
          <div className="boxleft">
            <div className="boxleftcontainer">
              <div className="titleleftone">COOKING IS AN ART</div>
              <div className="titleleftthree">
                <p>
                  Are you tired of cooking the same meals over and over again?
                  Do you want to discover new and exciting recipes to try out in
                  your kitchen? Look no further than our recipe sharing app! Our
                  app is designed for foodies who want to discover and share
                  their favorite recipes with others. With a user-friendly
                  interface and a vast database of recipes, you'll never run out
                  of meal ideas again.
                </p>
              </div>
              <div className="titlelefttwo">
                Discover Delicious Recipes with Us
              </div>
              <input
                type="text"
                name="text"
                className="inputsearchhero"
                onChange={(e) => setSearchRecipe(e.target.value)}
                placeholder="Search a recipe..."
              />
              {searchRecipe !== "" && (
               <div className="suggestionsearch">
               {filteredList.length > 0 ? (
                 filteredList.map((recipe) => (
                   <div key={recipe._id} className="suggestion-item">
                     <Link to={`/recipe/${recipe._id}`}>
                       <p>{recipe.name}</p>
                     </Link>
                   </div>
                 ))
               ) : (
                 <p className="suggestion-item">Not found</p>
               )}
             </div>
             
              )}
            </div>
          </div>
          <div className="boxright">
            <div className="containerSlides">
              <Slide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
