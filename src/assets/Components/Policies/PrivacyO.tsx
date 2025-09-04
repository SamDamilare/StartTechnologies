import {
  Box,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";

const PrivacyO = () => {
  return (
    <Box
      //   bg="gray.900"
      //   color="gray.100"
      minH="100vh"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
    >
      <Container maxW="container.md" p={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 8, md: 12 }} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" mb={4} textAlign="center">
              Velarix Solutions Privacy Policy
            </Heading>
            <Text textAlign="center" fontSize="sm" color="gray.400" mb={8}>
              Effective Date: 1 September 2025
            </Text>

            <Text mb={4}>
              Velarix Solutions (“we”, “our”, or “us”) is committed to
              protecting and respecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you interact with our website, mobile
              applications, products, and services (“Services”).
            </Text>
            <Text mb={6}>
              By using our Services, you agree to the terms of this Privacy
              Policy. If you do not agree, please discontinue use immediately.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              1. Information We Collect
            </Heading>
            <Text mb={2}>
              We may collect the following categories of information:
            </Text>
            <Heading as="h3" size="md" mb={2}>
              A. Information You Provide Directly
            </Heading>
            <UnorderedList mb={4} spacing={1}>
              <ListItem>
                Full name, email address, phone number, and contact details
              </ListItem>
              <ListItem>
                Payment and billing information (processed securely via payment
                partners)
              </ListItem>
              <ListItem>Login credentials and account information</ListItem>
              <ListItem>
                Any data you submit through forms, customer support, or surveys
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              B. Information Collected Automatically
            </Heading>
            <UnorderedList mb={4} spacing={1}>
              <ListItem>
                IP address, browser type, device information, operating system
              </ListItem>
              <ListItem>Geolocation data (if enabled)</ListItem>
              <ListItem>
                Usage data such as pages visited, features used, and
                interactions
              </ListItem>
              <ListItem>
                Cookies, web beacons, and tracking technologies
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              C. Information from Third Parties
            </Heading>
            <UnorderedList mb={4} spacing={1}>
              <ListItem>
                Data from social media platforms (if you connect accounts)
              </ListItem>
              <ListItem>
                Payment processors, marketing partners, or publicly available
                sources
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              2. How We Use Your Information
            </Heading>
            <Text mb={2}>We process your data for the following purposes:</Text>
            <UnorderedList mb={4} spacing={1}>
              <ListItem>To provide and maintain our Services</ListItem>
              <ListItem>
                To verify your identity and manage your account
              </ListItem>
              <ListItem>
                To process transactions and send payment confirmations
              </ListItem>
              <ListItem>
                To respond to your inquiries and provide customer support
              </ListItem>
              <ListItem>
                To personalise your experience and improve our Services
              </ListItem>
              <ListItem>
                To send service updates, promotions, and marketing
                communications (you can opt-out at any time)
              </ListItem>
              <ListItem>
                To comply with legal obligations and prevent fraud or abuse
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              3. Legal Basis for Processing
            </Heading>
            <Text mb={2}>
              Under the Nigerian Data Protection Regulation (NDPR) and GDPR, we
              rely on the following legal grounds:
            </Text>
            <UnorderedList mb={4} spacing={1}>
              <ListItem>Your consent</ListItem>
              <ListItem>Performance of a contract</ListItem>
              <ListItem>Compliance with a legal obligation</ListItem>
              <ListItem>
                Our legitimate interests (improving services, fraud prevention,
                business analytics)
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              4. Cookies & Tracking Technologies
            </Heading>
            <Text mb={2}>We use cookies and similar technologies to:</Text>
            <UnorderedList mb={4} spacing={1}>
              <ListItem>Remember your preferences and settings</ListItem>
              <ListItem>Analyse site traffic and user behaviour</ListItem>
              <ListItem>Improve user experience</ListItem>
              <ListItem>Deliver targeted advertisements</ListItem>
            </UnorderedList>
            <Text>
              You can manage cookies via your browser settings. For details, see
              our Cookies Policy.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              5. Data Sharing & Disclosure
            </Heading>
            <Text mb={2}>We may share your information with:</Text>
            <UnorderedList mb={4} spacing={1}>
              <ListItem>
                Service providers (payment gateways, hosting, analytics,
                marketing)
              </ListItem>
              <ListItem>
                Legal authorities if required by law or to protect rights,
                property, or safety
              </ListItem>
              <ListItem>Business partners with your consent</ListItem>
              <ListItem>
                In the event of a merger, acquisition, or sale, your data may be
                transferred to the new entity
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              6. Data Retention
            </Heading>
            <Text mb={4}>
              We retain your personal data only for as long as necessary for the
              purposes stated in this policy, unless a longer retention period
              is required by law.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              7. Data Security
            </Heading>
            <Text mb={4}>
              We implement appropriate technical and organisational measures to
              safeguard your personal information from unauthorised access,
              disclosure, alteration, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              8. Your Data Protection Rights
            </Heading>
            <Text mb={2}>
              Under NDPR and applicable laws, you have the right to:
            </Text>
            <UnorderedList mb={4} spacing={1}>
              <ListItem>Access your personal data</ListItem>
              <ListItem>Request correction of inaccurate data</ListItem>
              <ListItem>Request deletion of your data</ListItem>
              <ListItem>Withdraw consent at any time</ListItem>
              <ListItem>Object to certain processing activities</ListItem>
              <ListItem>Request data portability</ListItem>
            </UnorderedList>
            <Text>
              To exercise these rights, contact us at privacy@velarix.com.ng
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              9. International Data Transfers
            </Heading>
            <Text mb={4}>
              If we transfer your data outside Nigeria, we ensure appropriate
              safeguards are in place to protect your privacy.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              10. Children’s Privacy
            </Heading>
            <Text mb={4}>
              Our Services are not intended for children under 18. We do not
              knowingly collect personal data from children.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              11. Changes to This Privacy Policy
            </Heading>
            <Text mb={4}>
              We may update this policy from time to time. Updates will be
              posted on this page with a revised “Effective Date.”
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              12. Contact Us
            </Heading>
            <Text mb={2}>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us:
            </Text>
            <Text mb={1}>
              <Text as="span" fontWeight="bold">
                Velarix Solutions
              </Text>
            </Text>
            <Text mb={1}>
              <Text as="span" fontWeight="bold">
                Email:
              </Text>{" "}
              privacy@velarix.com.ng
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                Website:
              </Text>{" "}
              www.velarix.com.ng
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default PrivacyO;
