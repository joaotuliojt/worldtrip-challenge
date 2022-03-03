import { Box, Image, Link as ChackraLink, Icon, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowBack } from 'react-icons/io'

export function Header() {

  const { asPath, back } = useRouter();

  return (
    <Box w="100%" h="24" as="header">
      <Flex h="24" p="6" align="center" justify="center" maxWidth={1160} mx="auto" position="relative">
        {asPath !== '/' && (
          <Box
            position="absolute"
            left="0"
            top="50%"
            transform={`translateY(-50%)`}
          >
            <Icon as={IoIosArrowBack} onClick={back} cursor="pointer" justifySelf="flex-start" fontSize="32px" />
          </Box>
        )}
        <Link href="/" passHref>
          <ChackraLink>
            <Image src="/assets/logo.svg" alt="World trip" />
          </ChackraLink>
        </Link>
      </Flex>
    </Box>
  )
}