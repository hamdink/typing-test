import React, { useEffect, useState } from "react";

const Test = () => {
  const [textChange, setTextChange] = useState("");
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  let textToWrite =
    "il sagit dutomatiser la gestion des commandes de la societe";

  useEffect(() => {
    if (textChange !== "") {
      setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
  }, [counter, textChange !== ""]);

  useEffect(() => {
    for (let i = 0; i < textChange.length; i++) {
      if (textChange.charAt(i) === textToWrite.charAt(i)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [textChange]);
  useEffect(() => {
    if (textChange.length === textToWrite.length) {
      // eslint-disable-next-line no-unused-expressions
      alert(
        "GG your score is " +
          textChange.length / counter +
          " caractere / second"
      )
        ? ""
        : window.location.reload();
    }
  }, [textChange]);

  const handleText = (e) => {
    e.persist();
    setTextChange(e.target.value);
  };

  return (
    <div className="test">
      <h1>{textToWrite}</h1>
      <p>{counter}</p>
      <textarea
        maxLength={disabled ? textChange.length : 1000}
        cols="40"
        rows="30"
        value={textChange}
        onChange={(e) => {
          handleText(e);
        }}
      ></textarea>
    </div>
  );
};

export default Test;
