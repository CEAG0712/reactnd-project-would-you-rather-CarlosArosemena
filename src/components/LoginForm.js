import React, { Component } from "react";
import { Form, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";

class LoginForm extends Component {
  state = {
    value: "",
  };

  onChange = (e, { value }) => {
    this.setState({ value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { setAuthUser } = this.props;
    const authUser = this.state.value;
    setAuthUser(authUser);
  };

  optionsDropDown = () => {
    const { users } = this.props;

    return users.map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    }));
  };

  render() {
    const { value } = this.state;
    const disabled = value === "" ? true : false;

    return (
      <Form onSubmit={this.onSubmit}>
        <Header as="h2" color="blue">
          Sign In
        </Header>
        <Form.Dropdown
          placeholder="Please select your user"
          fluid
          selection
          scrolling
          options={this.optionsDropDown()}
          value={value}
          onChange={this.onChange}
        />
        <Form.Button content="Login" positive disabled={disabled} fluid />
      </Form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps, { setAuthUser })(LoginForm);
