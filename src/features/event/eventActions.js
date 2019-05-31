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
    type: "DELTE_EVENT",
    payload: {
      eventId
    }
  };
};
