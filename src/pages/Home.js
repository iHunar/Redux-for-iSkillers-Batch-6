import React, { useState } from "react";
import About from "./About";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import { useSelector } from "react-redux";
const Home = (props) => {
  const [isDark, setIsDark] = useState(false);
  let { fullName } = useSelector((state) => state.useReducer);
  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <h1 style={{ color: isDark ? "white" : "black" }}>
        Home Page {fullName}
      </h1>
      <button onClick={() => setIsDark(!isDark)}>Update Theme</button>
      <About isDark={isDark} />
      <Header isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
};
export default Home;
