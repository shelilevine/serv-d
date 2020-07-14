import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/home";
import AllRecipesView from "./components/allRecipesView";
import SingleRecipe from "./components/singleRecipe";
import SignUp from "./components/SignUp";
import SavedRecipes from "./components/SavedRecipes";

/**
 * COMPONENT
 */
export class Routes extends Component {
  render() {
    const {
      appState,
      setUser,
      saveRecipe,
      removeRecipe,
      setSearchResults,
    } = this.props;
    const isLoggedIn = !!this.props.appState.user.id;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route
          path="/search"
          render={() => (
            <AllRecipesView
              user={appState.user}
              savedRecipes={appState.savedRecipes}
              search={appState.search}
              saveRecipe={saveRecipe}
              removeRecipe={removeRecipe}
              setSearchResults={setSearchResults}
            />
          )}
        />
        <Route
          path="/single-recipe"
          render={() => (
            <SingleRecipe
              appState={appState}
              saveRecipe={saveRecipe}
              removeRecipe={removeRecipe}
            />
          )}
        />
        <Route
          path="/login"
          render={(setUser) => <Login setUser={this.props.setUser} />}
        />
        <Route
          path="/signup"
          render={(setUser) => <SignUp setUser={this.props.setUser} />}
        />
        {/* <Route
          path="/saved"
          render={() => <SavedRecipes recipes={appState.savedRecipes} />}
        /> */}

        <Route exact path="/" component={Home} />
        {isLoggedIn && (
          <Switch>
            <Route
              path="/saved"
              render={() => <SavedRecipes recipes={appState.savedRecipes} />}
            />
            {/* <Route
              path="/saved"
              render={() => <Login recipes={this.props.appState.savedRecipes} />}
            /> */}
            {/* Routes placed here are only available after logging in */}
            {/* <Route path="/home" component={UserHome} /> */}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Home} />
      </Switch>
    );
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))
export default withRouter(Routes);

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
