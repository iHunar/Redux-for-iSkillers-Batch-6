import { FULL_NAME } from "./action";
let INITIAL_STATE = {
  fullName: "iSkillers 123132564654564",
};
function useReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FULL_NAME:
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}
export default useReducer;
