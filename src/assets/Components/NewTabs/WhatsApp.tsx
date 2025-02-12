import { Link, IconButton } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      <Link
        href="https://wa.me/message/ODSUXNCSXVTDM1"
        isExternal
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="1000"
      >
        <IconButton
          aria-label="WhatsApp"
          icon={<FaWhatsapp />}
          colorScheme="whatsapp"
          size="lg"
          isRound
          boxShadow="lg"
          _hover={{ transform: "scale(1.1)", transition: "0.2s" }}
        />
      </Link>
    </div>
  );
};

export default WhatsApp;
