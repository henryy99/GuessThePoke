import { usePokemon } from "../context/PokemonContext";

function Line({ state, dispatch, guess }) {
  const tiles = [];

  for (let i = 0; i < state.pokemonName.length; i++) {
    const char = guess[i];
    // const className = !isCurrentGuess
    //   ? char === pokemonName[i]
    //     ? "bg-green-main"
    //     : pokemonName.includes(char)
    //     ? "bg-yellow-main"
    //     : ""
    //   : "";
    tiles.push(
      <span
        className={`bg-amber-50 w-10 h-10 flex items-center justify-center border-b-2 rounded-sm border-green-main text-2xl font-bold `}
        key={i}
      >
        {char ? char.toUpperCase() : ""}
      </span>
    );
  }

  return <div className="line flex gap-2">{tiles}</div>;
}

function PokedexBody({ typedGuess }) {
  const { state, dispatch } = usePokemon();

  return (
    <div className="container-line flex flex-col gap-2 items-center justify-center">
      {state.guesses.map((guess, index) => {
        return (
          <Line
            key={index}
            state={state}
            dispatch={dispatch}
            guess={state.currentGuessIndex === index ? typedGuess : guess ?? ""}
          />
        );
      })}
    </div>
  );
}

export default PokedexBody;
