import React, { Component } from "react";
import { connect } from "react-redux";
import { saveNewQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
import { Segment, Header, Grid, Divider, Form } from "semantic-ui-react";

class AddQuestion extends Component {
  state = {
    validSubmit: false,
    option1: "",
    option2: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    const { authUser, saveNewQuestion } = this.props;
    const { option1, option2 } = this.state;

    saveNewQuestion(option1, option2, authUser);

    this.setState({ option1: "", option2: "" });
    this.setState({ validSubmit: true });
  };

  render() {
    const disabled = this.state.option1 === "" || this.state.option2 === "";

    if (this.state.validSubmit === true) {
      return <Redirect to="/" />;
    }
    return (
      <Segment.Group>
        <Header as="h3" textAlign="left" block attached="top">
          Create a New Poll
        </Header>
        <Grid padded>
          <Grid.Column>
            <p>Complete the question:</p>
            <p>
              <strong>Would you rather...</strong>
            </p>
            <Form onSubmit={this.onSubmit}>
              <Form.Input
                id="option1"
                placeholder="Enter option one..."
                value={this.state.option1}
                onChange={this.onChange}
                required
              />
              <Divider horizontal>Or</Divider>
              <Form.Input
                id="option2"
                placeholder="Enter option two..."
                value={this.state.option2}
                onChange={this.onChange}
                required
              />
              <Form.Button positive size="tiny" fluid disabled={disabled}>
                Submit
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment.Group>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};

export default connect(mapStateToProps, { saveNewQuestion })(AddQuestion);
