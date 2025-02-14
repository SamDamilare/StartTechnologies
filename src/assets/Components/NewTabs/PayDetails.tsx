import { Box, Heading, Text } from "@chakra-ui/react";

const PayDetails = () => {
  return (
    <Box
      bg="white"
      width="400px"
      textAlign={"center"}
      borderRadius={"40px"}
      padding={"40px"}
    >
      <Heading>Payment Details</Heading>
      <Text>Kindly make payment into the account details</Text>
      <Text>Velarix Solutions Limited</Text>
      <Text fontWeight={700}>Velarix Solutions Limited</Text>
      <Text>VFD Microfinance bank</Text>
      <Text>1036981830</Text>
    </Box>
  );
};

export default PayDetails;
