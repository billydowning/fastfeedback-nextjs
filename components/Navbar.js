import React from "react";
import NextLink from "next/link";
import { Flex, Stack, Link, Input, Avatar } from "@chakra-ui/react";
import DogLogo from "@/components/DogLogo";

import { useAuth } from "@/lib/auth";

const Navbar = () => {
  const auth = useAuth();

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
              <DogLogo h="64" w="64" />
            </Link>
          </NextLink>
          <Input placeholder="Search" variant="outline" color="#c0c0c0" />
        </Stack>
        <Stack spacing={8} isInline alignItems="center" color="#dbdbdb" mr={8}>
          <Link>Join Us</Link>
          <Link>Community</Link>
          <Link>Support</Link>
          <Link>Messages</Link>
          <NextLink href="/" passHref>
            <Link>
              <Avatar mr="20px" size="sm" src={auth.user?.photoUrl} />
            </Link>
          </NextLink>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
