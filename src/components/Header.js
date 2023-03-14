import React from "react";
import { useSelector } from "react-redux";
const Header = (props) => {
  let { fullName ,isDark} = useSelector((state) => state.useReducer);
  return (
    <div>
      <h1 style={{ color: isDark ? "white" : "black" }}>
        Header Component {fullName}
      </h1>
    </div>
  );
};
export default Header;
