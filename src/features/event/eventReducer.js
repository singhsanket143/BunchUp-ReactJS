import { createReducer } from "../../app/common/util/ReducerUtil";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./EventConstants";
const initialState = [
  {
    id: "1",
    title: "Machine Learning Workshop At Coding Blocks",
    date: "2018-03-27",
    category: "travel",
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
    category: "culture",
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

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
