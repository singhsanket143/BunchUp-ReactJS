import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
class EventForm extends Component {
  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.event);
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header color="teal" sub content="Event Details" />
            <Form onSubmit={this.onFormSubmit}>
              <Field
                type="text"
                name="title"
                placeholder="Enter Title"
                component={TextInput}
              />

              <Field
                type="text"
                name="category"
                placeholder="Enter Category"
                component={TextInput}
              />
              <Field
                type="text"
                rows={3}
                name="description"
                placeholder="Enter Description"
                component={TextArea}
              />
              <Header color="teal" sub content="Event Location Details" />

              <Field
                type="text"
                name="city"
                placeholder="Enter City"
                component={TextInput}
              />
              <Field
                type="text"
                name="venue"
                placeholder="Enter Venue"
                component={TextInput}
              />
              <Field
                type="text"
                name="date"
                placeholder="Enter Date"
                component={TextInput}
              />
              <Button positive type="submit">
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: "",
    date: "",
    venue: "",
    hostedBy: "",
    city: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};

export default connect(
  mapStateToProps,
  { createEvent, updateEvent }
)(reduxForm({ form: "eventForm" })(EventForm));
