/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useContext, useReducer } from "react";
import { reducer, initialState } from "./pokemonReducer";
import { getPokemonTypeIcon } from "../utils/helpers";
export const PokemonContext = createContext();

const MAX_POKEMON = 151;

export function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchPokemon = async () => {
      const randomId = Math.floor(Math.random() * MAX_POKEMON) + 1;
      try {
        const pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        const pokemonData = await pokemonResponse.json();
        const pokemonSpeciesResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`
        );
        const pokemonSpeciesData = await pokemonSpeciesResponse.json();

        dispatch({ type: "setPokemonName", payload: pokemonData.name });

        dispatch({
          type: "SET_HINTS",
          payload: [
            getPokemonTypeIcon(pokemonData.types[0].type.name),
            getPokemonTypeIcon(pokemonData.types[1]?.type.name) ?? "none",
            pokemonSpeciesData.habitat.name ?? "unknown",
            pokemonSpeciesData.color.name,
          ],
        });
      } catch (error) {
        console.log("Error fetching pokemon", error);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
}
