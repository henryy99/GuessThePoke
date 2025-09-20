import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setIsOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  return (
    <nav className="flex justify-between items-center py-4 px-5 w-full  shadow-sm ">
      <Link to="/">
        <img src="/PokeGuess.png" alt="Poke guess logo" className="w-30" />
      </Link>
      <ul className="md:flex gap-5 justify-around items-center link-text tracking-widest text-lg hidden">
        <li>
          <Link to="/pokeguess">Pokeguess</Link>
        </li>
        <li>
          <Link to="/pokedex">Pokedex</Link>
        </li>
      </ul>
      <button className=" md:hidden cursor-pointer">
        {!isOpen && <AiOutlineMenu size={25} onClick={() => setIsOpen(true)} />}
      </button>

      <div
        ref={menuRef}
        className={`top-0 right-0 flex flex-col gap-5 shadow-lg p-5 w-1/2 items-center md:hidden h-screen bg-white transition-transform duration-400 fixed  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="animate-slide-to-left">
          <AiOutlineClose size={25} onClick={() => setIsOpen(false)} />
        </button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
