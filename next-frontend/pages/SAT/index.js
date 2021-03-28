import { signIn, useSession } from "next-auth/client";
import LoadingPage from "../../components/Unprotected/LoadingPage";
import Navbar from "../../components/Protected/Navbar";

export default function SAT() {
  const [session, loading] = useSession();
  if (loading) {
    return <LoadingPage />;
  }
  if (session) {
    return (
      <>
        <Navbar />
      </>
    );
  }
  return signIn();
}
