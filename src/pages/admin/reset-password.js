import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

function AdminResetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setError("");

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
      <ToastContainer position="top-right" autoClose={1200} />

      <main className="admin-auth-page">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={5}>
              <section className="admin-auth-panel">
                <div className="text-center mb-30">
                  <h1>Reset Password</h1>
                  <p>Enter your admin email to receive a reset link.</p>
                </div>

                {error && (
                  <div className="admin-auth-error" role="alert">{error}</div>
                )}

                <form onSubmit={handleSubmit}>
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

                  <button 
                    className="theme-btn-1 btn btn-block" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SENDING..." : "SEND RESET LINK"}
                  </button>
                </form>

                <div className="admin-auth-link">
                  <Link href="/admin/login">Back to login</Link>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </main>

      <style jsx>{`
        .admin-auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #f7faf8;
          padding: 48px 0;
        }

        .admin-auth-panel {
          background: #ffffff;
          border: 1px solid #e6eee9;
          box-shadow: 0 18px 45px rgba(11, 93, 59, 0.08);
          padding: 36px;
        }

        .admin-auth-panel :global(.btn) {
          border-radius: 0;
        }

        .admin-auth-panel h1 {
          margin-bottom: 8px;
          font-size: 32px;
        }

        .admin-auth-panel p {
          margin-bottom: 0;
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

        .admin-auth-panel label {
          color: #071c1f;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .admin-auth-panel input[type="email"],
        .admin-auth-panel input[type="text"] {
          border: 1px solid #dfe8e3;
          border-radius: 0;
          margin-bottom: 18px;
          padding: 10px 12px;
          width: 100%;
          font-size: 1rem;
          transition: border 0.2s;
        }

        .admin-auth-panel input.input-error {
          border: 1px solid #e53935;
        }

        .admin-auth-link {
          margin-top: 22px;
          text-align: center;
        }

        .admin-auth-link a {
          color: #0b5d3b;
          font-weight: 700;
        }

        @media (max-width: 575px) {
          .admin-auth-page {
            padding: 24px 0;
          }

          .admin-auth-panel {
            padding: 28px 20px;
          }
        }
      `}</style>
    </>
  );
}

export default AdminResetPassword;
