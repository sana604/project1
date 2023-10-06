import React from "react";
import { Elect } from "./Components/Elect";
import "./Components/comman.css"
import { Civil } from "./Components/Civil";
import { Mech } from "./Components/Mech";

function App() {
  return (
    <div className="main">
<Elect/>
<Civil/>
<Mech/>
    </div>

  );
}

export default App;
