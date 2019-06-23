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
  return {
    type: "CREATE_EVENT",
    payload: {
      event
    }
  };
};

export const updateEvent = event => {
  return {
    type: "UPDATE_EVENT",
    payload: {
      event
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
