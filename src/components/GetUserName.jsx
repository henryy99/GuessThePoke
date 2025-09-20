import { useState } from "react";

function GetUserName({ onSetUser }) {
  const [username, setUsername] = useState("");
  return (
    <div className="h-screen w-full flex items-center justify-center font-[Pokemon] text-white tracking-widest flex-col gap-5 start-screen">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-2 border-white  text-[#f25545]  p-2 mb-4 bg-white focus:outline-0 rounded-full text-center shadow-2xl"
        placeholder="Enter your name"
      />
      <button
        className="start-button px-8 py-2 rounded-full"
        onClick={() => onSetUser(username)}
      >
        Start
      </button>
    </div>
  );
}

export default GetUserName;
