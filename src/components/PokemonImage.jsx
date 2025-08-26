import Confetti from "react-confetti";
import { usePokemon } from "../context/PokemonContext";
function PokemonImage() {
  const {
    state: { pokemonSprite, isGameOver, wrongGuessesCount },
  } = usePokemon();

  const isWin = wrongGuessesCount < 5;

  return (
    <>
      {isGameOver && isWin ? <Confetti /> : null}
      <div className="flex justify-center pt-15 ">
        <img
          src={
            isGameOver
              ? pokemonSprite
              : "https://png.pngtree.com/png-clipart/20230823/original/pngtree-pokemon-game-symbol-pikachu-play-picture-image_8234794.png"
          }
          alt="A pokemon"
          className="w-30 h-30 "
        />
      </div>
    </>
  );
}

export default PokemonImage;
