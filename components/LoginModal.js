import { React, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import NextLink from "next/link";

const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const auth = useAuth();

  return (
    <>
      <Button variant="solid" size="md" onClick={onOpen}>
        Login
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent as="form" p={4} backgroundColor="#0A2540" color="#0A2540">
          <ModalHeader fontWeight="bold">Search for a Provider</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {auth.user ? (
              <>
                <Button onClick={(e) => auth.signout()}>Sign Out</Button>
                <Button>
                  <NextLink href="/dashboard" passHref>
                    Dashboard
                  </NextLink>
                </Button>
              </>
            ) : (
              <div>
                <Button
                  style={{ margin: "10px" }}
                  onClick={(e) => auth.signinWithGitHub()}
                >
                  Sign In with Github
                </Button>
                <Button
                  style={{ margin: "10px" }}
                  onClick={(e) => auth.signinWithGoogle()}
                >
                  Sign In with Google
                </Button>
              </div>
            )}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
