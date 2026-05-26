import Head from "next/head";
import Link from "next/link";

function AdminResetLinkSent() {
  return (
    <>
      <Head>
        <title>Reset Link Sent | Sammy Realty</title>
      </Head>

      <main className="admin-auth-page">
        <section className="admin-auth-panel">
          <img src="/img/main-logo.png" alt="Sammy Realty" className="admin-auth-logo" />
          <h1>Reset Link Sent</h1>
          <p>Check your email for the admin password reset instructions.</p>
          <Link href="/admin/login" className="admin-auth-button">
            Back to login
          </Link>
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
          text-align: center;
        }

        .admin-auth-panel {
          background: #ffffff;
          border: 1px solid #e6eee9;
          box-shadow: 0 18px 45px rgba(11, 93, 59, 0.08);
          box-sizing: border-box;
          padding: clamp(28px, 6vw, 44px) clamp(18px, 5vw, 40px);
          width: min(100%, 480px);
        }

        .admin-auth-logo {
          width: min(140px, 48vw);
          height: auto;
          margin-bottom: 16px;
        }

        .admin-auth-panel h1 {
          color: #071c1f;
          font-size: clamp(28px, 6vw, 34px);
          line-height: 1.15;
          letter-spacing: 0;
          margin-bottom: 10px;
        }

        .admin-auth-panel p {
          color: #5c727d;
          font-size: 1rem;
          line-height: 1.55;
          margin: 0 auto 24px;
          max-width: 340px;
        }

        :global(.admin-auth-button) {
          align-items: center;
          background-color: #0b5d3b;
          border-radius: 0;
          box-sizing: border-box;
          color: #ffffff;
          display: inline-flex;
          font-size: 1rem;
          font-weight: 400;
          justify-content: center;
          letter-spacing: 0;
          min-height: 48px;
          padding: 13px 24px;
          text-decoration: none;
          width: min(100%, 220px);
        }

        :global(.admin-auth-button:hover) {
          color: #ffffff;
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

        @media (max-height: 500px) and (max-width: 575px) {
          .admin-auth-panel {
            justify-content: flex-start;
          }
        }
      `}</style>
    </>
  );
}

export default AdminResetLinkSent;
