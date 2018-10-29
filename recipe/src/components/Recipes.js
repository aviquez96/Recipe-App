import React from "react";

import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => (
  <div className="container">
    <div className="row">
      {recipes.map(recipe => {
        return (
          <div
            className="col-md-4"
            key={recipe.title}
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <img src={recipe.image_url} alt={recipe.title} />
              <div className="recipe__text">
                <h5 className="recipes__title">
                  {/*format title length so that it displays up to 25 characters in case its too long*/}
                  {recipe.title.length < 20
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 25)}...`}
                </h5>
                <p className="recipes__subtitle">
                  Publisher:
                  <span>{recipe.publisher}</span>
                </p>
              </div>
              <button className="recipe_buttons">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    //This is used to show the exact item when the button is pressed
                    state: { recipe: recipe.title }
                  }}
                >
                  View Recipe
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
