import React, { useState } from "react";

export default function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Use your working API key here
  const API_KEY = "609b92f6388a601910fdbba6575a23b4";

  const fetchWeather = async () => {
    const trimmedCity = city.trim();
    if (!trimmedCity) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // Fetch weather using the working URL
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Weather Dashboard</h1>

      <input
        type="text"
        placeholder="Enter city (e.g., Mumbai)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", width: "200px", marginRight: "10px" }}
      />
      <button onClick={fetchWeather} style={{ padding: "8px 16px" }}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}