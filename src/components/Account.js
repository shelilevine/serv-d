import React from 'react';
import ViewAccountForm from './ViewAccountForm';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// const serverUrl =
//   "https://cors-anywhere.herokuapp.com/https://servdapi.herokuapp.com/api/auth";
// const serverUrl = 'https://servdapi.herokuapp.com/api/auth'
const serverUrl = 'http://localhost:8080/api/auth';

export class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    console.log('handle change Account');
    console.log('HANDLE CHANGEprops', this.props.appState.user);
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      const { data } = await axios.get(serverUrl, this.state);
      console.log('this is data', data);
    } catch (err) {
      console.log('HELLOOOOOO', err);
    }
  }

  render() {
    console.log('this props is render Account', this.props);
    console.log('this state is render account', this.state);
    return (
      <ViewAccountForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        state={this.state}
        user={this.props.appState.user}
      />
    );
  }
}

export default withRouter(Account);
