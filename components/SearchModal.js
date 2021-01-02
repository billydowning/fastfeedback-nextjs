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
  Select,
} from "@chakra-ui/react";

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();

  return (
    <>
      <Button variant="solid" size="md" onClick={onOpen}>
        Explore YrLang
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={4} backgroundColor="#0A2540" color="#c0c0c0">
          <ModalHeader fontweight="bold">Search for a Provider</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select placeholder="Select your city" mr={4} mb={4}>
              <option value="Berlin">Berlin</option>
              <option value="Paris">Paris</option>
              <option value="New York">New York</option>
            </Select>

            <Select placeholder="Select your native language" mr={4} mb={4}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Chinese">Mandarin Chinese</option>
              <option value="Hindi">Hindi</option>
            </Select>

            <Select placeholder="Select your service area" mr={4}>
              <option value="Medical">Medical</option>
              <option value="Legal">Legal</option>
              <option value="Financial">Financial</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Search
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
