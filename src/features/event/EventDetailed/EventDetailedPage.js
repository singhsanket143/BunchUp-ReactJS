import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedSidebar from "./EventDetailedSidebar";
import EventDetailedChat from "./EventDetailedChat";
const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader />
        <EventDetailedInfo />
        <EventDetailedChat />
      </Grid.Column>
      <EventDetailedSidebar />
      <Grid.Column width={6} />
    </Grid>
  );
};

export default EventDetailedPage;
