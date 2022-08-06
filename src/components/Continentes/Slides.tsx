import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import {Swiper as SwiperDiv} from "./styles"
import React, { useEffect, useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { slugify } from "../../utils/slug";

import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { api } from "../../service/api";
import Link from "next/link";

interface Continente {
  id: number;
  name: string;
  image: string;
  description: string;
}

export function Slides(){

  const [continentes, setContinentes] = useState<Continente[]>([]);

  useEffect(() => {
    (async () => {
      await api.get('continentes').then((res) => {
        setContinentes(res.data);
      });
    })();
  }, []);

  return(
    <SwiperDiv>
      <Swiper
        pagination={true}
        modules={[Pagination, FreeMode, Navigation]}
        spaceBetween={10}
        navigation={true}
      >
        {
          continentes.map(continente => (
            <SwiperSlide key={continente.id}>
              <Image bgSize={"cover"} bgPos="center" src={continente.image} />
              <Link href={`/${continente.id}/${slugify(continente.name)}`}>
                <Box flex={"1"} w={"100%"} position="absolute" alignSelf={"center"} justifyContent="center" cursor={"pointer"}>
                  <Text color="whiteAlpha.900" fontWeight={"bold"} fontSize={["2xl","4xl"]}>{continente.name}</Text>
                  <Text color="whiteAlpha.800" fontWeight={"bold"} fontSize={["sm","2xl"]}>{continente.description}</Text>
                </Box>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </SwiperDiv>
    
  );
}