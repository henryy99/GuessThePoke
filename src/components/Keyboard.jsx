function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <div className="keyboard flex flex-wrap justify-center mt-4  gap-2 max-w-[450px] mx-auto mb-[3rem]">
      {alphabet.split("").map((letter) => (
        <button
          key={letter}
          className="bg-yellow-main flex items-center justify-center w-[35px] h-[35px] border-1 border-[#D7D7D7] cursor-pointer rounded-[3px] text-black"
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
