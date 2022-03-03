import { Flex } from "@chakra-ui/react";
import ReactLoading from 'react-loading';


export function LoadingScreen() {
  return (
    <Flex h="100vh" w="100vw" justify="center" align="center">
      <ReactLoading type="spin" color="#FFBA08" height={50} width={50} />
    </Flex>
  )
}