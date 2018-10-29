import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Recipes from "./components/Recipes";

// const API_KEY = "830adea4b658a39638354aca45a79f23";
const API_KEY = "aedbb2d845263a9cad4857bcec585195";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async event => {
    const recipeName = event.target.elements.recipeName.value;
    // Prevent default refreshing behavior from the webpage
    event.preventDefault();
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`
    );

    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes: recipes });
  };

  // This will be executed once the component is updated, which is when the state changes
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
