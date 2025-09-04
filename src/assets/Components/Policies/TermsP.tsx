import {
  Box,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";

const TermsP = () => {
  return (
    <div>
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
                Velarix Solutions Terms of Service
              </Heading>
              <Text textAlign="center" fontSize="sm" color="gray.400" mb={8}>
                Effective Date: March 1, 2024
              </Text>

              <Text mb={4}>
                These Terms of Service (“Terms”) govern your use of the
                websites, mobile applications, and services operated by Velarix
                Solutions Ltd. (“Velarix Solutions,” “us,” “we,” or “our”).
              </Text>
              <Text mb={6}>
                By using our services, you agree to these Terms and all
                referenced policies, including our Privacy Notice and Cookies
                Policy.
              </Text>

              <Heading as="h2" size="lg" mb={4}>
                1. Eligibility
              </Heading>
              <Text mb={2}>You may use our services only if you:</Text>
              <UnorderedList mb={4} spacing={2}>
                <ListItem>Are at least 13 years old.</ListItem>
                <ListItem>
                  Can form a binding contract under Nigerian law.
                </ListItem>
                <ListItem>
                  Comply with these Terms, our policies, and all applicable
                  laws.
                </ListItem>
              </UnorderedList>

              <Heading as="h2" size="lg" mb={4}>
                2. Account Registration
              </Heading>
              <UnorderedList mb={4} spacing={2}>
                <ListItem>
                  You must provide accurate and complete information.
                </ListItem>
                <ListItem>You must keep your account details secure.</ListItem>
                <ListItem>You may not share your account with others.</ListItem>
              </UnorderedList>

              <Heading as="h2" size="lg" mb={4}>
                3. License to Use Our Services
              </Heading>
              <Text mb={4}>
                Velarix Solutions grants you a limited, non-exclusive,
                non-transferable, revocable license to use our services for
                personal or internal business purposes. Commercial use requires
                our prior written consent.
              </Text>

              <Heading as="h2" size="lg" mb={4}>
                4. Content Offerings
              </Heading>
              <UnorderedList mb={4} spacing={2}>
                <ListItem>
                  We may modify, suspend, or remove any content without notice.
                </ListItem>
                <ListItem>
                  We do not guarantee academic or professional credit unless
                  expressly stated.
                </ListItem>
                <ListItem>
                  No relationship with content providers is implied beyond
                  course participation.
                </ListItem>
              </UnorderedList>

              <Heading as="h2" size="lg" mb={4}>
                5. User Content
              </Heading>
              <Text mb={2}>
                You retain rights to any content you create and upload (“User
                Content”), but you grant Velarix Solutions a perpetual,
                worldwide, royalty-free license to use, modify, distribute, and
                display your content for service-related purposes.
              </Text>
              <Text>
                We may remove content that violates our Terms, Acceptable Use
                Policy, or Nigerian law.
              </Text>

              <Heading as="h2" size="lg" mb={4}>
                6. Prohibited Uses
              </Heading>
              <Text mb={2}>You must not:</Text>
              <UnorderedList mb={4} spacing={2}>
                <ListItem>Engage in unlawful activities.</ListItem>
                <ListItem>
                  Attempt to hack, bypass security, or disrupt our systems.
                </ListItem>
                <ListItem>
                  Use our services for spamming, harassment, or harmful conduct.
                </ListItem>
              </UnorderedList>

              <Heading as="h2" size="lg" mb={4}>
                7. Intellectual Property
              </Heading>
              <Text mb={4}>
                All Velarix Solutions trademarks, logos, and content are owned
                by us or our licensors. You may not reproduce or distribute them
                without permission.
              </Text>

              <Heading as="h2" size="lg" mb={4}>
                8. Disclaimers and Limitation of Liability
              </Heading>
              <Text mb={4}>
                We provide our services “as is” without warranties. To the
                maximum extent permitted by Nigerian law, Velarix Solutions is
                not liable for indirect or consequential damages.
              </Text>

              <Heading as="h2" size="lg" mb={4}>
                9. Dispute Resolution
              </Heading>
              <UnorderedList mb={4} spacing={2}>
                <ListItem>
                  Disputes will be resolved by binding arbitration in Nigeria,
                  unless prohibited by law.
                </ListItem>
                <ListItem>
                  You waive your right to participate in class actions or jury
                  trials.
                </ListItem>
              </UnorderedList>

              <Heading as="h2" size="lg" mb={4}>
                10. Changes to Terms
              </Heading>
              <Text>
                We may update these Terms at any time. Your continued use of our
                services means you accept the updated Terms.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </div>
  );
};

export default TermsP;
