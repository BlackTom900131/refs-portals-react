import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);

  const playerNameInputRef = useRef();

  function handlePlayerNameChange() {
    console.log(playerNameInputRef);
    setPlayerName(playerNameInputRef.current.value);
    playerNameInputRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome, {playerName ? playerName : "Guest User"}!</h2>
      <p>
        <input type="text" ref={playerNameInputRef} />
        <button onClick={handlePlayerNameChange}>Set Name</button>
      </p>
    </section>
  );
}
