import NextLink from "next/link";
import {
  Heading,
  Link,
  Flex,
  Text,
  Stack,
  Box
} from "@chakra-ui/core";

const AboutPage = () => {
  return (
    <Box>
      <Flex margin="1rem" justifyContent="flex-end">
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        margin="2rem"
      >
        <Heading as="h1" size="xl" marginY="2rem">
          About
        </Heading>
        <Text fontSize="24px" textAlign="center">
          This CodeSandbox is part of the{" "}
          <Link href="https://egghead.io/playlists/introduction-to-next-js-9-9c01?af=dkm3m8">
            Introduction to Next.js 9
          </Link>{" "}
          series on Egghead.io
        </Text>
      </Flex>
    </Box>
  );
};

export default AboutPage;
