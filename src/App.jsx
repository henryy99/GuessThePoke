import Header from "./components/Header";
import Hint from "./components/Hint";
import Keyboard from "./components/Keyboard";
import PokedexBody from "./ui/PokedexBody";
import PokemonImage from "./components/PokemonImage";
import GuessTiles from "./components/GuessTiles";

import Nav from "./components/Nav";

import { UserProvider } from "./context/UserContext";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import Pokeguess from "./pages/pokeguess/Pokeguess";
import Pokedex from "./pages/pokedex/Pokedex";
function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokeguess" element={<Pokeguess />} />
          <Route path="/pokedex" element={<Pokedex />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
