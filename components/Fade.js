import { Fade, useDisclosure } from "@chakra-ui/react";

const FadeEffect = ({ children }) => {
  const { isOpen } = useDisclosure();

  return (
    <>
      <Fade in={true}>{children}</Fade>
    </>
  );
};

export default FadeEffect;
