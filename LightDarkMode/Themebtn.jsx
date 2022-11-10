import {
    Box,
    Heading,
    Flex,
    Button,
   
    useColorMode,
    useColorModeValue,
  } from "@chakra-ui/react";

  import { SunIcon, MoonIcon } from '@chakra-ui/icons'


  function Theme() {
    const { colorMode, toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue("gray.100", "gray.700");
    return (
      <Flex
        w="100%"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        bg={formBackground}
      >
        <Box
          p={8}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Heading mb={4}>Chakra UI Color Mode</Heading>
          <Button
            leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          >
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Box>
      </Flex>
    );
  }



    export default Theme;