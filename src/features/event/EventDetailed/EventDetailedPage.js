import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedSidebar from "./EventDetailedSidebar";
import EventDetailedChat from "./EventDetailedChat";

const event = {
  id: "1",
  title: "Machine Learning Workshop At Coding Blocks",
  date: "2018-03-27",
  category: "music",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
  city: "Delhi, India",
  venue: "Coding Blocks, Dwarka",
  hostedBy: "Sanket Singh",
  hostPhotoURL: "https://randomuser.me/api/portraits/men/24.jpg",
  attendees: [
    {
      id: "a",
      name: "Sarthak",
      photoURL: "https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
      id: "b",
      name: "Rishab",
      photoURL: "https://randomuser.me/api/portraits/men/26.jpg"
    }
  ]
};

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage;
