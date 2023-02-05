import React, { useState } from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert(
        "Your word must be of 5 characters at least, no more no less."
      );
      return;
    }
    // console.log({ tentativeGuess });
    // tentativeGuesses.push(tentativeGuess);
    // console.log(tentativeGuesses);
    // settentativeGuesses(tentativeGuesses);
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        autoComplete="off"
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        minLength={5}
        title="Need to be a 5 characters word (no numbers)"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(guess) => {
          const nextGuess = guess.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
