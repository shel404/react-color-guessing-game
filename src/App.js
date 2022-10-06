import ColorBox from "./components/ColorBox";
import "./App.css";
import { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  const [colorCode, setColorCode] = useState("#ad3c00");

  return (
    <div className="App">
      <div className="main-container">
        <h2>Guess The Color Code!</h2>
        <hr />
        <ColorBox colorCode={colorCode} />
        <ButtonGroup colorCode={colorCode} />
      </div>
    </div>
  );
}

export default App;
