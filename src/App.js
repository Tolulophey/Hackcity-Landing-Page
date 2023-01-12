import React from "react";
import Home from './pages/Home'
import ButtonOne from "./reusables/ButtonOne/ButtonOne";
import ButtonThree from "./reusables/ButtonTwo/ButtonThree/ButtonThree";
import ButtonTwo from "./reusables/ButtonTwo/ButtonTwo";

function App() {
  return (
    <div className="App">
      <Home />
      <ButtonOne />
      <ButtonTwo />
      <ButtonThree />
    </div>
  );
}

export default App;
