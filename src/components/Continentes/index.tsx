import { Flex, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Slides = dynamic(() => import('./Slides').then(module => module.Slides), {
  ssr: false,
})

export function Continentes(){
  return(
    <>
      <Flex direction={"column"} align={"center"} justify="center" my={"8"} textAlign="center">
        <Text color="gray.600" fontWeight={"medium"} fontSize="4xl">Vamos Nessa?</Text>
        <Text color="gray.600" fontWeight={"medium"} fontSize="4xl">Então escolha seu continente</Text>
      </Flex>
      <Slides />
    </>
  );
}