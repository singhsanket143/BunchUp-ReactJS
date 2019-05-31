import React from "react";
import { Segment, Item, Label, List } from "semantic-ui-react";
const EventDetailedSidebar = () => {
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        2 People Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          <Item style={{ position: "relative" }}>
            <Label
              style={{ position: "absolute" }}
              color="orange"
              ribbon="right"
            >
              Host
            </Label>
            <Item.Image size="tiny" src="/assets/user.png" />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <a>Attendee Name</a>
              </Item.Header>
            </Item.Content>
          </Item>
        </List>
      </Segment>
    </div>
  );
};

export default EventDetailedSidebar;
