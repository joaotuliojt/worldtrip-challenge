import { GridItem, Box, Flex, Heading, Text } from "@chakra-ui/react";

import { CircleFlag } from 'react-circle-flags'


interface ICountry {
  country: string;
  country_code: string;
  city: string;
  thumb_src: string;
}

interface CountryCardProps {
  country: ICountry;
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <GridItem data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
      <Box
        borderTopRadius={"4px"}
        bg={`url(${country.thumb_src}) center no-repeat`}
        backgroundSize="cover"
        minH="170px"
      ></Box>
      <Flex
        p="6"
        border="1px solid #FFBA0880"
        borderTop={"none"}
        align="center"
        justify="space-between"
        borderRadius={"4px"}
        borderTopLeftRadius={"none"}
        borderTopRightRadius="none"
        bg="#FFFF"
      >
        <Box>
          <Heading fontSize={"1.25rem"} fontWeight={600}>{country.city}</Heading>
          <Text marginTop="3" fontWeight={500} color="gray.600">{country.country}</Text>
        </Box>
        <Box>
          <CircleFlag countryCode={country.country_code} height="30" width="30" />
        </Box>
      </Flex>
    </GridItem>
  )
}