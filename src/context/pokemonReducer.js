export const initialState = {
  pokemonName: "",
  typedGuess: "",
  currentGuessIndex: 0,
  guesses: Array(5).fill(null),
  hints: Array(4).fill(null),
  isGameOver: false,
  wrongGuessesCount: 0,
  pokemonSprite: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "setPokemonName":
      return { ...state, pokemonName: action.payload.toUpperCase() };
    case "SET_HINTS":
      return {
        ...state,
        hints: state.hints.map((hint, index) => action.payload[index]),
      };
    case "GAME_OVER":
      return { ...state, isGameOver: true };
    case "ADD_CHAR":
      if (state.typedGuess.length >= state.pokemonName.length) return state;
      return { ...state, typedGuess: state.typedGuess + action.payload };
    case "ADD_GUESS":
      return {
        ...state,
        guesses: state.guesses.map((guess, index) =>
          index === state.currentGuessIndex
            ? state.typedGuess.toUpperCase()
            : guess
        ),
        typedGuess: "",
        currentGuessIndex: state.currentGuessIndex + 1,
        wrongGuessesCount: state.isGameOver
          ? state.wrongGuessesCount
          : state.wrongGuessesCount + 1,
      };
    case "REMOVE_LAST_CHAR":
      if (state.typedGuess.length === 0) return state;
      return {
        ...state,
        typedGuess: state.typedGuess.slice(0, -1),
      };
    case "SET_SPRITE":
      return { ...state, pokemonSprite: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
