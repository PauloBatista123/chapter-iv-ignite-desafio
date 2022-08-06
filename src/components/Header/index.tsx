import { Flex, IconButton, Spacer } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { BiArrowBack } from 'react-icons/bi'
import { useRouter } from "next/router";

export function Header(){

  const {asPath} = useRouter();

  return (
    <Flex
      as={"header"}
      h={"20"}
      w={"100%"}
      m="auto"
      px="8"
      p={"8"}
      bg={"gray.100"}
      gap={2}
      justify="center"
      align={"center"}
    >
      {asPath !== '/' && (
        <Flex align={"start"}>
          <IconButton aria-label="Botão voltar" icon={<BiArrowBack />} />
        </Flex>
      )}      
      <Spacer />
      <Flex align={"center"} justify="center">
        <Logo />
      </Flex>
      <Spacer />
    </Flex>
  );
}