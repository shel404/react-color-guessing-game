import ColorBox from "./components/ColorBox";
import "./App.css";
import { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  const [colorCode, setColorCode] = useState(generateColorCode());

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

const generateColorCode = () => {
  let color_code = "";
  const strings = "1234567890ABCDEF";
  for (let i = 0; i < 6; i++) {
    color_code += strings.charAt(Math.floor(Math.random() * strings.length));
  }

  return "#" + color_code;
};

export default App;
