import React from "react";

const API_KEY = "830adea4b658a39638354aca45a79f23";

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
        </div>
      </div>
    );
  }
}

export default Recipe;
