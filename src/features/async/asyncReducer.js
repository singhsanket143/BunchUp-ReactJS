import { createReducer } from "../../app/common/util/ReducerUtil";

const initialState = {
  loading: false
};

export const asyncActionStarted = state => {
  return { ...state, loading: true };
};

export const asyncActionFinished = state => {
  return { ...state, loading: true };
};

export const asyncActionError = state => {
  return { ...state, loading: true };
};
// eslint-disable-next-line
export default createReducer(initialState, {
  ["ASYNC_ACTION_START"]: asyncActionStarted,
  ["ASYNC_ACTION_FINISH"]: asyncActionFinished,
  ["ASYNC_ACTION_ERROR"]: asyncActionError
});
