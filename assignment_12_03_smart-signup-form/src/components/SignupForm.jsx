import React, { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) errors.email = "Invalid email address";
    if (!formData.password) errors.password = "Password is required";
    else if (!passwordRegex.test(formData.password))
      errors.password = "Password must be 8+ chars, with uppercase, lowercase, and number";

    return errors;
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", password: "" });
    } else setSubmitted(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Smart Signup Form</h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ padding: "8px", width: "250px" }} />
          {errors.name && <p style={{ color: "red", margin: 0 }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: "8px", width: "250px" }} />
          {errors.email && <p style={{ color: "red", margin: 0 }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ padding: "8px", width: "250px" }} />
          {errors.password && <p style={{ color: "red", margin: 0 }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>Sign Up</button>
      </form>

      {submitted && <p style={{ color: "green", marginTop: "20px" }}>Signup successful!</p>}
    </div>
  );
}
