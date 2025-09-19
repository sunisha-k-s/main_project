import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <header className="login-header">
          <h1 className="brand-name">Career Axis</h1>
        </header>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input id="email" className="input" type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" className="input" type="password" placeholder="Enter your password" required />
          </div>

          <div className="form-row">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <a className="forgot" href="#">Forgot?</a>
          </div>

          <button type="submit" className="btn-primary">Login</button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="socials">
          <button className="btn-social">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Continue with Google
          </button>
          <button className="btn-social">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            Continue with GitHub
          </button>
        </div>

        <p className="signup">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}
