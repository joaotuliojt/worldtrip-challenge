import { GridItem, Box, Flex, Heading, Grid, Text, Image } from "@chakra-ui/react";
import { CountryCard } from "./CountryCard";


interface ICountry {
  country: string;
  country_code: string;
  city: string;
  thumb_src: string;
}

interface CountriesProps {
  countries: ICountry[];
}
export function Countries({ countries }: CountriesProps) {
  return (
    <Grid my="6" templateColumns={['1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap="3rem">
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </Grid>
  )
}