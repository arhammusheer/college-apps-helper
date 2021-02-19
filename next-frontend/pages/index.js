import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import ProtectedHomepage from "../components/Protected/ProtectedHomepage";
import UnProtectedHomepage from "../components/Unprotected/UnProtectedHomepage";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const AuthFilter = () => {
    if (user) {
      return <ProtectedHomepage />;
    }
    if (error) return <div>{error}</div>;
    return <UnProtectedHomepage />;
  };
  return (
    <div>
      <Head>
        <title>Collgr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AuthFilter />
      </main>
    </div>
  );
}
