import { Flex, Heading } from "@chakra-ui/react";



interface ContinentThumbProps {
  background_src: string;
  continent_name: string;
}

export function ContinentThumb({ background_src, continent_name }: ContinentThumbProps) {
  return (
    <Flex
      w="100%"
      minH="500px"
      px="36"
      py="14"
      bg={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${background_src})`}
      backgroundPosition="center"
      backgroundSize="cover"
      align={["center", "flex-end"]}
      justify={["center", "flex-start"]}
    >
      <Heading color="gray.50">{continent_name}</Heading>
    </Flex>
  )
}