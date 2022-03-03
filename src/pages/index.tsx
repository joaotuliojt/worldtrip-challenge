import { Box, Grid, GridItem, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { homeImgInfos } from '../constants/values'

import { Carousel } from '../components/Carousel'
import { useBreakpointValue } from '@chakra-ui/react'


const Home: NextPage = () => {

  const isMdScreen = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Box>
      <Header />
      <HStack
        spacing={40}
        px={["16", "36"]}
        background={"url(/assets/Background.png) no-repeat center"}
        backgroundSize="cover"
        justify={"center"}
        align="center"
        paddingTop="18"
        paddingBottom="18"
        minH={"80"}

      >
        <Box maxW={isMdScreen ? "none" : "524px"} data-aos="fade-right"
          data-aos-delay="800">
          <Heading color="gray.100" fontWeight={500}>5 Continentes, <br />infinitas possibilidades.</Heading>
          <Text color="gray.300" mt="5" fontSize="20px">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Box>
        {isMdScreen && (
          <Box data-aos="fade-up-left" data-aos-delay="800">
            <Image
              minWidth={["200px", "260px", "380px"]}
              src="/assets/Airplane.svg"
              alt="Avião"
              transform={"translateY(3rem)"}
            />

          </Box>
        )}
      </HStack>

      <Box as="main">
        <Grid marginBottom={"36px"} maxW="1160px" mx="auto" templateColumns={["1fr", '1fr', 'repeat(5, 1fr)']} h='200px' marginTop={20}>
          {homeImgInfos.map((item, index) => (
            <GridItem key={index} textAlign="center" data-aos="fade-up">
              <Stack>
                {isMdScreen && (
                  <Image src={item.src} alt={item.description} w="85px" display="block" mx="auto" />
                )}

                <Text fontSize={["18", "24"]} fontWeight={600}>{item.description}</Text>

              </Stack>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box w="90px" mx="auto" h="1px" bg="gray.700"></Box>
      <Heading textAlign="center" my="14" fontSize={["20px", "32px"]}>
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Box maxW={1240} mx="auto" mb="10">
        <Carousel />
      </Box>
    </Box>
  )
}

export default Home
