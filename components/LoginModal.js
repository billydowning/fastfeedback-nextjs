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
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import NextLink from "next/link";

const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const auth = useAuth();

  return (
    <>
      <Button
        variant="solid"
        size="md"
        colorScheme="blue"
        onClick={!auth.user ? onOpen : (e) => auth.signout()}
      >
        {!auth.user ? "Login" : "Logout"}
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent as="form" p={4} backgroundColor="#0A2540" color="#c0c0c0">
          <ModalCloseButton />
          <ModalBody>
            <VStack justifyContent="center" m="10px" alignItems="center">
              <Button
                colorScheme="blue"
                onClick={(e) => auth.signinWithGitHub()}
              >
                Sign In with Github
              </Button>
              <Button
                colorScheme="blue"
                onClick={(e) => auth.signinWithGoogle()}
              >
                Sign In with Google
              </Button>
            </VStack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
