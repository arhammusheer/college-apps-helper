import Icon from "@chakra-ui/icon";
import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import { HiLibrary } from "react-icons/hi";
import { Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import Navbar from "../Protected/Navbar";

export default function UnProtectedHomepage() {
  return (
    <>
      <Navbar />
      <Center height="80vh" px={5}>
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <Box mt={["40vh", "30vh", 0]}>
            <Flex align="center">
              <Icon as={HiLibrary} w={50} h={50} />
              <Heading fontSize="6xl">CollgR</Heading>{" "}
            </Flex>

            <Text fontSize="3xl">Plan, prepare and Progress, Start here.</Text>
          </Box>
          <Box boxShadow="xl" p="3" borderRadius="xl" mt={[40, 0]}>
            <Heading bold>
              Your one stop for all your college applications
            </Heading>
            <Text mt={5}>
              Find official practice papers for SAT, ACT and IELTS for free
              right at one place.
            </Text>
            <Text mt={5}>
              Manage your college application, write your essays, store your
              documents and manage transcripts
            </Text>
            <Text mt={5}>Fulfill your dreams.</Text>
            <Link href="/api/auth/login">
              <Button
                mt={4}
                colorScheme="teal"
                size="lg"
                w={["100%", "75%", "50%"]}
              >
                Get Started Today
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
}
