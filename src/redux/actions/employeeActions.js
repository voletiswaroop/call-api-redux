import { ActionTypes } from "../contants/action-types"

export const setEmployees = (employees) => {
  return {
    type: ActionTypes.SET_EMPLOYEES,
    payload: employees
  }
}