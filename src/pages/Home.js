import React, { useState, useEffect } from "react";
import About from "./About";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { setEmailAddress, setFullName, setIsDark } from "./../redux/action";
const Home = (props) => {
  const dispatch = useDispatch();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailMessage, setEmailMessage] = useState("");
  let [passwordMessage, setPasswordMessage] = useState("");
  let [emailDone, setEmailDone] = useState(false);
  // get data
  let { fullName, emailAddress, isDark } = useSelector(
    (state) => state.useReducer
  );
  let getData = JSON.parse(localStorage.getItem("isDark"));
  console.log("getData", getData);
  // JSON.parse();
  // JSON.stringify()
  useEffect(() => {
    if (getData === null) {
      localStorage.setItem("isDark", JSON.stringify(isDark));
    } else {
      if (isDark) {
        console.log("true");
        dispatch(setIsDark(getData));
      } else {
        console.log("false");
        dispatch(setIsDark(getData));
      }
    }
  }, []);

  const emailChange = (e) => {
    var e = e.target.value;
    setEmail(e);
    setEmailDone(false);
    if (e === "") {
      setEmailMessage("");
      setEmailDone(false);
    } else if (
      !e.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailMessage("please enter valid email address");
      setEmailDone(false);
    } else {
      setEmailMessage("");
      setEmailDone(true);
    }
  };
  const passwordChange = (e) => {
    var e = e.target.value;
    setPassword(e);
    if (e === "") {
      setPasswordMessage("");
    } else if (
      !e.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    ) {
      setPasswordMessage(
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    } else {
      setPasswordMessage("");
    }
  };
  // login function
  const updateTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    dispatch(setIsDark(!isDark));
  };
  const Login = () => {
    if (email === "") {
      setEmailMessage("Email Required");
    } else if (password === "") {
      setPasswordMessage("Password Required");
    } else {
      let Obj = {
        email: email,
        password: password,
      };
      console.log(Obj);
    }
  };
  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <h1 style={{ color: isDark ? "white" : "black" }}>
        Home Page {fullName} {emailAddress}
      </h1>
      <button onClick={updateTheme}>Update Theme</button>
      {/* <input
        type={"text"}
        value={fullName}
        onChange={(e) => dispatch(setFullName(e.target.value))}
      /> */}
      {/* ()=> set() */}

      {/* <input type={"text"} value={fullName} onChange={(e)=>UpdateEmail(e)} /> */}
      {/* <button onClick={() => dispatch(setEmailAddress("info@iskillers.com"))}> */}
      {/* Update Email Address
      </button> */}
      {/* <button onClick={UpdateTheme}>Login </button> */}
      <div>
        <input
          type="text"
          placeholder="email address"
          value={email}
          onChange={(e) => emailChange(e)}
        />
        {emailDone && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png"
            height={20}
          />
        )}
      </div>
      <p style={{ color: "red" }}>{emailMessage}</p>
      <div>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => passwordChange(e)}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png"
          height={20}
        />
      </div>
      <p style={{ color: "red" }}>{passwordMessage}</p>
      <button onClick={Login}>Log in</button>
      <About />
      <Header />
      <Footer />
    </div>
  );
};
export default Home;
