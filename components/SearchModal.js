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
import { useForm } from "react-hook-form";
import { useAuth } from "@/lib/auth";
import { createAppt } from "@/lib/db";
import Picker from "@/components/Datepicker";

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = useRef();
  const auth = useAuth();
  const { register, errors, handleSubmit, watch } = useForm();

  const onCreateAppt = ({ city, language, service, name, date }) => {
    createAppt({
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      date,
      city,
      language,
      service,
    });
    toast({
      title: "Success!",
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button variant="solid" size="md" onClick={onOpen} colorScheme="blue">
        Explore YrLang
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          as="form"
          p={4}
          backgroundColor="#0A2540"
          color="#c0c0c0"
          onSubmit={handleSubmit(onCreateAppt)}
        >
          <ModalHeader fontWeight="bold">Create An Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Name:</FormLabel>
            <Input
              id="full-name"
              placeholder="Enter your full name"
              name="name"
              ref={register({
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.firstName && "Name is required"}
            <FormLabel>Date:</FormLabel>
            <Input
              id="date"
              placeholder="mm/dd/yyyy"
              name="date"
              ref={register({
                pattern: /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/,
              })}
            />
            <FormLabel>City:</FormLabel>
            <Select
              placeholder="Select your city"
              mr={4}
              mb={4}
              name="city"
              ref={register({ required: true })}
            >
              <option value="Berlin">Berlin</option>
              <option value="Paris">Paris</option>
              <option value="New York">New York</option>
            </Select>
            <FormLabel>Native Language:</FormLabel>
            <Select
              placeholder="Select your native language"
              mr={4}
              mb={4}
              name="language"
              ref={register({ required: true })}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Chinese">Mandarin Chinese</option>
              <option value="Hindi">Hindi</option>
            </Select>
            <FormLabel>Service Area:</FormLabel>
            <Select
              placeholder="Select your service area"
              mr={4}
              name="service"
              ref={register({ required: true })}
            >
              <option value="Medical">Medical</option>
              <option value="Legal">Legal</option>
              <option value="Financial">Financial</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} color="#111111" m={2}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              Create Appointment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
