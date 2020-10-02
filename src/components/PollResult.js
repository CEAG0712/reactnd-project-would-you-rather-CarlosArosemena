import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  Header,
  Segment,
  Progress,
  Label,
  Button,
  Icon,
} from "semantic-ui-react";

import { pollResultStyle } from "../utils/pollResultStyle";

const LoggedInUserVote = () => (
  <Label color="orange" ribbon="right" className="vote">
    <Icon name="check circle outline" size="big" className="compact" />
    <div style={{ float: "right" }}>
      Your
      <br />
      Vote
    </div>
  </Label>
);

class PollResult extends Component {
  backButtonClick = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { question, user } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;
    const userVote = user.answers[question.id];

    let option1 = pollResultStyle.secondary,
      option2 = pollResultStyle.secondary;
    if (optionOneVotes > optionTwoVotes) {
      option1 = pollResultStyle.primary;
    } else if (optionTwoVotes > optionOneVotes) {
      option2 = pollResultStyle.primary;
    }

    return (
      <Fragment>
        <Header as="h3">
          Results:
          <Header.Subheader style={{ fontWeight: "bold" }}>
            Would you rather
          </Header.Subheader>
        </Header>
        <Segment
          color={option1.color}
          style={{ backgroundColor: `${option1.bgColor}` }}
        >
          {userVote === "optionOne" && <LoggedInUserVote />}
          <p style={{ fontWeight: "bold" }}>{question.optionOne.text}</p>
          <Progress
            percent={((optionOneVotes / votesTotal) * 100).toFixed(2)}
            progress
            color={option1.color}
          >
            {optionOneVotes} out of {votesTotal} votes
          </Progress>
        </Segment>
        <Segment
          color={option2.color}
          style={{ backgroundColor: `${option2.bgColor}` }}
        >
          {userVote === "optionTwo" && <LoggedInUserVote />}

          <p style={{ fontWeight: "bold" }}>{question.optionTwo.text}</p>
          <Progress
            percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)}
            progress
            color={option2.color}
          >
            {optionTwoVotes} out of {votesTotal} votes
          </Progress>
        </Segment>
        <Button size="tiny" floated="right" onClick={this.backButtonClick}>
          Back
        </Button>
      </Fragment>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  const user = users[authUser];
  return {
    user,
  };
}

export default withRouter(connect(mapStateToProps)(PollResult));
