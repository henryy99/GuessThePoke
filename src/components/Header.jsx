import { usePokemon } from "../context/PokemonContext";
function Header() {
  const { state } = usePokemon();

  return (
    <div className="pokedex-wrapper">
      <div className="pokedex-header">
        <div className="h-10 w-10 bg-blue-main rounded-3xl"></div>
        <div>
          <div className="h-5 w-5 bg-red-main rounded-2xl"></div>
          <div className="h-5 w-5 bg-yellow-main rounded-2xl"></div>
          <div className="h-5 w-5 bg-green-main rounded-2xl"></div>
        </div>
      </div>
      <div className="pokedex-border"></div>
    </div>
  );
}

export default Header;
