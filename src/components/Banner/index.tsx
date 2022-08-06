import { Box, Flex, HStack, Image, Text, useBreakpointValue, } from "@chakra-ui/react";
import { Airplane } from "./Airplane";

export function Banner(){
  const isVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  return(
    <Flex
      w="100%"
      h={["52", "96"]}
    >
      <Image
        src="/Background.png"
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"} 
        w="100%"
      />
      <Flex position="absolute" w={"100%"} justify={"space-around"}>
        <HStack spacing={"32"} mx={["4", "32"]} mt="8">
          <Box alignItems={"flex-start"}>
            <Text
              fontSize={[24, 32]}
              fontWeight="500"
              align={"left"}
              color="gray.50">
              5 Continentes,<br/>infinitaspossibilidades.
            </Text>
            <Text
              mt={[2, 8]}
              fontSize={[14, 20]}
              align={"left"}
              color="gray.300"
              letterSpacing="tight">
                Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou. 
            </Text>
          </Box>

          {isVersionLg && (
            <Box pt={8}>
              <Airplane />
            </Box>
          )}
          
        </HStack>
      </Flex>
    </Flex>
  );
}