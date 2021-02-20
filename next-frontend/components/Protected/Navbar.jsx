import Logo from "../Unprotected/Logo";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import ThemeSwitcher from "../ThemeSwitcher";
import { HiLogin, HiLogout, HiUser } from "react-icons/hi";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0";

export default function Navbar() {
  const { user } = useUser();
  const MenuItems = () => {
    if (user) {
      return (
        <>
          <Link href="/profile">
            <MenuItem>
              <div>
                <Icon as={HiUser} />
                Profile
              </div>
            </MenuItem>
          </Link>
          <Link href="/api/auth/logout">
            <MenuItem>
              <div>
                <Icon as={HiLogout} />
                Logout
              </div>
            </MenuItem>
          </Link>
        </>
      );
    } else {
      return (
        <Link href="/api/auth/login">
          <MenuItem>
            <div>
              <Icon as={HiLogin} />
              Login
            </div>
          </MenuItem>
        </Link>
      );
    }
  };
  const MenuButtons = () => {
    if (user) {
      return (
        <MenuButton>
          <Flex align="center" boxShadow="lg" p={2} borderRadius="lg">
            <Text>{user.name}</Text>&nbsp;
            <Avatar src={user.picture} />
          </Flex>
        </MenuButton>
      );
    } else {
      return (
        <MenuButton as={Button}>
          <Icon as={FaBars} />
        </MenuButton>
      );
    }
  };
  return (
    <Flex m={0.5} align="center">
      <Logo />
      <Spacer />
      <div>
        <Menu>
          <MenuButtons />
          <MenuList>
            <MenuItem>
              <ThemeSwitcher />
            </MenuItem>
            <MenuItems />
          </MenuList>
        </Menu>
      </div>
    </Flex>
  );
}
