function Hint({ hints }) {
  return (
    <div className="flex justify-center gap-2 mb-[2rem]">
      {hints.map((hint, i) => (
        <span key={i} className="bg-amber-50 w-10 h-10 ">
          {hint}
        </span>
      ))}
    </div>
  );
}

export default Hint;
