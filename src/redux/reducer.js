import { FULL_NAME, EMAIL_ADDRESS, IS_DARK } from "./action";
let INITIAL_STATE = {
  fullName: "iSkillers",
  emailAddress: "info@gmail.com",
  isDark: true,
};
function useReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FULL_NAME:
      return { ...state, fullName: action.payload };
    case EMAIL_ADDRESS:
      return { ...state, emailAddress: action.payload };
    case IS_DARK:
      return { ...state, isDark: action.payload };
    default:
      return state;
  }
}
export default useReducer;
