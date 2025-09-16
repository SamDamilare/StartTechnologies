import {
  Box,
  SimpleGrid,
  Image,
  Icon,
  HStack,
  Link,
  Stack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { footerData } from "../../utilities/data";

const Footer = () => {
  return (
    <Box
      px={["24px", "24px"]}
      py={"32px"}
      bgColor={"#440467"}
      color="white" // ✅ Base color for the whole footer
      mt="80px"
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        ml={{ base: "10px", md: "50px", lg: "130px" }}
        mr={{ base: "10px", md: "50px", lg: "130px" }}
        columnGap={{ base: "20px", md: "32px", lg: "0px" }}
        rowGap={{ base: "32px", md: "40px" }}
      >
        {/* Logo + copyright */}
        <GridItem
          colSpan={[3, 3, 3, 1]}
          mb={["32px", "32px", "40px", "0px"]}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Image
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1729856923/NYRadio/startechlogo1_ez98hx.png"
            w="60px"
          />
          <Text
            fontSize={"8px"}
            mt={{ base: "none", md: "none", lg: "125px" }}
            w={{ base: "200px", md: "200px", lg: "100%" }}
          >
            © 2024 Velarix Solutions. All rights reserved
          </Text>
        </GridItem>

        {/* Links section */}
        <GridItem colSpan={[3, 3, 3, 2]}>
          <SimpleGrid
            columns={[1, 2, 2, 4]}
            spacingX={{ base: "20px", md: "32px", lg: "60px" }}
            spacingY={{ base: "24px", md: "32px" }}
          >
            {/* Home Section */}
            <Stack spacing={4} color="white">
              {" "}
              {/* ✅ ensures all text inside is white */}
              <Text fontSize="lg" fontWeight="semibold" mb={2}>
                {footerData.navigation.home.title}
              </Text>
              <Stack spacing={2} fontSize="xs">
                {footerData.navigation.home.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    _hover={{ textDecoration: "underline" }}
                  >
                    <Text color="white">{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>

            {/* Policies Section */}
            <Stack spacing={4} color="white">
              <Text fontSize="lg" fontWeight="semibold" mb={2}>
                {footerData.navigation.policies.title}
              </Text>
              <Stack spacing={2} fontSize="xs">
                {footerData.navigation.policies.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    _hover={{ textDecoration: "underline" }}
                  >
                    <Text color="white">{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>

            {/* Contact Section */}
            <Box color="white">
              <Text fontSize="lg" fontWeight="semibold" mb={4}>
                {footerData.contact.title}
              </Text>
              <Stack spacing={3} fontSize="xs">
                {footerData.contact.details.map((detail, index) => (
                  <HStack key={index} spacing={3} align="flex-start">
                    <Icon as={detail.icon} mt={1} />
                    <Link
                      href={detail.href}
                      _hover={{ textDecoration: "underline" }}
                    >
                      <Text color="white">{detail.text}</Text>
                    </Link>
                  </HStack>
                ))}
              </Stack>
            </Box>

            {/* Social Section */}
            <Box color="white">
              <Text fontSize="lg" fontWeight="semibold" mb={4}>
                {footerData.social.title}
              </Text>
              <Stack spacing={2} fontSize="sm">
                {footerData.social.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    _hover={{ textDecoration: "underline" }}
                  >
                    <Text color="white">{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Box>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
