import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from './CreateUser';
import ListUsers from './ListUsers';

class App extends Component {
  state = {
    items: [],
  };
  
  addItem = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item] }));
  };

  userExist = (usrID) => {
    const result = this.state.items.filter(item => item[0] === usrID);
    return result.length > 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <CreateUser onAddItem={this.addItem} userExist={this.userExist}/>
        <ListUsers items={this.state.items} />
      </div>
    );
  }
}

export default App;
