import React from 'react';
import './App.css';

  class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shouldHideGames: false};

    // This binding is necessary to make `this` work in the callback
    this.toggleButton = this.toggleButton.bind(this);
  }
  toggleButton() {
    console.log("clicked")
    this.setState({ shouldHideGames: !this.state.shouldHideGames });
  }
  render() {
      return (
      <div>
        <hr></hr>
        <h2 className="items">Player List</h2>
        <button onClick={this.toggleButton}>{this.state.shouldHideGames ? 'Show the Number of Games Played' : 'Hide the Number of Games Played'}</button>
        <table className="item-list">
        <tbody>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th className={this.state.shouldHideGames ? 'hidden' : ''}>Games Played</th>
        </tr>
          {this.props.items.map((item, index) => <tr key={index}>
              <td>{ item.userid }</td>
              <td>{ item.first }</td>
              <td>{ item.last }</td>
              <td className={this.state.shouldHideGames ? 'hidden' : ''}>{ item.games }</td>
          </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ListUsers;