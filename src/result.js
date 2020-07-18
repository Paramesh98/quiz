import React from "react";

const Result = ({ score, playAgain }) => {
  return (
    <div>
      Your score is {score}.<button onClick={playAgain}>Play again</button>
    </div>
  );
};

export default Result;
