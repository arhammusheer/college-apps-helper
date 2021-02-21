import Icon from "@chakra-ui/icon";
import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import { HiLibrary } from "react-icons/hi";
import { Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeSwitcher from "../ThemeSwitcher";

export default function UnProtectedHomepage() {
  return (
    <>
      <Flex justifyContent="end">
        <Spacer />
        <Button m={1} size="xs" variant="ghost">
          <ThemeSwitcher />
        </Button>
      </Flex>
      <Center height="90vh" px={5}>
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <Box mt={["40vh", "30vh", 0]}>
            <Flex align="center">
              <Icon as={HiLibrary} w={50} h={50} />
              <Heading fontSize="6xl">CollgR</Heading>{" "}
            </Flex>

            <Text fontSize="3xl">Plan, prepare and Progress, Start here.</Text>
          </Box>
          <Box boxShadow="xl" p="3" borderRadius="xl" mt={[40, 0]} mb={5}>
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
              <motion.div
                whileHover={{ scaleX: 0.99 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button mt={4} colorScheme="teal" size="lg" w="100%">
                  Get Started Today
                </Button>
              </motion.div>
            </Link>
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
}
