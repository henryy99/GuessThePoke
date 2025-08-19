import { usePokemon } from "../context/PokemonContext";
import { useEffect } from "react";
function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const { state, dispatch } = usePokemon();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (state.isGameOver) return;
      if (e.key === "Enter") {
        if (state.typedGuess.length < state.pokemonName.length) return;
        if (state.typedGuess === state.pokemonName)
          dispatch({ type: "GAME_OVER" });
        dispatch({ type: "ADD_GUESS" });
        // setGuesses((prev) => {
        //   const newGuess = [...prev];
        //   newGuess[currentIndex] = currentGuess;
        //   return newGuess;
        // });
      }
      if (e.key === "Backspace") {
        dispatch({ type: "REMOVE_LAST_CHAR" });
        return;
      }
      if (state.typedGuess.length >= state.pokemonName.length) return;

      dispatch({ type: "ADD_CHAR", payload: e.key.toLowerCase() });
      // setCurrentGuess
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state, dispatch]);

  return (
    <div className="keyboard flex flex-wrap justify-center mt-4  gap-2 max-w-[450px] mx-auto mb-[3rem]">
      {alphabet.split("").map((letter) => {
        return (
          <button
            key={letter}
            className="bg-yellow-main flex items-center justify-center w-[35px] h-[35px] border-1 border-[#D7D7D7] cursor-pointer rounded-[3px] text-black"
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
