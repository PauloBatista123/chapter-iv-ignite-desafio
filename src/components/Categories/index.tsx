import { Box, Flex, Icon, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Building } from "./Building";
import { Cocktail } from "./Cocktail";
import { Earth } from "./Earth";
import { Museum } from "./Museum";
import { Surf } from "./Surf";
import { BiRadioCircle } from 'react-icons/bi';

export function Categories() {
  const isVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w={"100%"}
      align={"center"}
      justify={"center"}
      mt={["8","20"]}
    >
      <SimpleGrid flex="1" gap="2" minChildWidth={"320px"} justifyItems="center">
          <Box>
            {isVersionLg ? <Cocktail /> : <Icon as={BiRadioCircle} color="yellow.300"/>}
            <Text
              as={isVersionLg ? "p" : "span"}
              pt={4}
              fontSize={"24"}
              fontWeight="bold"
              color="gray.600"
            >
                vida noturna
              </Text>
          </Box>
          <Box>
            {isVersionLg ? <Surf /> : <Icon as={BiRadioCircle} color="yellow.300"/>}
            <Text
              as={isVersionLg ? "p" : "span"}
              pt={4}
              fontSize={"24"}
              fontWeight="bold"
              color="gray.600">praia</Text>
          </Box>
          <Box>
            {isVersionLg ? <Building /> : <Icon as={BiRadioCircle} color="yellow.300"/>}
            <Text
              as={isVersionLg ? "p" : "span"}
              pt={4}
              fontSize={"24"}
              fontWeight="bold"
              color="gray.600">Moderno</Text>
          </Box>
          <Box>
            {isVersionLg ? <Museum /> : <Icon as={BiRadioCircle} color="yellow.300"/>}
            <Text
              as={isVersionLg ? "p" : "span"}
              pt={4}
              fontSize={"24"}
              fontWeight="bold"
              color="gray.600">Clássico</Text>
          </Box>
          <Box>
            {isVersionLg ? <Earth /> : <Icon as={BiRadioCircle} color="yellow.300"/>}
            <Text
              as={isVersionLg ? "p" : "span"}
              pt={4}
              fontSize={"24"}
              fontWeight="bold"
              color="gray.600">e
              mais...</Text>
          </Box>
      </SimpleGrid>
    </Flex>
  );
}