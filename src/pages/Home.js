import React, { useState } from "react";
import About from "./About";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { setEmailAddress, setFullName, setIsDark } from "./../redux/action";
const Home = (props) => {
  const dispatch = useDispatch();
  let { fullName, emailAddress, isDark } = useSelector(
    (state) => state.useReducer
  );

  const UpdateTheme = () => {
    dispatch(setIsDark(!isDark));
  };
  const UpdateEmail = (e) => {
    dispatch(setFullName(e.target.value));
    // if(e.target.value === ""){

    // }
  };
  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <h1 style={{ color: isDark ? "white" : "black" }}>
        Home Page {fullName} {emailAddress}
      </h1>
      {/* <input
        type={"text"}
        value={fullName}
        onChange={(e) => dispatch(setFullName(e.target.value))}
      /> */}
      {/* ()=> set() */}

      <input type={"text"} value={fullName} onChange={(e)=>UpdateEmail(e)} />
      <button onClick={() => dispatch(setEmailAddress("info@iskillers.com"))}>
        Update Email Address
      </button>
      <button onClick={UpdateTheme}>Login </button>
      <About />
      <Header />
      <Footer />
    </div>
  );
};
export default Home;
