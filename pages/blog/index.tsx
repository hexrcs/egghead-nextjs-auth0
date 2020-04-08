import NextLink from "next/link";
import { Link, Flex, Box, Heading } from "@chakra-ui/core";
import { NextPage, GetStaticProps } from "next";

const BlogIndexPage: NextPage<{
  blogs: {
    slug: string;
    title: string;
    text: string;
  }[];
}> = props => {
  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Heading marginY="2rem">Table of Contents</Heading>
        {props.blogs.map(x => {
          return (
            <NextLink
              as={`/blog/${x.slug}`}
              href={`/blog/[slug]`}
              passHref
              key={`/blog/${x.slug}`}
            >
              <Link>
                <Heading as="h3" size="lg">
                  {x.title}
                </Heading>
              </Link>
            </NextLink>
          );
        })}
      </Flex>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = (await import("../../lib/blogs.json")).default;
  return {
    props: { blogs }
  };
};

export default BlogIndexPage;
