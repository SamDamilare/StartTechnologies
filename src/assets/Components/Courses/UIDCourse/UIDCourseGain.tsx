import React from "react";
import { Heading, VStack, Text, Box, Flex, Image } from "@chakra-ui/react";

const UIDCourseGain = () => {
  return (
    <div>
      <Box ml="160px" mr="160px" mt="100px">
        <Flex justifyContent={"space-between"} alignItems={"start"}>
          <Box w="30vw">
            <VStack alignItems={"start"}>
              <Heading fontSize={"2xl"}>
                Why start your journey with us?
              </Heading>
              <Text fontSize={"sm"} mt="10px">
                By enrolling in Star School of Design's Design Thinking course,
                you’ll gain more than just knowledge—you’ll unlock your creative
                potential and transform your career. Our course is designed to
                provide you with:
              </Text>
              <Text fontSize={"sm"} ml="40px">
                <ul>
                  <li>
                    Cutting-Edge Skills: Master the latest UI design tools,
                    techniques, and trends, ensuring you stay ahead in the
                    fast-paced world of design.
                  </li>
                  <li>
                    Practical Experience: Work on real-world UI projects that
                    build your portfolio and showcase your skills to potential
                    employers.
                  </li>
                  <li>
                    Expert Guidance: Learn from industry leaders who are
                    passionate about sharing their expertise and helping you
                    succeed.
                  </li>
                  <li>
                    Networking Opportunities: Connect with a vibrant community
                    of like-minded peers, mentors, and professionals who will
                    support and inspire you.
                  </li>
                  <li>
                    Career Advancement: Equip yourself with the skills and
                    confidence needed to take your UI design career to the next
                    level and achieve your professional goals.
                  </li>
                </ul>
              </Text>
              <Text fontSize={"sm"}>
                At SSD, we empower you to dream big and design a brighter
                future. Join us and start your UI design journey today!
              </Text>
            </VStack>
          </Box>
          <Box w="30vw">
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719758063/SSD/Frame_44_lofpds.png" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default UIDCourseGain;
