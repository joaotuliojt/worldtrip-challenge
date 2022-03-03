import { SimpleGrid, Box, Flex, Heading, HStack, Tooltip, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";


interface DescriptionProps {
  description: string;
  number_of_countries: number;
  number_of_languages: number;
  more_visited: number;
}

export function Description({ description, more_visited, number_of_countries, number_of_languages }: DescriptionProps) {
  return (
    <SimpleGrid minChildWidth={["none", "500px"]} gap={6} alignItems="center">
      <Box data-aos="fade-right" data-aos-delay="300">
        <Text textAlign="justify">{description}</Text>
      </Box>
      <Flex data-aos="fade-left" data-aos-delay="300" justify="space-around" flexDirection={["column", "row"]} gap={["2rem", 0]}>
        <Box textAlign="center">
          <Heading color="brand.yellow" fontSize={"3rem"}>{number_of_countries}</Heading>
          <Heading fontSize={"1.5rem"}>países</Heading>
        </Box>
        <Box textAlign="center">
          <Heading color="brand.yellow" fontSize={"3rem"}>{number_of_languages}</Heading>
          <Heading fontSize={"1.5rem"}>línguas</Heading>
        </Box>
        <Box textAlign="center">
          <Heading color="brand.yellow" fontSize={"3rem"}>{more_visited}</Heading>
          <HStack spacing={"5px"} alignItems="center" justifyContent="center">
            <Heading fontSize={"1.5rem"}>
              cidades +100
            </Heading>
            <Tooltip hasArrow label='Search places' bg="gray.700" color="black">
              <span>
                <RiInformationLine width={16} color="#C7C9C9" />
              </span>
            </Tooltip>
          </HStack>
        </Box>
      </Flex>
    </SimpleGrid>
  )
}