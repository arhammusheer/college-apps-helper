import { useSession } from "next-auth/client";
import Head from "next/head";
import UnProtectedHomepage from "../components/Unprotected/UnProtectedHomepage";
import ProtectedHomepage from "../components/Protected/ProtectedHomepage";
import LoadingPage from "../components/Unprotected/LoadingPage";

export default function Home() {
  const [session, loading] = useSession();

  const AuthFilter = () => {
    if (loading) {
      return <LoadingPage />;
    }
    if (session) {
      return <ProtectedHomepage />;
    }
    return <UnProtectedHomepage />;
  };
  return (
    <div>
      <Head>
        <title>CollgR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AuthFilter />
      </main>
    </div>
  );
}
