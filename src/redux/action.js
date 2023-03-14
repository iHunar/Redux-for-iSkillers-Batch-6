export const FULL_NAME = "FULL_NAME";
export const EMAIL_ADDRESS = "EMAIL_ADDRESS";
export const IS_DARK = "IS_DARK";
export const setFullName = (fullName) => (dispatch) => {
  dispatch({
    type: FULL_NAME,
    payload: fullName,
  });
};
export const setEmailAddress = (emailAddress) => (dispatch) => {
  dispatch({
    type: EMAIL_ADDRESS,
    payload: emailAddress,
  });
};
export const setIsDark = (isDark) => (dispatch) => {
  dispatch({
    type: IS_DARK,
    payload:isDark
  });
};
