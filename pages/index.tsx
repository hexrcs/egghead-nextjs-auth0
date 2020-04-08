import NextLink from "next/link";
import Router from "next/router";
import {
  Heading,
  Link,
  Flex,
  Box,
  Button,
  Divider,
} from "@chakra-ui/core";

const IndexPage = () => {
  return (
    <Box>
      <Flex margin="1rem" justifyContent="flex-end">
        <NextLink href="/about" passHref>
          <Link>About</Link>
        </NextLink>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        margin="2rem"
      >
        <Link href="https://egghead.io/playlists/introduction-to-next-js-9-9c01?af=dkm3m8">
          <Heading as="h1" size="2xl" marginY="1rem">
            Introduction to Next.js 9
          </Heading>
        </Link>
        <Box width="xl">
          <Divider />
        </Box>
        <Heading as="h2" size="lg" marginY="1rem">
          Authenticate users with Auth0
        </Heading>
        <Button
          variantColor="blue"
          margin="3rem"
          onClick={() => Router.push(`/secret`)}
        >
          Go to the secret route
        </Button>
      </Flex>
    </Box>
  );
};

export default IndexPage;
