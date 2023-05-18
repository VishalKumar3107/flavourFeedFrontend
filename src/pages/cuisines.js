import React, { useEffect, useState } from "react";
import "../allcss/cuisines.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../hooks/helper";

function Cuisines() {
  const { cuisine } = useParams();
  const [indian, setIndian] = useState([]);
  useEffect(() => {
    const fetchIndian = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/recipes/cuisines/${cuisine}`
        );
        setIndian(response.data);
        // console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchIndian();
  }, []);
  return (
    <div className="Cuisinecontainer">
      <div className="recipesfromcuisines">
        <h1 style={{ marginBottom: "90px" }}>{cuisine} Cuisines</h1>
        {indian.length === 0 ? (
          <h3>No recipess found for {cuisine} cuisine.</h3>
        ) : (
          indian.map((recipe) => (
            <Link to={`/recipe/${recipe._id}`}>
            <div className="cuisinesbox" key={recipe._id}>
              <div className="article-0-1">
                <img src={recipe.imageUrl} />
              </div>
              <div className="article-1">
                  <h2>{recipe.name}</h2>
                  <h4>{recipe.instructions}</h4>
              </div>
            </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Cuisines;
