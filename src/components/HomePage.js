import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import { questionPanes } from "../components/ui-elements/HomePageSubElements";

class HomePage extends Component {
  render() {
    const { questionObject } = this.props;
    console.log(questionObject);
    return <Tab panes={questionPanes({ questionObject })} className="tab" />;
  }
}

const mapStateToProps = ({ authUser, users, questions }) => {
  const answeredIds = Object.keys(users[authUser].answers);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    questionObject: {
      answered,
      unanswered,
    },
  };
};

export default connect(mapStateToProps)(HomePage);
