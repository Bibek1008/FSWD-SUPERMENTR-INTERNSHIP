import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setMessage("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contact Us</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "8px", margin: "5px" }}
            required
          /><br/>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ padding: "8px", margin: "5px", width: "300px", height: "100px" }}
            required
          /><br/>
          <button type="submit" style={{ padding: "8px 16px", marginTop: "10px" }}>Submit</button>
        </form>
      ) : (
        <p>Thank you for contacting us! We will get back to you soon.</p>
      )}
    </div>
  );
}
