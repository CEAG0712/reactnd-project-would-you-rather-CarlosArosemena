import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Header, Button, Form, Radio } from "semantic-ui-react";
import { saveAnswerToQuestion } from "../actions/users";

class Question extends Component {
  state = {
    value: "",
  };

  onChange = (e, { value }) => this.setState({ value });

  onSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    console.log("Value " + value);
    if (value !== "") {
      const { authUser, question, saveAnswerToQuestion } = this.props;
      saveAnswerToQuestion(authUser, question.id, value);
    }
  };

  render() {
    const { question } = this.props;
    const { value } = this.state;

    const disabled = this.state.value === "" ? true : false;
    return (
      <Fragment>
        <Header as="h4">Would you rather</Header>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <Radio
              label={question.optionOne.text}
              name="radioGroup"
              value="optionOne"
              checked={value === "optionOne"}
              onChange={this.onChange}
            />
            <br />
            <Radio
              label={question.optionTwo.text}
              name="radioGroup"
              value="optionTwo"
              checked={value === "optionTwo"}
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <Button
              color="green"
              size="tiny"
              fluid
              positive
              disabled={disabled}
              content="Submit"
            />
          </Form.Field>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};

export default connect(mapStateToProps, { saveAnswerToQuestion })(Question);
