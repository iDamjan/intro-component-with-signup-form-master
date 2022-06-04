import React from "react";
import "./App.css";
import Form from "./components/form";
import IntroText from "./components/IntroText";

const App = () => {
  return (
    <div className="wrapper">
      <IntroText />
      <Form />
      
    </div>
  );
};

export default App;
