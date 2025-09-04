import {
  Box,
  Heading,
  Text,
  VStack,
  ListItem,
  UnorderedList,
  Container,
} from "@chakra-ui/react";

const CookiesP = () => {
  return (
    <Box
      // bg="gray.900"
      // color="gray.100"
      minH="100vh"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
    >
      <Container maxW="container.md" p={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 8, md: 12 }} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" mb={4} textAlign="center">
              Cookies Policy
            </Heading>
            <Text textAlign="center" fontSize="sm" color="gray.400" mb={8}>
              Effective Date: March 1, 2024
            </Text>

            <Text mb={4}>
              Velarix Solutions (“Velarix Solutions,” “us,” “we,” or “our”) uses
              cookies, web beacons, and similar technologies (“cookies and
              related technologies”) on velarix.com.ng and any affiliated
              platforms (collectively, the “Site”).
            </Text>
            <Text mb={6}>This Cookies Policy explains:</Text>
            <UnorderedList mb={6} spacing={2}>
              <ListItem>What cookies and related technologies are.</ListItem>
              <ListItem>How we use them.</ListItem>
              <ListItem>How third parties may use them.</ListItem>
              <ListItem>
                Your rights and choices in accordance with Nigerian data
                protection laws, including the Nigeria Data Protection Act
                (NDPA).
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              1. What Are Cookies and Related Technologies?
            </Heading>
            <Text mb={2}>
              Cookies are small text files stored on your browser or device when
              you visit a website. They allow the Site to recognize your device,
              remember preferences, and enhance your experience.
            </Text>
            <Text mb={2} fontWeight="bold">
              Types of Cookies:
            </Text>
            <UnorderedList mb={4} ml={6} spacing={2}>
              <ListItem>
                <Text fontWeight="bold">Session cookies:</Text> Temporary,
                deleted when you close your browser.
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">Persistent cookies:</Text> Remain on
                your device until deleted or expire.
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">Web beacons:</Text> Small graphic files
                that track usage and behavior.
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              2. How Velarix Solutions Uses Cookies
            </Heading>
            <Text mb={2}>We use cookies to:</Text>
            <UnorderedList mb={4} spacing={2}>
              <ListItem>Identify and authenticate users.</ListItem>
              <ListItem>Improve security and prevent fraud.</ListItem>
              <ListItem>
                Understand visitor behavior for analytics and service
                improvement.
              </ListItem>
              <ListItem>
                Personalize content and remember preferences (e.g., language or
                location).
              </ListItem>
              <ListItem>Measure marketing effectiveness.</ListItem>
            </UnorderedList>
            <Text mb={2} fontWeight="bold">
              Categories of Cookies We Use:
            </Text>
            <UnorderedList mb={4} ml={6} spacing={2}>
              <ListItem>
                <Text fontWeight="bold">Essential cookies</Text> – Required for
                site operation, login security, and account authentication.
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">Analytical/performance cookies</Text> –
                Measure visitor numbers, navigation patterns, and engagement to
                improve our Site.
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">Functionality cookies</Text> – Remember
                preferences, such as language, time zone, and display settings.
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">Targeting/advertising cookies</Text> –
                Deliver relevant ads and track campaign performance.
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              3. Third-Party Cookies and Technologies
            </Heading>
            <Text mb={2}>
              We may allow trusted third parties (e.g., analytics providers,
              advertising partners) to place cookies to:
            </Text>
            <UnorderedList mb={4} spacing={2}>
              <ListItem>
                Track usage for analytics (Google Analytics, etc.).
              </ListItem>
              <ListItem>Measure and optimize marketing campaigns.</ListItem>
              <ListItem>
                Provide integrated services like chat support or video content.
              </ListItem>
            </UnorderedList>
            <Text>
              These third parties are bound by confidentiality and data
              protection obligations under Nigerian law.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              4. Your Rights and Choices
            </Heading>
            <Text mb={2}>You can:</Text>
            <UnorderedList mb={4} spacing={2}>
              <ListItem>Manage cookies via browser settings.</ListItem>
              <ListItem>
                Block certain cookies but note this may limit some features.
              </ListItem>
              <ListItem>
                Withdraw consent to non-essential cookies at any time through
                our “Manage Cookie Preferences” tool.
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              5. Legal Compliance
            </Heading>
            <Text mb={4}>
              We comply with the Nigeria Data Protection Act (NDPA) and any
              applicable regional laws on cookies and online tracking.
            </Text>
            <Text>
              For more details on how we process your data, please read our
              Privacy Notice.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default CookiesP;
