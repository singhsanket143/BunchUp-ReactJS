import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
class EventDashboard extends React.Component {
  render = () => {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList />
        </Grid.Column>
        <Grid.Column width={6}>Right</Grid.Column>
      </Grid>
    );
  };
}

export default EventDashboard;
