import React, { useState } from "react";

function App() {
  const [mood, setMood] = useState(""); // Tracks selected mood

  const moods = ["Happy", "Sad", "Excited", "Angry", "Relaxed"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Mood Tracker</h1>
      <p>Select your current mood:</p>

      {moods.map((m) => (
        <button
          key={m}
          onClick={() => setMood(m)}
          style={{
            margin: "5px",
            padding: "10px 20px",
            cursor: "pointer",
            border: "1px solid #333",
            borderRadius: "5px",
            backgroundColor: mood === m ? "#87cefa" : "#f0f0f0",
          }}
        >
          {m}
        </button>
      ))}

      {mood && (
        <div style={{ marginTop: "30px" }}>
          <h2>Your mood is: {mood}</h2>
          <p>
            {mood === "Happy" && "😊 Keep smiling!"}
            {mood === "Sad" && "😢 It's okay to feel sad sometimes."}
            {mood === "Excited" && "🎉 Enjoy the excitement!"}
            {mood === "Angry" && "😡 Take a deep breath."}
            {mood === "Relaxed" && "😌 Keep relaxing!"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;