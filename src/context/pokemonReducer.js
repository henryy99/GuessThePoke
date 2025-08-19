export const initialState = {
  pokemonName: "",
  typedGuess: "",
  currentGuess: 0,
  guesses: Array(5).fill(null),
  hints: [],
  isGameOver: false,
  wrongGuessCount: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case "setPokemonName":
      return { ...state, pokemonName: action.payload };
    case "setCurrentGuess":
      return { ...state, currentGuess: action.payload };
    case "setHints":
      return { ...state, hints: action.payload };
    case "setIsGameOver":
      return { ...state, isGameOver: action.payload };
      case: "ADD_GUESS":
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
