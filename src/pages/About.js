import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
const About = (props) => {
  let { fullName, isDark } = useSelector((state) => state.useReducer);
  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <h1 style={{ color: isDark ? "white" : "black" }}>
        About Page {fullName}
      </h1>
      <Card />
    </div>
  );
};
export default About;
