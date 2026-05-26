import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function AdminResetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resetToken = typeof router.query.token === "string" ? router.query.token : "";
  const isTokenMode = Boolean(resetToken);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setError("");

    if (isTokenMode) {
      if (!newPassword || newPassword.length < 8) {
        setError("Password must be at least 8 characters.");
        return;
      }

      if (newPassword !== confirmPassword) {
        setError("Passwords must match.");
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch("/api/admin/confirm-password-reset", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: resetToken, newPassword }),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || "Failed to reset password.");
          setIsSubmitting(false);
          return;
        }

        toast.success("Password reset successfully.");
        setTimeout(() => {
          router.push("/admin/login");
        }, 1200);
      } catch (err) {
        console.error("Confirm reset password error:", err);
        setError("Network error. Please try again.");
        setIsSubmitting(false);
      }
      return;
    }

    if (!email) {
      setError("Email is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
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
        setError(data.error || "Failed to send reset link.");
        setIsSubmitting(false);
        return;
      }

      // Show success message
      toast.success("Reset link sent! Check your email.");
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push("/admin/login");
      }, 2000);
    } catch (err) {
      console.error("Reset password error:", err);
      setError("Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Reset Admin Password | Sammy Realty</title>
      </Head>

      <main className="admin-auth-page">
        <section className="admin-auth-panel">
          <div className="admin-auth-heading">
            <img src="/img/main-logo.png" alt="Sammy Realty" className="admin-auth-logo" />
            <h1>{isTokenMode ? "Create New Password" : "Reset Password"}</h1>
            <p>{isTokenMode ? "Enter a new admin password." : "Enter your admin email to receive a reset link."}</p>
          </div>

          {error && (
            <div className="admin-auth-error" role="alert">{error}</div>
          )}

          <form className="admin-auth-form" onSubmit={handleSubmit}>
            {isTokenMode ? (
              <>
                <label htmlFor="new-password">New Password</label>
                <input
                  id="new-password"
                  type="password"
                  name="newPassword"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  placeholder="Enter new password"
                  autoComplete="new-password"
                  required
                  className={error ? "input-error" : ""}
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  id="confirm-password"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                  required
                  className={error ? "input-error" : ""}
                />
              </>
            ) : (
              <>
                <label htmlFor="reset-email">Email</label>
                <input
                  id="reset-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your admin email"
                  autoComplete="email"
                  required
                  className={error ? "input-error" : ""}
                />
              </>
            )}

            <button
              className="theme-btn-1 btn btn-block"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "PLEASE WAIT..." : isTokenMode ? "RESET PASSWORD" : "SEND RESET LINK"}
            </button>
          </form>

          <div className="admin-auth-link">
            <Link href="/admin/login">Back to login</Link>
          </div>
        </section>
      </main>

      <style jsx>{`
        .admin-auth-page {
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

        .admin-auth-panel {
          background: #ffffff;
          border: 1px solid #e6eee9;
          box-shadow: 0 18px 45px rgba(11, 93, 59, 0.08);
          box-sizing: border-box;
          padding: clamp(28px, 6vw, 44px) clamp(18px, 5vw, 40px);
          width: min(100%, 480px);
        }

        .admin-auth-panel :global(.btn) {
          border-radius: 0;
        }

        .admin-auth-heading {
          text-align: center;
          margin-bottom: 28px;
        }

        .admin-auth-logo {
          width: min(140px, 48vw);
          height: auto;
          margin-bottom: 16px;
        }

        .admin-auth-panel h1 {
          margin-bottom: 8px;
          color: #071c1f;
          font-size: clamp(28px, 6vw, 34px);
          line-height: 1.15;
          letter-spacing: 0;
        }

        .admin-auth-panel p {
          margin-bottom: 0;
          color: #5c727d;
          font-size: 1rem;
          line-height: 1.55;
        }

        .admin-auth-error {
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

        .admin-auth-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .admin-auth-panel label {
          color: #071c1f;
          font-weight: 700;
          margin-bottom: 0;
          letter-spacing: 0;
        }

        .admin-auth-panel input[type="email"],
        .admin-auth-panel input[type="password"],
        .admin-auth-panel input[type="text"] {
          border: 1px solid #dfe8e3;
          border-radius: 0;
          margin-bottom: 0;
          min-height: 56px;
          padding: 12px;
          width: 100%;
          font-size: 1rem;
          letter-spacing: 0;
          transition: border 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }

        .admin-auth-panel input::placeholder {
          letter-spacing: 0;
        }

        .admin-auth-panel input.input-error {
          border: 1px solid #e53935;
        }

        .admin-auth-panel input:focus {
          outline: none;
          border-color: #0b5d3b;
          box-shadow: 0 0 0 2px rgba(11, 93, 59, 0.08);
        }

        .theme-btn-1 {
          background-color: #0b5d3b;
          border: none;
          border-radius: 0;
          box-sizing: border-box;
          color: #ffffff;
          cursor: pointer;
          display: block;
          font-size: 1rem;
          font-weight: 400;
          letter-spacing: 0;
          margin-top: 6px;
          min-height: 48px;
          padding: 13px 20px;
          text-align: center;
          width: 100%;
        }

        .theme-btn-1:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .admin-auth-link {
          margin-top: 22px;
          text-align: center;
        }

        .admin-auth-link a {
          color: #0b5d3b;
          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 575px) {
          .admin-auth-page {
            align-items: flex-start;
            padding: 16px;
          }

          .admin-auth-panel {
            min-height: calc(100dvh - 32px);
            padding: 26px 18px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }

        @media (max-width: 360px) {
          .admin-auth-page {
            padding: 10px;
          }

          .admin-auth-panel {
            min-height: calc(100dvh - 20px);
            padding: 22px 12px;
          }

          .admin-auth-logo {
            width: min(150px, 55vw);
          }
        }

        @media (max-height: 560px) and (max-width: 575px) {
          .admin-auth-panel {
            justify-content: flex-start;
          }
        }
      `}</style>
    </>
  );
}

export default AdminResetPassword;
