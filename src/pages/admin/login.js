import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { isAdminAuthenticated, setAdminAuthenticated } from "@/admin/lib/auth";

function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!router.isReady || !isAdminAuthenticated()) return;
    router.replace("/admin");
  }, [router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        setError("Server error: Invalid response format");
        setIsSubmitting(false);
        console.error("Response content type:", contentType);
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Store user data and set authenticated
      localStorage.setItem("adminUser", JSON.stringify(data.user));
      localStorage.setItem("adminToken", data.user.id.toString());
      setAdminAuthenticated(rememberMe);

      toast.success("Login successful");
      setTimeout(() => {
        router.replace("/admin");
      }, 1000);
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login | Sammy Realty</title>
      </Head>
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
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7faf8;
          box-sizing: border-box;
          overflow-y: auto;
          padding: clamp(18px, 5vw, 48px);
        }
        .admin-login-card {
          background: #fff;
          border: 1.5px solid #d0dbd5;
          box-shadow: 0 12px 32px rgba(11, 93, 59, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
          border-radius: 0;
          padding: clamp(28px, 6vw, 48px) clamp(18px, 5vw, 40px) clamp(26px, 5vw, 40px);
          width: min(100%, 420px);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }
        .admin-login-logo-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2px;
        }
        .admin-login-logo-img {
          width: min(150px, 52vw);
          height: auto;
          margin-bottom: 14px;
        }
        .admin-login-subtitle {
          font-size: 0.9rem;
          color: #666;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0;
          margin: 0;
          text-align: center;
        }
        .admin-login-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: none;
          border: none;
          box-shadow: none;
          padding: 0;
          min-width: 0;
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
          letter-spacing: 0;
        }
        .admin-login-form input[type="email"],
        .admin-login-form input[type="password"],
        .admin-login-form input[type="text"] {
          border: 1px solid #dfe8e3;
          border-radius: 0;
          padding: 12px 12px;
          width: 100%;
          min-height: 56px;
          font-size: 1rem;
          letter-spacing: 0;
          margin-bottom: 0;
          transition: border 0.2s, box-shadow 0.2s;
          background: #fff;
          color: #071c1f;
          box-sizing: border-box;
          text-transform: none;
        }
        .admin-login-form input::placeholder {
          letter-spacing: 0;
          text-transform: none;
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
        .admin-login-password-wrap input {
          padding-right: 46px;
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
          gap: 12px;
          margin-bottom: 0;
          min-width: 0;
        }
        .admin-login-switch {
          display: flex;
          align-items: center;
          gap: 7px;
          font-weight: 600;
          cursor: pointer;
          user-select: none;
          min-width: 0;
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
          line-height: 1.2;
        }
        .admin-login-options :global(.admin-login-reset) {
          color: #0B5D3B;
          font-weight: 700;
          font-size: 0.95em;
          text-decoration: none;
          margin-left: auto;
          transition: all 0.2s ease;
          position: relative;
          padding-bottom: 2px;
          border-bottom: 2px solid transparent;
          line-height: 1.2;
          white-space: nowrap;
        }
        .admin-login-options :global(.admin-login-reset:hover) {
          color: #ff5a3c;
          border-bottom-color: #ff5a3c;
        }
        .theme-btn-1 {
          background-color: #0B5D3B;
          color: #fff;
          border: none;
          border-radius: 0;
          font-weight: 400;
          padding: 13px 20px;
          margin-top: 6px;
          min-height: 48px;
          font-size: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
          letter-spacing: 0;
          display: block;
          width: 100%;
          text-align: center;
          box-sizing: border-box;
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
          .admin-login-plain {
            align-items: flex-start;
            padding: 16px;
          }

          .admin-login-card {
            width: 100%;
            min-height: calc(100dvh - 32px);
            justify-content: center;
            padding: 24px 18px;
          }
        }

        @media (max-width: 360px) {
          .admin-login-plain {
            padding: 10px;
          }

          .admin-login-card {
            min-height: calc(100dvh - 20px);
            padding: 20px 12px;
          }

          .admin-login-form {
            gap: 13px;
          }

          .admin-login-logo-img {
            width: min(150px, 55vw);
            margin-bottom: 10px;
          }

          .admin-login-subtitle,
          .switch-label,
          .admin-login-options :global(.admin-login-reset) {
            font-size: 0.88rem;
          }
        }

        @media (max-width: 330px) {
          .admin-login-options {
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-login-options :global(.admin-login-reset) {
            margin-left: 0;
          }
        }

        @media (max-height: 620px) and (max-width: 575px) {
          .admin-login-card {
            justify-content: flex-start;
          }

          .admin-login-form input[type="email"],
          .admin-login-form input[type="password"],
          .admin-login-form input[type="text"] {
            min-height: 52px;
          }

          .theme-btn-1 {
            min-height: 46px;
          }
        }
      `}</style>
    </>
  );
}

export default AdminLogin;
