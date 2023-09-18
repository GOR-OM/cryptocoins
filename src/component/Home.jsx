import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";
const Home = () => {
  const {colorMode} = useColorMode();
  return (
    <Box bgColor={colorMode === 'dark' ? 'blackAlpha.900' : 'whiteAlpha.500'}w={"full"} h={"90vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={colorMode === 'light' ? 'blackAlpha.900' : 'whiteAlpha.500'}
        mt={"-20"}
      >
        CoinWatcher
      </Text>
    </Box>
  );
};

export default Home;