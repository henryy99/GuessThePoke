import Header from "./components/Header";
import Hint from "./components/Hint";
import Keyboard from "./components/Keyboard";
import PokedexBody from "./ui/PokedexBody";
import PokemonImage from "./components/PokemonImage";
import GuessTiles from "./components/GuessTiles";
import { PokemonProvider } from "./context/PokemonContext";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <PokemonProvider>
        <div className="pokedex-wrap border-[3px] border-[#152345] max-w-[500px] mx-auto relative ">
          <Header />
          <PokedexBody>
            <PokemonImage />
            <Hint />
            <GuessTiles />
            <Keyboard />
          </PokedexBody>
        </div>
      </PokemonProvider>
    </>
  );
}

export default App;
