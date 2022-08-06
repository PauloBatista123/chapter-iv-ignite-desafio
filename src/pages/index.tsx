import { Divider, Flex, HStack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Categories } from "../components/Categories";
import { Continentes } from "../components/Continentes";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex direction={"column"} width={"100%"}>
      <Header />
      <Banner />
      <Categories />
      <Flex w={"100%"} mx="auto" mt={["8","32"]}>
        <Divider width={"28"} border={["1"]} m="auto" borderColor={"gray.700"}/>
      </Flex>
      <Continentes />
    </Flex>   
  )
}
