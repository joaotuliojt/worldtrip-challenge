import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";


interface CarouselItemProps {
  src: string;
  href: string;
  continent: string;
  text: string;
}

export function CarouselItem({ continent, href, src, text }: CarouselItemProps) {
  return (
    <Flex
      bg={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${src}) center no-repeat`}
      backgroundSize="cover"
      h="100%"
      w="100%"
      align="center"
      justify="center"
      direction="column"
    >
      <Link href={`/${href}`} passHref>
        <Heading as="a" color="gray.50">{continent}</Heading>
      </Link>
      <Text color="gray.50" mt="4">{text}</Text>
    </Flex>
  )
}