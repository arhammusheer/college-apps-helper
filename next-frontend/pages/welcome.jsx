import { signIn, useSession } from "next-auth/client";
import Navbar from "../components/Protected/Navbar";
import LoadingPage from "../components/Unprotected/LoadingPage";

export default function welcome() {
  const [session, loading] = useSession();
  if (session) {
    return (
      <>
        <Navbar />
      </>
    );
  }
  if (loading) {
    return <LoadingPage />;
  }
  return signIn();
}
