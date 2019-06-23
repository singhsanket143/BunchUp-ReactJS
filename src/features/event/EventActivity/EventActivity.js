import React from "react";
import { Header, Segment } from "semantic-ui-react";

export default function EventActivity() {
  return (
    <div>
      <Header attached="top" content="Recent Activity" />
      <Segment attached>
        <p>Recent Acitivity</p>
      </Segment>
    </div>
  );
}
