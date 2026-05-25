import Head from "next/head";
import Link from "next/link";

function AdminResetLinkSent() {
  return (
    <>
      <Head>
        <title>Reset Link Sent | Sammy Realty</title>
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <section>
          <h1 style={{ marginBottom: "12px" }}>Reset link sent to your email</h1>
          <Link
            href="/admin/login"
            className="theme-btn-1 btn btn-effect-1"
            style={{ borderRadius: 0 }}
          >
            Back to login
          </Link>
        </section>
      </main>
    </>
  );
}

export default AdminResetLinkSent;
