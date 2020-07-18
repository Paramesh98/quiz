import React, { useState } from "react";

const Box = ({ question, option, selected }) => {
  const [answer, setAnswer] = useState(option);
  return (
    <div>
      {question}
      {answer.map((text, index) => (
        <button
          key={index}
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default Box;
