import React from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
class EventDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.props.updateEvent(updatedEvent);
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
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    });
  };

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render = () => {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent}
            events={events}
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

const mapStateToProps = state => {
  return { events: state.events };
};

export default connect(
  mapStateToProps,
  { createEvent, deleteEvent, updateEvent }
)(EventDashboard);
