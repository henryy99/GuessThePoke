function Nav() {
  return (
    <div className="flex justify-between items-center px-5 py-4 border-b border-gray-300 shadow-md mb-0.5">
      <img src="/PokeGuess.png" alt="Poke guess logo" className="w-30" />
      <ul className="flex gap-5 justify-around items-center link-text tracking-widest text-lg">
        <li>Dex</li>
        <li>Links</li>
        <li>Later</li>
      </ul>
    </div>
  );
}

export default Nav;
