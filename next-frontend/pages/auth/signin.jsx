import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { csrfToken, providers, signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import LoadingPage from "../../components/Unprotected/LoadingPage";

export default function SignIn({ providers }) {
  const [session, loading] = useSession();
  const router = useRouter();
  if (session) {
    router.push("/");
  }
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <>
        <Flex justifyContent="end">
          <Spacer />
          <Button m={1} size="xs" variant="ghost">
            <ThemeSwitcher />
          </Button>
        </Flex>
        <Center h="90vh">
          <div>
            <Heading mb={5}>Sign in to your CollgR Account</Heading>

            <Box boxShadow="xl" p={4} borderRadius={"xl"}>
              {Object.values(providers).map((provider) => (
                <Box key={provider.name} m={3}>
                  <Button onClick={() => signIn(provider.id)} w="100%">
                    Sign in with {provider.name}
                  </Button>
                </Box>
              ))}
              <small>
                We're working on bringing more authentication services to CollgR
              </small>
            </Box>
          </div>
        </Center>
      </>
    </>
  );
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers(),
  };
};
