import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { findByName, listAll } from "../services/continents";
import { ContinentThumb } from "../components/Continents/Thumb";
import { Description } from "../components/Continents/Description";
import { Countries } from "../components/Continents/Countries";
import { ParsedUrlQuery } from "querystring";
import Router, { useRouter } from "next/router";
import { LoadingScreen } from "../components/Loading";
import { useEffect, useState } from "react";
import { Params } from "next/dist/server/router";


interface ICountry {
  country: string;
  country_code: string;
  city: string;
  thumb_src: string;
}

interface IContinent {
  id: string;
  name: string;
  description: string;
  number_of_countries: number;
  number_of_languages: number;
  more_visited: number;
  thumb_src: string;
  countries: ICountry[];
}

/* interface ContinentProps {
  continent: IContinent;
} */

interface ContinentProps {
  continentName: string;
}

export default function Continent({ continentName }: ContinentProps) {


  const [continent, setContinent] = useState<any>()

  useEffect(() => {
    (async () => {
      const data = await findByName(continentName);
      /* if (!data) {
        Router.push('404')
      } */
      setContinent(data.continents)
    })()
  }, [])

  const router = useRouter();

  if (router.isFallback) {
    return (
      <LoadingScreen />
    )
  } else {


    return (
      <Box>
        <Header />
        <ContinentThumb background_src={continent?.thumb_src} continent_name={continent?.name} />

        <Box as="main" maxWidth={1160} mx="auto" my="20" paddingX="6">
          <Description
            description={continent?.description}
            more_visited={continent?.more_visited}
            number_of_countries={continent?.number_of_countries}
            number_of_languages={continent?.number_of_languages}
          />

          <Box as="section" my="20" fontWeight={500}>
            <Heading>Cidades +100</Heading>

            <Countries countries={continent?.countries} />
          </Box>
        </Box>
      </Box>
    )
  }
}

//Diisabled because mirageJs dont work in server side

/* export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await listAll()

  const paths = continents.map(continent => {
    return {
      params: {
        continent: continent.id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

interface Params extends ParsedUrlQuery {
  continent: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { continent } = params as Params;
  const data = await findByName(String(continent))

  return {
    props: {
      continent: data
    }
  }
} */

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { continent } = params as Params;

  const validContinents = ['asia', 'america-do-sul', 'america-do-norte', 'europa']

  if (!validContinents.some((value) => value === String(continent))) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      continentName: continent
    }
  }
}