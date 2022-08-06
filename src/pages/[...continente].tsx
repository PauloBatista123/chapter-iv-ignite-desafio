import { Box, Flex, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router"
import { Header } from "../components/Header";
import { api } from "../service/api";

type ContinenteProps = {
  continente: {
    id: number;
    name: string;
    image: string;
    description: string;
    subDescription: string;
  }
}

export default function Continentes({continente}: ContinenteProps){
  return (
    <Flex direction={"column"} width={"100%"}>
      <Header />
      <Flex
      w="100%"
      h={[350, 500]}
    >
      <Image
        src={continente.image}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"} 
        w="100%"
      />
      <Flex position="absolute" w={"100%"} justify={"flex-start"} align={"flex-end"} h={[350, 500]}>
        <Text ml={"12"} mb={"8"} color="whiteAlpha.900" fontWeight={"bold"} fontSize={["2xl","4xl"]}>{continente.name}</Text>
      </Flex>
    </Flex>
    <SimpleGrid columns={2} spacing={10}>
      <Box textAlign={"justify"}>
        <Text p={"12"} m={"8"} color="gray.500" fontWeight={"normal"} fontSize={["small","2xl"]}>{continente.subDescription}</Text>
      </Box>
      <Box alignSelf={"center"}>
        <HStack gap={"8"} justifyContent={"space-around"} textAlign={"center"} >
          <Box>
            <Text color="yellow.500" fontWeight={"bold"} fontSize={["2xl","5xl"]}>50</Text>
            <Text color="gray.600" fontWeight={"bold"} fontSize={["small","2xl"]}>países</Text>
          </Box>
          <Box>
            <Text color="yellow.500" fontWeight={"bold"} fontSize={["2xl","5xl"]}>60</Text>
            <Text color="gray.600" fontWeight={"bold"} fontSize={["small","2xl"]}>línguas</Text>
          </Box>
          <Box>
            <Text color="yellow.500" fontWeight={"bold"} fontSize={["2xl","5xl"]}>27</Text>
            <Text color="gray.600" fontWeight={"bold"} fontSize={["small","2xl"]}>cidades +100</Text>
          </Box>
        </HStack>
      </Box>
    </SimpleGrid>

    <Stack p={16} w={"100%"}>
      <Text color="gray.600" fontWeight={"bold"} fontSize={["2xl","4xl"]} mb={8}>Cidades +100</Text>

      <SimpleGrid minChildWidth={"240px"} columns={4} gap={16}>

        <Box borderWidth={1} borderColor={"yellow.300"} borderRadius={"sm"} justifyItems="center">
          <Image src={"https://inglaterrabrasil.com.br/files/2013/11/conhe%C3%A7a-londres.jpg"} w={"100%"}/>

          <Box p={10}>
          <SimpleGrid columns={2} spacing={5} justifyItems="center" alignItems={"end"}>
              <Box>
                <Text color="yellow.500" fontWeight={"bold"} fontSize={["md","2xl"]} mb={4}>Londres</Text>
                <Text color="gray.600" fontWeight={"bold"} fontSize={["small","lg"]}>Reino Unido</Text>
              </Box>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                borderRadius={"full"} 
                w={"50px"}
                h={"50px"}
                />
            </SimpleGrid> 
          </Box>
        </Box>

        <Box borderWidth={1} borderColor={"yellow.300"} borderRadius={"sm"} justifyItems="center">
          <Image src={"https://inglaterrabrasil.com.br/files/2013/11/conhe%C3%A7a-londres.jpg"} />

          <Box p={10}>
          <SimpleGrid columns={2} spacing={5} justifyItems="center" alignItems={"end"}>
              <Box>
                <Text color="yellow.500" fontWeight={"bold"} fontSize={["md","2xl"]} mb={4}>Londres</Text>
                <Text color="gray.600" fontWeight={"bold"} fontSize={["small","lg"]}>Reino Unido</Text>
              </Box>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                borderRadius={"full"} 
                w={"50px"}
                h={"50px"}
                />
            </SimpleGrid> 
          </Box>
        </Box>

        <Box borderWidth={1} borderColor={"yellow.300"} borderRadius={"sm"} justifyItems="center">
          <Image src={"https://inglaterrabrasil.com.br/files/2013/11/conhe%C3%A7a-londres.jpg"} />

          <Box p={10}>
          <SimpleGrid columns={2} spacing={5} justifyItems="center" alignItems={"end"}>
              <Box>
                <Text color="yellow.500" fontWeight={"bold"} fontSize={["md","2xl"]} mb={4}>Londres</Text>
                <Text color="gray.600" fontWeight={"bold"} fontSize={["small","lg"]}>Reino Unido</Text>
              </Box>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                borderRadius={"full"} 
                w={"50px"}
                h={"50px"}
                />
            </SimpleGrid> 
          </Box>
        </Box>

        <Box borderWidth={1} borderColor={"yellow.300"} borderRadius={"lg"} justifyItems="center">
          <Image src={"https://inglaterrabrasil.com.br/files/2013/11/conhe%C3%A7a-londres.jpg"} />

          <Box p={10}>
            <SimpleGrid columns={2} spacing={5} justifyItems="center" alignItems={"end"}>
              <Box>
                <Text color="yellow.500" fontWeight={"bold"} fontSize={["md","2xl"]} mb={4}>Londres</Text>
                <Text color="gray.600" fontWeight={"bold"} fontSize={["small","lg"]}>Reino Unido</Text>
              </Box>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                borderRadius={"full"} 
                w={"50px"}
                h={"50px"}
                />
            </SimpleGrid> 
          </Box>
        </Box>
      </SimpleGrid>

    </Stack>

  </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const continenteId = context.params.continente[0];

  const continente = await api.get(`/continentes/${continenteId}`).then(res => {
    return res.data;
  });
  return {
    props: {
      continente
    }
  }
}