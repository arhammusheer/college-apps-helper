import Logo from "../Unprotected/Logo";
import {
  Avatar,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
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
          <MenuItem>
            <Link href="/profile">
              <div>
                <Icon as={HiUser} />
                Profile
              </div>
            </Link>
          </MenuItem>
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
          <Avatar name={user.name} src={user.picture} />
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
    <Flex m={2} align="center">
      <Logo />
      <Spacer />
      <div>
        <Menu mt={4}>
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
