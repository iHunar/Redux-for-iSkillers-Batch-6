import React from "react";
import { useSelector } from "react-redux";

const Header = (props) => {
  let { fullName } = useSelector((state) => state.useReducer);

  return (
    <div>
      <h1 style={{ color: props.isDark ? "white" : "black" }}>
        Header Component {fullName}
      </h1>
    </div>
  );
};
export default Header;
