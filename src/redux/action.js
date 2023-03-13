export const FULL_NAME = "FULL_NAME";

export const setFullName = (fullName) => (dispatch) => {
  dispatch({
    type: FULL_NAME,
    payload: fullName,
  });
};
