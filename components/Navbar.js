import React from "react";
import NextLink from "next/link";
import { Flex, Stack, Link, Input, Avatar } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import Image from "next/image";
import LoginModal from "@/components/LoginModal";

const Navbar = () => {
  const auth = useAuth();

  const renderInbox = () => {
    if (auth.user) {
      return (
        <>
          <Link>Messages</Link>
          <NextLink href="/" passHref>
            <Link>
              <Avatar mr="20px" size="sm" src={auth.user?.photoUrl} />
            </Link>
          </NextLink>
        </>
      );
      return <></>;
    }
  };

  return (
    <Flex justifyContent="flex-start" flexDirection="column">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#0A2540"
        border="1px solid #C3C3C3"
        height="10vh"
      >
        <Stack spacing={10} isInline alignItems="center" ml={8}>
          <NextLink href="/" passHref>
            <Link>
              <Image src="/doglogo.png" height="64" width="64" />
            </Link>
          </NextLink>
          <Input placeholder="Search" variant="outline" color="#c0c0c0" />
        </Stack>
        <Stack spacing={8} isInline alignItems="center" color="#dbdbdb" mr={8}>
          <Link>Join Us</Link>
          <Link>Community</Link>
          <Link>Support</Link>
          {renderInbox()}
          <LoginModal />
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
