import { usePokemon } from "../context/PokemonContext";

function Hint() {
  const { state } = usePokemon();

  return (
    <div className={`flex justify-center gap-2 mb-[2rem]`}>
      {state.hints.map((hint, i) => (
        <div
          key={i}
          className={`bg-[#e3e3e1] rounded-md w-10 h-10 flex items-center font-bold  text-[20px] justify-center ${
            state.wrongGuessesCount > i ? "" : "hidden-hint"
          }`}
        >
          {hint}
        </div>
      ))}
    </div>
  );
}

export default Hint;
