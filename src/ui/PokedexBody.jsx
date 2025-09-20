import { useState } from "react";
import ScoreBar from "../components/ScoreBar";
import Keyboard from "../components/Keyboard";
import PokemonImage from "../components/PokemonImage";
import GuessTiles from "../components/GuessTiles";
import GetUserName from "../components/GetUserName";
import Hint from "../components/Hint";
function PokedexBody() {
  const [user, setUser] = useState("");
  return (
    <div className="pokedex-body  ">
      {user ? (
        <>
          <ScoreBar name={user} />
          <PokemonImage />
          <Hint />
          <GuessTiles />
          <Keyboard />
        </>
      ) : (
        ""
      )}
      {!user && <GetUserName onSetUser={setUser} />}
    </div>
  );
}

export default PokedexBody;
