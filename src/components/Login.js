import React, { Component, Fragment } from "react";
import {
  LoginHeader,
  LoginGridLayout,
} from "../components/ui-elements/LoginSubElements";
import { Segment } from "semantic-ui-react";
import LoginForm from "./LoginForm";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <Segment.Group>
          <LoginHeader />
          <LoginGridLayout form={<LoginForm />} />
        </Segment.Group>
      </Fragment>
    );
  }
}

export default Login;
