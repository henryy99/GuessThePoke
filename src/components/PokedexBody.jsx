function PokedexBody({ pokemonName, currentGuess }) {
  const pokemonLetter = pokemonName.toUpperCase().split("");
  return (
    <div className="pokedex-body w-screen flex justify-center items-center gap-1.5">
      {pokemonLetter.map((letter) => (
        <span className="bg-amber-50 h-[2.5rem] w-[2.5rem] flex">{letter}</span>
      ))}
      {Array(pokemonName.length)
        .fill(0)
        .map((_, i) => (
          <span key={i + 1}>{currentGuess}</span>
        ))}
    </div>
  );
}

export default PokedexBody;
