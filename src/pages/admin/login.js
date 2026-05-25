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
        <form className="admin-login-form" onSubmit={handleSubmit} autoComplete="off">
          <h1>Admin Login</h1>
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
            placeholder="Email"
            autoComplete="email"
            required
          />
          <label htmlFor="admin-password">Password</label>
          <div className="admin-login-password-wrap">
            <input
              id="admin-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              autoComplete="current-password"
              required
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
          <button
            className="theme-btn-1 btn btn-block"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "LOGGING YOU IN..." : "LOGIN"}
          </button>
        </form>
      </main>
      <style jsx>{`
        .admin-login-plain {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7faf8;
        }
        .admin-login-form {
          width: 100%;
          max-width: 350px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: none;
          border: none;
          box-shadow: none;
          padding: 0;
        }
        .admin-login-form h1 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.5em;
          color: #0B5D3B;
          text-align: center;
        }
        .admin-login-error {
          color: #fff;
          background: #e53935;
          font-weight: 700;
          padding: 10px 14px;
          border-radius: 0;
          margin-bottom: 8px;
          text-align: center;
        }
        .admin-login-form label {
          color: #071c1f;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .admin-login-form input[type="email"],
        .admin-login-form input[type="password"],
        .admin-login-form input[type="text"] {
          border: 1px solid #dfe8e3;
          border-radius: 0;
          padding: 10px 12px;
          font-size: 1rem;
          margin-bottom: 0;
        }
        .admin-login-password-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .admin-login-eye {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #0B5D3B;
          font-size: 1.1em;
          cursor: pointer;
          padding: 0 2px;
        }
        .theme-btn-1 {
          background: #0B5D3B;
          color: #fff;
          border: none;
          border-radius: 0;
          font-weight: 700;
          padding: 12px 0;
          margin-top: 8px;
          font-size: 1rem;
          transition: background 0.2s;
        }
        .theme-btn-1:disabled {
          opacity: 0.7;
        }
        @media (max-width: 575px) {
          .admin-login-form {
            max-width: 100vw;
            padding: 0 12px;
          }
        }
      `}</style>
    </>
  );
}

export default AdminLogin;
