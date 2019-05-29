import React from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const eventsDashboard = [
  {
    id: "1",
    title: "Machine Learning Workshop At Coding Blocks",
    date: "2018-03-27",
    category: "Technology",
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
  },
  {
    id: "2",
    title: "GSoC Meetup At Coding Blocks",
    date: "2018-03-28",
    category: "Technology and Culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Noida, India",
    venue: "Coding Blocks Noida, Uttar Pradesh, India",
    hostedBy: "Rishabh Bansal",
    hostPhotoURL: "https://randomuser.me/api/portraits/women/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/69.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/54.jpg"
      }
    ]
  }
];

class EventDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: eventsDashboard,
      isOpen: false,
      selectedEvent: null
    };

    // this.handleFormOpen = this.handleFormOpen.bind(this); Use this when not using arrow function
  }

  handleFormOpen = msg => {
    console.log(msg);
    this.setState({ isOpen: true, selectedEvent: null });
  };

  handleFormCancel = () => {
    this.setState({ isOpen: false });
  };

  handleEventUpdate = updatedEvent => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    });
  };

  handleOpenEvent = eventToOpen => () => {
    console.log(eventToOpen);
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    });
  };

  render = () => {
    const { selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onEventOpen={this.handleOpenEvent}
            events={this.state.events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={() => this.handleFormOpen("Clicked")}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm
              updateEvent={this.handleEventUpdate}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              handleCancel={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  };
}

export default EventDashboard;
