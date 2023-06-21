import React, { useEffect, useState } from "react";
import "./QuizComponent.css"; // Import the CSS file for styling

const QuizComponent = () => {
  const [answer, setAnswer] = useState(undefined);
  const [next, setNext] = useState(0);
  const [count, setCount] = useState(0);

  const arrQ = ["מי המציא את הטלפון", "80/4", "9+6*2", "8-4", "5-2"];
  const arrAn = ["אלכסנדרגרהםבל", 20, 21, 4, 3];
  const objOfAn = {
    q1: ["אלכסנדרגרהםבל", "אייזיק ניוטון", "יונתן בן עזרא", "גיתם"],
    q2: [45, 84, 20, 10],
    q3: [84, 25, 65, 21],
    q4: [48, 6, 8, 4],
    q5: [3, 5, 48, 75],
  };

  const handleAnswer = (selectedAnswer) => {
    setAnswer(selectedAnswer);
  };

  const handleButtonClick = () => {
    if (answer !== undefined) {
      if (answer === arrAn[next]) {
        setCount((prevCount) => prevCount + 1);
      }
      setAnswer(undefined);
      setNext((prevNext) => prevNext + 1);
    }
  };

  const newQ = () => {
    // Implement the newQ function logic...
  };
  console.log(count);
  return (
    <div id="father" className="quiz-container">
      {next !== 4 ? (
        <div>
          <h1 id="question" className="question-text">
            {arrQ[next]}
          </h1>
          <br />
          <br />
          <button
            className={`button answer-button ${
              answer === objOfAn[`q${next + 1}`][0] ? "selected" : ""
            }`}
            onClick={() => handleAnswer(objOfAn[`q${next + 1}`][0])}
          >
            {objOfAn[`q${next + 1}`][0]}
          </button>
          <button
            className={`button answer-button ${
              answer === objOfAn[`q${next + 1}`][1] ? "selected" : ""
            }`}
            onClick={() => handleAnswer(objOfAn[`q${next + 1}`][1])}
          >
            {objOfAn[`q${next + 1}`][1]}
          </button>
          <button
            className={`button answer-button ${
              answer === objOfAn[`q${next + 1}`][2] ? "selected" : ""
            }`}
            onClick={() => handleAnswer(objOfAn[`q${next + 1}`][2])}
          >
            {objOfAn[`q${next + 1}`][2]}
          </button>
          <button
            className={`button answer-button ${
              answer === objOfAn[`q${next + 1}`][3] ? "selected" : ""
            }`}
            onClick={() => handleAnswer(objOfAn[`q${next + 1}`][3])}
          >
            {objOfAn[`q${next + 1}`][3]}
          </button>
          <br />
          <button className="button submit-button" onClick={handleButtonClick}>
            Submit
          </button>
        </div>
      ) : (
        <div>{count * 25}</div>
      )}
    </div>
  );
};

export default QuizComponent;
