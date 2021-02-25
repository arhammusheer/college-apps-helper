import { useSession } from "next-auth/client";
import Head from "next/head";
import UnProtectedHomepage from "../components/Unprotected/UnProtectedHomepage";
import ProtectedHomepage from "../components/Protected/ProtectedHomepage";
import LoadingPage from "../components/Unprotected/LoadingPage";
import Navbar from "../components/Protected/Navbar";

export default function Home() {
  const [session, loading] = useSession();

  const AuthFilter = () => {
    if (loading) {
      return <LoadingPage />;
    }
    if (session) {
      return (
        <div>
          <Navbar />
          <ProtectedHomepage />
        </div>
      );
    }
    return <UnProtectedHomepage />;
  };
  return (
    <div>
      <Head>
        <title>CollgR</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AuthFilter />
      </main>
    </div>
  );
}
