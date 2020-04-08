import NextLink from "next/link";
import {
  Link,
  Flex,
  Box,
  Text,
  SimpleGrid,
  Heading
} from "@chakra-ui/core";
import { GetServerSideProps, NextPage } from "next";
import fetch from "node-fetch";
import ErrorPage from "next/error";

type Data = {
  id: string;
  name: string;
  email: string;
};

const UserPage: NextPage<{ data: Data }> = props => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Heading marginY="2rem">User</Heading>
        <SimpleGrid columns={2} width="2xs" spacingY={4}>
          <Text fontWeight="bold" marginRight={4}>
            UserID
          </Text>
          <Text>{props.data.id}</Text>

          <Text fontWeight="bold" marginRight={4}>
            Name
          </Text>
          <Text>{props.data.name}</Text>

          <Text fontWeight="bold" marginRight={4}>
            Email
          </Text>
          <Text>{props.data.email}</Text>
        </SimpleGrid>
        <NextLink href="/">
          <Link marginY="2rem">
            <Text fontStyle="italic">Go back home</Text>
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res
}) => {
  try {
    const { id } = params;
    const result = await fetch(
      `http://localhost:3000/api/user/${id}`
    );
    const data: Data = await result.json();

    return {
      props: { data }
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {}
    };
  }
};

export default UserPage;
