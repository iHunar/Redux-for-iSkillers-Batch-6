import React, { useState } from "react";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
};
export default App;
