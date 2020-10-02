import React, { Component } from "react";
import Question from "./Question";
import QuestionPreview from "./QuestionPreview";
import { Segment, Header, Grid, Image } from "semantic-ui-react";
import PollResult from "./PollResult";
import { connect } from "react-redux";

const viewTypes = {
  QUESTION_PREVIEW: "QUESTION_PREVIEW",
  QUESTION: "QUESTION",
  POLL_RESULT: "POLL_RESULT",
};

const QuestionContent = (props) => {
  const { viewType, question, unanswered } = props;

  switch (viewType) {
    case viewTypes.QUESTION_PREVIEW:
      return <QuestionPreview question={question} unanswered={unanswered} />;
    case viewTypes.QUESTION:
      return <Question question={question} />;
    case viewTypes.POLL_RESULT:
      return <PollResult question={question} />;
    default:
      return;
  }
};

class QuestionCard extends Component {
  render() {
    const { author, question, viewType, unanswered = null } = this.props;
    console.log(viewType);
    return (
      <Segment.Group>
        <Header as="h5" textAlign="left" block attached="top">
          {author.name} asks:
        </Header>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={author.avatarURL} />
            </Grid.Column>
            <Grid.Column width={11}>
              <QuestionContent
                viewType={viewType}
                question={question}
                unanswered={unanswered}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

function mapStateToProps(
  { users, questions, authUser },
  { match, question_id }
) {
  let question,
    author,
    viewType,
    badPath = false;

  if (question_id !== undefined) {
    question = questions[question_id];
    author = users[question.author];
    viewType = viewTypes.QUESTION_PREVIEW;
  } else {
    const { question_id } = match.params;
    question = questions[question_id];
    const user = users[authUser];

    if (question === undefined) {
      badPath = true;
    } else {
      author = users[question.author];
      viewType = viewTypes.QUESTION;
      if (Object.keys(user.answers).includes(question.id)) {
        viewType = viewTypes.POLL_RESULT;
      }
    }
  }

  return {
    badPath,
    question,
    author,
    viewType,
  };
}

export default connect(mapStateToProps)(QuestionCard);
