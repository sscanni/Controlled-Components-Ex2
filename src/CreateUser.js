import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class CreateUser extends React.Component {
  state = {
    userid: '',
    first: '',
    last: '',
  };

  userChange = event => {
    this.setState({ userid: event.target.value });
  };
  firstChange = event => {
    this.setState({ first: event.target.value });
  };
  lastChange = event => {
    this.setState({ last: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    if (!this.props.userExist(this.state.userid)) {
        let item = []
        item.push(this.state.userid)
        item.push(this.state.first)
        item.push(this.state.last)
        console.log(item);
        this.props.onAddItem(item);
    }
  };

  inputIsEmpty = () => {
    return this.state.userid === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <label for="userID">User ID:</label>
          <input
            id="userID"
            type="text"
            placeholder="Enter UserID"
            value={this.state.userid}
            onChange={this.userChange}
          />
          <label for="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter First Name"
            value={this.state.first}
            onChange={this.firstChange}
          />
          <label for="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter Last Name"
            value={this.state.last}
            onChange={this.lastChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}

CreateUser.propTypes = {
  onAddItem: PropTypes.func.isRequired,
  userExist: PropTypes.func.isRequired,
};
export default CreateUser;