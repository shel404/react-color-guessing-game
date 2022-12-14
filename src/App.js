import ColorBox from "./components/ColorBox";
import "./App.css";
import { useEffect, useState } from "react";
import ButtonGroup from "./components/ButtonGroup";
import Check from "./components/Check";

function App() {
  const [colorCode, setColorCode] = useState(generateColorCode());
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("highScore")) {
      setHighScore(localStorage.getItem("highScore"));
    } else {
      localStorage.setItem("highScore", 0);
      setHighScore(0);
    }
  }, []);

  const handleSubmittedAnswer = (answer) => {
    setSubmittedAnswer(answer);
    if (answer === colorCode) {
      setScore(score + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
        localStorage.setItem("highScore", score + 1);
      }
    } else {
      setScore(0);
    }

    setShowInfo(true);

    setTimeout(() => {
      setShowInfo(false);
      setSubmittedAnswer("");
      setColorCode(generateColorCode());
    }, 1000);
  };

  return (
    <div className="App">
      <div className="main-container">
        <h2>Guess The Color Code!</h2>
        <div></div>

        <hr />
        <div className="scoreboard">
          <div>Streak: {score}</div>
          <div>Highest Streak: {highScore}</div>
        </div>
        <ColorBox colorCode={colorCode} />
        <ButtonGroup
          colorCode={colorCode}
          setSubmittedAnswer={(answer) => handleSubmittedAnswer(answer)}
        />
        {submittedAnswer && showInfo ? (
          <div className="info-text">
            {submittedAnswer === colorCode ? (
              <>
                <div>Correct!</div>
              </>
            ) : (
              <div>Wrong!</div>
            )}
          </div>
        ) : (
          ""
        )}
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
