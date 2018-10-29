import React from "react";
import { Link } from "react-router-dom";

// const API_KEY = "830adea4b658a39638354aca45a79f23";
const API_KEY = "aedbb2d845263a9cad4857bcec585195";

// This class will have some properties (props) inherent from the react router
class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };

  // gets fired as soon as "Recipe" component loads/mounts on the screen
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  };

  render() {
    const recipe = this.state.activeRecipe;

    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span> {recipe.publisher} </span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
