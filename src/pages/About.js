import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
const About = (props) => {
  let { fullName } = useSelector((state) => state.useReducer);
  return (
    <div style={{ backgroundColor: props.isDark ? "black" : "white" }}>
      <h1 style={{ color: props.isDark ? "white" : "black" }}>
        About Page {fullName}
      </h1>
      <Card isDark={props.isDark} />
    </div>
  );
};
export default About;
