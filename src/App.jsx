import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hint from "./components/Hint";
import Keyboard from "./components/Keyboard";
import PokedexBody from "./components/PokedexBody";
import PokemonImage from "./components/PokemonImage";
import { PokemonProvider } from "./context/PokemonContext";
function App() {
  return (
    <PokemonProvider>
      <div className="bg-red-main w-screen h-screen">
        <Header />
        {/* <Header />
        <PokemonImage />
        <Hint />
         */}
        <PokedexBody />
        {/* <Keyboard /> */}
      </div>
    </PokemonProvider>
  );
}

export default App;
