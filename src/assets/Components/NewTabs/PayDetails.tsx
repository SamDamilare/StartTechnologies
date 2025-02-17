import { Box, Center, Heading, Text } from "@chakra-ui/react";

const PayDetails = () => {
  return (
    <Center>
      <Box
        bg="white"
        width="400px"
        textAlign={"center"}
        borderRadius={"20px"}
        padding={"40px"}
        margin="50px"
      >
        <Heading>
          Thank you for showing
          <br />
          your interest
        </Heading>
        <Text>
          Kindly click{" "}
          <a href="https://form.jotform.com/250465914886570" target="_blank">
            here
          </a>{" "}
          to register and upload your receipt of payment made to the account
          details below.
        </Text>
        <Text>Velarix Solutions Limited</Text>
        <Text fontWeight={700}>Velarix Solutions Limited</Text>
        <Text>VFD Microfinance bank</Text>
        <Text>1036981830</Text>
      </Box>
    </Center>
  );
};

export default PayDetails;
