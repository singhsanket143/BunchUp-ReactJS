import React from "react";
import { Grid } from "semantic-ui-react";
class EventDashboard extends React.Component {
  render = () => {
    return (
      <Grid>
        <Grid.Column width={10}>Left</Grid.Column>
        <Grid.Column width={6}>Right</Grid.Column>
      </Grid>
    );
  };
}

export default EventDashboard;
