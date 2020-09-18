import React, { Component } from "react";
import "./App.css";
import { MainGrid } from "./components/ui-elements/MainGrid";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import Login from "./components/Login";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <div className="App">
        <MainGrid>
          <Login />
        </MainGrid>
      </div>
    );
  }
}

export default connect(null, { handleInitialData })(App);
