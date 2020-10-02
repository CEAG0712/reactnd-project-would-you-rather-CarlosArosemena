import React from "react";
import { Tab } from "semantic-ui-react";
import QuestionCard from "../QuestionCard";

export const questionPanes = (props) => {
  const { questionObject } = props;
  return [
  
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane>
          {questionObject.unanswered.map((question) => (
            <QuestionCard
              key={question.id}
              question_id={question.id}
              unanswered={true}
            />
          ))}
        </Tab.Pane>
      ),
    },

    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          {questionObject.answered.map((question) => (
            <QuestionCard
              key={question.id}
              question_id={question.id}
              unanswered={false}
            />
          ))}
        </Tab.Pane>
      ),
    },
  ];
};
