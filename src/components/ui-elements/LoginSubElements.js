import React from "react";
import { Grid, Header } from "semantic-ui-react";

const headerGreeting = "Welcome to the Would You Rather App!";
const subHeaderInstruction = "Please sign in to continue";

export const LoginHeader = () => (
  <Header as="h4" block attached="top" textAlign="center">
    <Header.Content>{headerGreeting}</Header.Content>
    <Header.Subheader>{subHeaderInstruction}</Header.Subheader>
  </Header>
);

export const LoginGridLayout = ({ form }) => (
  <div>
    <Grid padded textAlign="center">
      <Grid.Row className="login">
        <Grid.Column width={16}>{form}</Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);
