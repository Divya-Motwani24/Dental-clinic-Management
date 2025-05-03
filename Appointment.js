import React, { useState } from "react";

function Appointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert("Appointment submitted!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} placeholder="Full Name" /><br /><br />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" /><br /><br />
        <input type="tel" name="phone" onChange={handleChange} placeholder="Phone Number" /><br /><br />
        <textarea name="concern" onChange={handleChange} placeholder="Your Concern"></textarea><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;
