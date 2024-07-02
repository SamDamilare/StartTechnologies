// import React from "react";

// const Testimonials = () => {
//   return <div></div>;
// };

// export default Testimonials;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <Box bgColor={"white"}>
            <Text>Best Class ever</Text>
            <Text>
              Star knows how to simplify her classes and make it as interesting
              as possible and I am . happy to have been trained by her.
            </Text>
            <Flex>
              <Image src="" />
              <Stack>
                <Text>Stephen Alade</Text>
                <Text>UI/UX Designer</Text>
              </Stack>
            </Flex>
          </Box>
        </div>
        <div>
          <Box bgColor={"white"}>
            <Text>Best Class ever</Text>
            <Text>
              Star knows how to simplify her classes and make it as interesting
              as possible and I am . happy to have been trained by her.
            </Text>
            <Flex>
              <Image src="" />
              <Stack>
                <Text>Stephen Alade</Text>
                <Text>UI/UX Designer</Text>
              </Stack>
            </Flex>
          </Box>
        </div>
        <div>
          <Box bgColor={"white"}>
            <Text>Best Class ever</Text>
            <Text>
              Star knows how to simplify her classes and make it as interesting
              as possible and I am . happy to have been trained by her.
            </Text>
            <Flex>
              <Image src="" />
              <Stack>
                <Text>Stephen Alade</Text>
                <Text>UI/UX Designer</Text>
              </Stack>
            </Flex>
          </Box>
        </div>
      </Carousel>
    );
  }
}

ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
