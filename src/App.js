import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { MainGrid } from "./components/ui-elements/MainGrid";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import Login from "./components/Login";
import NavBar from "./components/ui-elements/NavBar";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authUser === null ? (
            <Route
              render={() => (
                <MainGrid>
                  <Login />
                </MainGrid>
              )}
            />
          ) : (
            <Fragment>
              <NavBar />
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};

export default connect(mapStateToProps, { handleInitialData })(App);
