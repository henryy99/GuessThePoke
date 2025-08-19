function Hint({ wrongGuesses, hints }) {
  return (
    <div className={`flex justify-center gap-2 mb-[2rem]`}>
      {hints.map((hint, i) => (
        <div
          key={i}
          className={`bg-amber-50  w-10 h-10 flex items-center justify-center ${
            wrongGuesses > i ? "hint" : "hidden-hint"
          }`}
        >
          {hint}
        </div>
      ))}
    </div>
  );
}

export default Hint;
