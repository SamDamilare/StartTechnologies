import { Button, Icon, Text } from "@chakra-ui/react";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link as RouterLink } from "react-router-dom";

const BTHomeButton = () => {
  return (
    <Button
      as={RouterLink}
      to="/"
      bgColor="#440467"
      color="white"
      mt="8"
      leftIcon={<Icon as={HiArrowSmLeft} />}
    >
      <Text color="white">Back to Home</Text>
    </Button>
  );
};

export default BTHomeButton;
