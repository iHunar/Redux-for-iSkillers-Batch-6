import React from "react";
import { useSelector } from "react-redux";
const Card = (props) => {
  let { fullName, emailAddress, isDark } = useSelector(
    (state) => state.useReducer
  );
  return (
    <div>
      <h1 style={{ color: isDark ? "white" : "black" }}>
        Card Component {fullName} {emailAddress}
      </h1>
    </div>
  );
};
export default Card;
