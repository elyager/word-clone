import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function handleSubmitGuess(guess) {
    setGuesses([...guesses, { id: `${guess}-${Math.random()}`, guess: guess }]);
  }
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
