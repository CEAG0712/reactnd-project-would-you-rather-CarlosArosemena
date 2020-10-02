import React from "react";
import { Container, Header } from "semantic-ui-react";

function NotFound404() {
  return (
    <Container textAlign="center">
      <Header as="h3">No Match 404 Error</Header>
      <p>We can't find what you are looking for</p>
    </Container>
  );
}

export default NotFound404;
