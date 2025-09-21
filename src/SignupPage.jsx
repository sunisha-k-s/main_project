import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState(""); // student | trainer | none
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Full name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email.";
    if (!password) e.password = "Password is required.";
    else if (password.length < 6) e.password = "Password must be at least 6 characters.";
    if (!confirm) e.confirm = "Please confirm your password.";
    else if (password !== confirm) e.confirm = "Passwords do not match.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSuccess("");
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      const payload = { name, email, role: role || "not specified" };
      console.log("Register payload (passwords omitted):", payload);
      setSuccess("Registration successful (UI-only). Check console for payload.");
      setPassword("");
      setConfirm("");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="brand-wrap">
          <h1 className="brand">Career Axis</h1>
          <p className="brand-sub">Create your account</p>
        </div>

        {success && <div className="success-msg">{success}</div>}

        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" className="input" />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="input" />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Create Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter a password" className="input" />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="confirm">Confirm Password</label>
            <input id="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Re-enter your password" className="input" />
            {errors.confirm && <div className="error">{errors.confirm}</div>}
          </div>

          <div className="input-group role-select">
            <label>Register as</label>
            <div className="role-options">
              <label><input type="radio" name="role" value="student" checked={role === "student"} onChange={(e) => setRole(e.target.value)} /> Student</label>
              <label><input type="radio" name="role" value="trainer" checked={role === "trainer"} onChange={(e) => setRole(e.target.value)} /> Trainer</label>
              <label><input type="radio" name="role" value="" checked={role === ""} onChange={() => setRole("")} /> Prefer not to say</label>
            </div>
          </div>

          <button type="submit" className="btn-primary">Sign Up</button>
        </form>

        <div className="divider"><span>Or register with</span></div>

        <div className="socials">
          <button type="button" className="btn-social google">Google</button>
          <button type="button" className="btn-social github">GitHub</button>
        </div>

        <p className="have-account">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
