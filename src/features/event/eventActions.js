import { toastr } from "react-redux-toastr";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../async/asyncActions";
import { fetchSampleData } from "../../app/data/mockApi";

export const fetchEvents = events => {
  return {
    type: "FETCH_EVENTS",
    payload: { events }
  };
};

export const createEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: "CREATE_EVENT",
        payload: { event }
      });
      toastr.success("Success!!", "Event has been created");
    } catch (err) {
      console.log(err);
      toastr.error("OOPS!!", "Something went wrong");
    }
  };
};

export const updateEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: "UPDATE_EVENT",
        payload: { event }
      });
      toastr.success("Success!!", "Event has been updated");
    } catch (err) {
      console.log(err);
      toastr.error("OOPS!!", "Something went wrong");
    }
  };
};

export const deleteEvent = eventId => {
  return {
    type: "DELETE_EVENT",
    payload: {
      eventId
    }
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      let events = await fetchSampleData();
      dispatch(fetchEvents(events));
      dispatch(asyncActionFinish());
    } catch (err) {
      console.log(err);
      dispatch(asyncActionError);
    }
  };
};
