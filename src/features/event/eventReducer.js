import { createReducer } from "../../app/common/util/ReducerUtil";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./EventConstants";

const initialState = [];

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(e => e.id !== payload.event.id),
    Object.assign({}, payload.event)
  ];
};

export const deleteEvent = (state, payload) => {
  return [...state.filter(e => e.id !== payload.eventId)];
};

export const fetchEvents = (state, payload) => {
  return payload.events;
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  ["FETCH_EVENTS"]: fetchEvents
});
