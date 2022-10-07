import { useState } from "react";

const ButtonGroup = ({ colorCode }) => {
  const opt1 = generateColorCode();
  const opt2 = generateColorCode();
  const colors = [opt1, opt2, colorCode];
  const shuffled_colors = colors.sort((a, b) => 0.5 - Math.random());

  return (
    <div className="button-group">
      {shuffled_colors.map((k, i) => {
        return (
          <button key={i} value={k}>
            {k}
          </button>
        );
      })}
    </div>
  );
};

const generateColorCode = () => {
  let color_code = "";
  const strings = "1234567890ABCDEF";
  for (let i = 0; i < 6; i++) {
    color_code += strings.charAt(Math.floor(Math.random() * strings.length));
  }
  return "#" + color_code;
};

export default ButtonGroup;
