export const getPokemonTypeIcon = (type) => {
  const typeIcons = {
    fire: "🔥",
    water: "💧",
    grass: "🍃",
    electric: "⚡",
    psychic: "🧠",
    ice: "❄️",
    dragon: "🐉",
    dark: "🌑",
    fairy: "🧚",
    normal: "⚪",
    fighting: "🥊",
    flying: "🕊️",
    poison: "☠️",
    ground: "🌍",
    rock: "🪨",
    bug: "🐛",
  };
  return typeIcons[type] || "❌";
};
export function getTileClass(char, index, state, isCurrentGuess) {
  if (!char || isCurrentGuess) return "bg-gray-100 border-2 "; // optional fallback
  if (char === state.pokemonName[index]) return "bg-green-main border-0";
  if (state.pokemonName.includes(char)) return "bg-yellow-main border-0";
  if (!state.pokemonName.includes(char) && char !== "")
    return "bg-red-main border-0";
  return "bg-main-red"; // optional fallback
}

export const getKeyClass = (state, char) => {
  const allGuesses = state.guesses.filter(Boolean).join("").toUpperCase();

  if (!allGuesses.includes(char)) return "";

  const isCorrectSpot = state.guesses.some(
    (guess) =>
      guess &&
      [...guess].some((c, i) => c === char && state.pokemonName[i] === char)
  );
  if (isCorrectSpot) return "bg-green-main";

  if (state.pokemonName.includes(char)) return "bg-yellow-main";

  return "bg-red-main";
};
