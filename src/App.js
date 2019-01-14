import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from './CreateUser';
import ErrorMessage from './ErrorMessage';
import ListUsers from './ListUsers';

class App extends Component {
  state = {
    items: [],
    shouldHide: "hidden",
  };
  
  addItem = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item] }));
  };

  setErrorMsg = showFlag => {
    if (showFlag) {
      this.setState({ shouldHide: "" });
    } else {
      this.setState({ shouldHide: "hidden" });
    }
  };

  userExist = (usrID) => {
    const result = this.state.items.filter(item => item.userid === usrID);
    return result.length > 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <CreateUser onAddItem={this.addItem} userExist={this.userExist} setErrorMsg={this.setErrorMsg}/>
        <ErrorMessage shouldHide={this.state.shouldHide} />
        <ListUsers items={this.state.items} />
      </div>
    );
  }
}

export default App;
