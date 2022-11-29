import React from "react";
import "./App.css";
import LandingPage from "./LandingPage";
import { builder } from "@builder.io/react";

function App() {
  // Put your API key here
  builder.init("34638a978e0f47a49905f251b9264278");
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
