import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const DEMO_EMAIL = "demo@sammy-realty.com";
const DEMO_PASSWORD = "demo123";


function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setError("");
    if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      setError("Invalid email or password.");
      return;
    }
    setIsSubmitting(true);
    toast.success("Login successful");
    setTimeout(() => {
      router.push("/admin/welcome");
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Admin Login | Sammy Realty</title>
      </Head>
      <ToastContainer position="top-right" autoClose={1200} />
      <main className="admin-login-plain">
        <div className="admin-login-card">
          <form className="admin-login-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="admin-login-logo-wrapper">
              <img src="/img/main-logo.png" alt="Sammy Realty" className="admin-login-logo-img" />
              <p className="admin-login-subtitle">Access Admin Console</p>
            </div>
            {error && (
              <div className="admin-login-error" role="alert">{error}</div>
            )}
            <label htmlFor="admin-email">Email</label>
            <input
              id="admin-email"
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
              required
              className={error ? "input-error" : ""}
            />
            <label htmlFor="admin-password">Password</label>
            <div className="admin-login-password-wrap">
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className={error ? "input-error" : ""}
              />
              <button
                type="button"
                className="admin-login-eye"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="admin-login-options">
              <label className="admin-login-switch">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="slider"></span>
                <span className="switch-label">Remember me</span>
              </label>
              <Link href="/admin/reset-password" className="admin-login-reset">Reset password</Link>
            </div>
            <button
              className="theme-btn-1 btn btn-block"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "LOGGING YOU IN..." : "LOGIN"}
            </button>
          </form>
        </div>
      </main>
      <style jsx>{`
        .admin-login-plain {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7faf8;
        }
        .admin-login-card {
          background: #fff;
          border: 1.5px solid #d0dbd5;
          box-shadow: 0 12px 32px rgba(11, 93, 59, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
          border-radius: 0;
          padding: 48px 40px 40px 40px;
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .admin-login-logo {
          font-size: 2.3rem;
          font-weight: 950;
          color: #0B5D3B;
          text-align: center;
          margin-bottom: 8px;
          letter-spacing: -1.2px;
          background: linear-gradient(135deg, #0B5D3B 0%, #0a4d32 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .admin-login-logo span {
          color: #ff5a3c;
          font-weight: 950;
          background: none;
          -webkit-text-fill-color: #ff5a3c;
        }
        .admin-login-logo-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4px;
        }
        .admin-login-logo-img {
          max-width: 160px;
          height: auto;
          margin-bottom: 16px;
        }
        .admin-login-subtitle {
          font-size: 0.9rem;
          color: #666;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }
        .admin-login-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: none;
          border: none;
          box-shadow: none;
          padding: 0;
        }
        .admin-login-form h1 {
          display: none;
        }
        .admin-login-error {
          color: #e53935;
          background: transparent;
          font-weight: 700;
          padding: 8px 0;
          border-radius: 0;
          margin-bottom: 12px;
          text-align: left;
          border: none;
          font-size: 0.95em;
          box-shadow: none;
        }
        .admin-login-form label {
          color: #071c1f;
          font-weight: 700;
          margin-bottom: 6px;
          font-size: 0.95em;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .admin-login-form input[type="email"],
        .admin-login-form input[type="password"],
        .admin-login-form input[type="text"] {
          border: 1px solid #dfe8e3;
          border-radius: 0;
          padding: 10px 12px;
          font-size: 1rem;
          margin-bottom: 0;
          transition: border 0.2s, box-shadow 0.2s;
          background: #fff;
          color: #071c1f;
        }
        .admin-login-form input[type="email"]:focus,
        .admin-login-form input[type="password"]:focus,
        .admin-login-form input[type="text"]:focus {
          outline: none;
          border-color: #0B5D3B;
          box-shadow: 0 0 0 2px rgba(11, 93, 59, 0.08);
        }
        .admin-login-form input.input-error {
          border: 1px solid #e53935 !important;
          background: #fff;
        }
        .admin-login-form input.input-error:focus {
          box-shadow: 0 0 0 2px rgba(229, 57, 53, 0.08);
        }
        .admin-login-password-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .admin-login-eye {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #0B5D3B;
          font-size: 1.15em;
          cursor: pointer;
          padding: 6px 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .admin-login-eye:hover {
          color: #ff5a3c;
          transform: translateY(-50%) scale(1.1);
        }
        .admin-login-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 0;
        }
        .admin-login-switch {
          display: flex;
          align-items: center;
          gap: 7px;
          font-weight: 600;
          cursor: pointer;
          user-select: none;
        }
        .admin-login-switch input {
          display: none;
        }
        .admin-login-switch .slider {
          width: 36px;
          height: 20px;
          background: #d9e0db;
          border: 1.5px solid #cdd6d1;
          border-radius: 20px;
          position: relative;
          transition: all 0.3s ease;
          margin-right: 2px;
        }
        .admin-login-switch input:checked + .slider {
          background: #0B5D3B;
          border-color: #0B5D3B;
        }
        .admin-login-switch .slider:before {
          content: "";
          position: absolute;
          left: 3px;
          top: 2px;
          width: 14px;
          height: 14px;
          background: #fff;
          border-radius: 50%;
          transition: transform 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .admin-login-switch input:checked + .slider:before {
          transform: translateX(16px);
        }
        .switch-label {
          font-size: 0.97em;
          color: #071c1f;
        }
        .admin-login-reset {
          color: #0B5D3B;
          font-weight: 700;
          font-size: 0.95em;
          text-decoration: none;
          margin-left: auto;
          transition: all 0.2s ease;
          position: relative;
          padding-bottom: 2px;
          border-bottom: 2px solid transparent;
        }
        .admin-login-reset:hover {
          color: #ff5a3c;
          border-bottom-color: #ff5a3c;
        }
        .theme-btn-1 {
          background-color: #0B5D3B;
          color: #fff;
          border: none;
          border-radius: 0;
          font-weight: 400;
          padding: 12px 20px;
          margin-top: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
          letter-spacing: 0px;
          display: block;
          width: 100%;
          text-align: center;
        }
        .theme-btn-1:hover:not(:disabled) {
          background-color: #0B5D3B;
          color: #fff;
        }
        .theme-btn-1:active:not(:disabled) {
          background-color: #0B5D3B;
        }
        .theme-btn-1:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        @media (max-width: 575px) {
          .admin-login-card {
            max-width: 100vw;
            padding: 0 12px;
          }
        }
      `}</style>
    </>
  );
}

export default AdminLogin;
