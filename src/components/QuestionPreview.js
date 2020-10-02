import React, { Component, Fragment } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class QuestionPreview extends Component {
  state = {
    redirectToQuestion: false,
  };

  handleViewQuestion = () => {
    this.setState((prevState) => ({
      redirectToQuestion: !prevState.redirectToQuestion,
    }));
  };

  render() {
    const { question, unanswered } = this.props;
    const buttonContent = unanswered === true ? "Answer Poll" : "Results";
    const { redirectToQuestion } = this.state;

    if (redirectToQuestion === true) {
      return <Redirect push to={`/questions/${question.id}`} />;
    }

    return (
      <Fragment>
        <Header as="h5" textAlign="left">
          Would you rather
        </Header>

        <p style={{ textAlign: "center" }}>
          {question.optionOne.text}
          <br />
          or...
        </p>
        <Button
          className="ui primary basic button"
          size="tiny"
          fluid
          onClick={this.handleViewQuestion.bind(this, question.id)}
          content={buttonContent}
        />
      </Fragment>
    );
  }
}

export default QuestionPreview;
