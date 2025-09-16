import {
  Box,
  Heading,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import BTHomeButton from "../NewTabs/BTHomeButton";

const RefundP = () => {
  return (
    <div>
      <Box maxW="4xl" mx="auto" p={6} color="gray.700">
        <Heading as="h1" size="xl" mb={2}>
          Refund Policy for Velarix
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={6}>
          Last Updated: September 1, 2025
        </Text>

        <Text mb={4}>
          At Velarix, we are committed to delivering high-quality tech skills
          training to empower your career growth. This Refund Policy outlines
          the conditions under which refunds may be granted for our online
          courses and services, ensuring transparency and fairness for our
          learners.
        </Text>

        <Heading as="h2" size="md" mt={6} mb={2}>
          1. Purpose of This Policy
        </Heading>
        <Text mb={4}>
          Our Refund Policy is designed to clarify expectations, prevent misuse
          of digital content, and comply with applicable Nigerian laws,
          including the Consumer Protection Act. As our courses are digital
          products, refunds are subject to specific conditions to protect both
          learners and Velarix’s intellectual property.
        </Text>

        <Heading as="h2" size="md" mt={6} mb={2}>
          2. Eligibility for Refunds
        </Heading>
        <UnorderedList spacing={2} mb={4}>
          <ListItem>
            <Text>
              <b>Timeframe:</b> Refund requests must be submitted within 7 days
              from the date of purchase.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <b>Course Progress:</b> You must not have completed more than 10%
              of the course content (e.g., video lectures, assignments, or
              modules accessed).
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <b>Valid Reason:</b> Requests must include a valid reason, such as
              technical issues preventing access or course misrepresentation.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <b>Compliance:</b> You must adhere to our Terms and Conditions and
              this Refund Policy.
            </Text>
          </ListItem>
        </UnorderedList>

        <Heading as="h2" size="md" mt={6} mb={2}>
          3. Non-Refundable Items
        </Heading>
        <UnorderedList spacing={2} mb={4}>
          <ListItem>
            <b>Processing Fees:</b> Transaction or payment gateway fees (e.g.,
            Flutterwave charges) are not refundable.
          </ListItem>
          <ListItem>
            <b>Consumed Content:</b> Courses or materials accessed beyond the
            10% threshold.
          </ListItem>
          <ListItem>
            <b>Promotional Offers:</b> Courses purchased during special
            promotions (e.g., discounted rates) are non-refundable unless
            otherwise stated.
          </ListItem>
          <ListItem>
            <b>Access Fees:</b> Enrollment or platform access fees are
            non-refundable after activation.
          </ListItem>
        </UnorderedList>

        <Heading as="h2" size="md" mt={6} mb={2}>
          4. Refund Process
        </Heading>
        <OrderedList spacing={2} mb={4}>
          <ListItem>
            Contact us at{" "}
            <Link href="mailto:support@velarix.com.ng" color="blue.500">
              support@velarix.com.ng
            </Link>{" "}
            or via our website’s contact form within 7 days of purchase.
          </ListItem>
          <ListItem>
            Provide your order number, reason for the refund, and proof of
            purchase.
          </ListItem>
          <ListItem>
            Our team will review your request and respond within 5 business
            days.
          </ListItem>
          <ListItem>
            Approved refunds will be processed via the original payment method
            (e.g., Flutterwave) within 10 business days, subject to payment
            processor timelines.
          </ListItem>
        </OrderedList>

        <Heading as="h2" size="md" mt={6} mb={2}>
          5. Applicable Law
        </Heading>
        <Text mb={4}>
          This policy complies with the Sales of Goods Act and Consumer
          Protection Act in Nigeria. Velarix reserves the right to deny refunds
          for requests not meeting the above criteria.
        </Text>

        <Heading as="h2" size="md" mt={6} mb={2}>
          6. Contact Us
        </Heading>
        <Text mb={2}>For questions or refund requests, reach us at:</Text>
        <UnorderedList spacing={2} mb={8}>
          <ListItem>
            <b>Email:</b>{" "}
            <Link href="mailto:support@velarix.com.ng" color="blue.500">
              support@velarix.com.ng
            </Link>
          </ListItem>
          <ListItem>
            <b>Website:</b>{" "}
            <Link href="https://velarix.com.ng" color="blue.500" isExternal>
              velarix.com.ng
            </Link>
          </ListItem>
          <ListItem>
            <b>Instagram:</b> @velarixsolutions
          </ListItem>
        </UnorderedList>
        <BTHomeButton />
      </Box>
    </div>
  );
};

export default RefundP;
