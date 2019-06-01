import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { deleteEvent } from "../eventActions";
class EventDashboard extends React.Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render = () => {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  };
}

const mapStateToProps = state => {
  return { events: state.events };
};

export default connect(
  mapStateToProps,
  { deleteEvent }
)(EventDashboard);
