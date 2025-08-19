export const getPokemonTypeIcon = (type) => {
  const typeIcons = {
    fire: "🔥",
    water: "💧",
    grass: "🌿",
    electric: "⚡",
    psychic: "🧠",
    ice: "❄️",
    dragon: "🐉",
    dark: "🌑",
    fairy: "🧚",
    normal: "⚪ ",
    fighting: "🥊",
    flying: "🕊️",
    poison: "☠️",
    ground: "🌍",
    rock: "🪨",
    bug: "🐛",
  };
  return typeIcons[type] || "NONE";
};
