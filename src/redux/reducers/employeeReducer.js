import { ActionTypes } from "../contants/action-types";

const intialState = {
  employees: []
}
export const employeeReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EMPLOYEES:
      return { ...state, employees: payload }
    default:
      return state
  }
}