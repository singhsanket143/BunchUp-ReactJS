export const createEvent = events => {
  return {
    type: "CREATE_EVENT",
    payload: {
      events
    }
  };
};

export const updateEvent = events => {
  return {
    type: "UPDATE_EVENT",
    payload: {
      events
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
