import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hint from "./components/Hint";
import Keyboard from "./components/Keyboard";
import PokedexBody from "./components/PokedexBody";
import PokemonImage from "./components/PokemonImage";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [hints, setHints] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const maxPokemon = 151;

  const wrongGuesses = useEffect(() => {
    const fetchPokemon = async () => {
      const randomId = Math.floor(Math.random() * maxPokemon) + 1;
      try {
        setIsLoading(true);
        const pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        const pokemonData = await pokemonResponse.json();
        const pokemonSpeciesResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`
        );
        const pokemonSpeciesData = await pokemonSpeciesResponse.json();
        console.log(pokemonSpeciesData);

        setHints(() => [
          pokemonData.types[0].type.name,
          pokemonData.types[1]?.type.name ?? "none",
          pokemonSpeciesData.habitat.name ?? "unknown",
          pokemonSpeciesData.color.name,
        ]);

        setPokemonName(pokemonData.name);
      } catch (error) {
        console.log("Error fetching pokemon", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className="bg-red-main w-screen h-screen">
      <Header />
      <PokemonImage />
      <Hint hints={hints} />
      {isLoading ? (
        "Loading"
      ) : (
        <PokedexBody pokemonName={pokemonName} currentGuess={currentGuess} />
      )}
      <Keyboard />
    </div>
  );
}

export default App;
