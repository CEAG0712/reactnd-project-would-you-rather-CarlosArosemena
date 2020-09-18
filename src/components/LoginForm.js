import React, { Component } from "react";
import { Form, Header } from "semantic-ui-react";

const optionTest = [
  {
    key: 1,
    text: "sample1",
    value: "sample1",
  },
  {
    key: 2,
    text: "sample2",
    value: "sample2",
  },
];

class LoginForm extends Component {
  render() {
    return (
      <Form>
        <Header as="h2" color="blue">
          Sign In
        </Header>
        <Form.Dropdown
          placeholder="Please select your user"
          fluid
          selection
          scrolling
          options={optionTest}
        />
      </Form>
    );
  }
}

export default LoginForm;
