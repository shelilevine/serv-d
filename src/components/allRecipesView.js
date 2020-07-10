import axios from "axios";
import React from "react";
import RecipeCard from "./RecipeCard";

export default class AllRecipesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: this.props.location.state.ingredient,
      recipes: [],
    };
  }

  async componentDidMount() {
    const ingredient = this.state.ingredient;
    const { data } = await axios.get("http://localhost:8080/api/recipes", {
      params: {
        ingredients: ingredient,
      },
      withCredentials: false,
    });
    this.setState({ recipes: data });
  }

  render() {
    return <RecipeCard recipes={this.state.recipes} />;
  }
}
