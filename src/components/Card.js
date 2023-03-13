import React from "react";
import { useSelector } from "react-redux";
const Card = (props) => {
  let { fullName } = useSelector((state) => state.useReducer);
  return (
    <div>
      <h1 style={{ color: props.isDark ? "white" : "black" }}>
        Card Component {fullName}
      </h1>
    </div>
  );
};
export default Card;
