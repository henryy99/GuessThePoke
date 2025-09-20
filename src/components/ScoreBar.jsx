import { usePokemon } from "../context/PokemonContext";
import { useState } from "react";

function ScoreBar({ name }) {
  const [score, setScore] = useState(0);
  const { state, dispatch, fetchPokemon } = usePokemon();

  function handleClickNext() {
    setScore(score + 100 - state.wrongGuessesCount * 20);
    fetchPokemon();
    dispatch({ type: "RESET_GAME" });
  }
  return (
    <div
      className={`pt-10 border-b-2 border-black pb-3 flex font-[Pokemon] text-2xl justify-between text-[#f25545]`}
    >
      <h1 className=" ">Score: {score} </h1>
      <h1>{name}</h1>
      <button
        onClick={handleClickNext}
        className={`${state.isGameOver ? "visible" : "invisible"}`}
      >
        Next
      </button>
    </div>
  );
}

export default ScoreBar;
