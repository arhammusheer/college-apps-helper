import Icon from "@chakra-ui/icon";
import {
  Box,
  Center,
  Container,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { HiLibrary } from "react-icons/hi";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import Navbar from "../Protected/Navbar";

export default function UnProtectedHomepage() {
  return (
    <>
      <Navbar />
      <Container>
        <Wrap>
          <WrapItem>
            <Text fontSize="2xl">Plan, prepare and Progress, Start here.</Text>
          </WrapItem>
          <WrapItem>
            <Box borderRadius="md" mt={10}>
              <Text>
                Find official practice papers for SAT, ACT and IELTS for free
                right at one place.
              </Text>
              <Text mt={5}>
                Manage your college application, write your essays, store your
                documents and manage transcripts
              </Text>
            </Box>
          </WrapItem>
        </Wrap>
      </Container>

      <Center>
        <div>
          <Box
            mt={10}
            boxShadow="xl"
            
            p="3"
            borderRadius="xl"
          >
            <Text fontSize="xl">Fulfill your dreams.</Text>
            <Link href="/api/auth/login">
              <Button my={4} colorScheme="purple">Get Started Today</Button>
            </Link>
          </Box>
        </div>
      </Center>
    </>
  );
}
