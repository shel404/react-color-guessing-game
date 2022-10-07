import React, { useEffect, useState } from "react";

const ButtonGroup = ({ colorCode, setSubmittedAnswer }) => {
  const [disabled, setDisabled] = useState(false);
  const opt1 = generateColorCode();
  const opt2 = generateColorCode();
  const colors = [opt1, opt2, colorCode];
  const shuffled_colors = colors.sort((a, b) => 0.5 - Math.random());

  useEffect(() => {
    setDisabled(false);
  }, [colorCode]);

  return (
    <div className="button-group">
      {shuffled_colors.map((k, i) => {
        return (
          <button
            key={i}
            value={k}
            disabled={disabled ? true : false}
            onClick={() => {
              setSubmittedAnswer(k);
              setDisabled(true);
            }}
          >
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

export default React.memo(ButtonGroup);
