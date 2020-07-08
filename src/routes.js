import React, { Component } from "react";
// import {connect} from 'react-redux'
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import PropTypes from "prop-types";
// import {me} from './store'
import Login from "./components/Login";

/**
 * COMPONENT
 */
export class Routes extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      savedRecipes: [],
    };
    this.setUser = this.setUser.bind(this);
  }
  componentDidMount() {
    // this.props.loadInitialData()
    //NOTE: getUser if logged in
    //NOTE: getSavedRecipes if logged in
  }

  setUser(user) {
    this.setState({ user });
  }

  render() {
    const { isLoggedIn } = !!this.state.user.id;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        {/* <Route path="/login" component={Login} setUser={this.setUser}/> */}
        <Route
          path="/login"
          render={(setUser) => <Login setUser={this.setUser} />}
        />
        {/* <Route path="/signup" component={Signup} /> */}
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            {/* <Route path="/home" component={UserHome} /> */}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
// Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
// Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

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
