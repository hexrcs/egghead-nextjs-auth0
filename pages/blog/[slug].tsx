import NextLink from "next/link";
import { Text, Flex, Heading, Link } from "@chakra-ui/core";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";

const BlogPage: NextPage<{
  title: string;
  text: string;
}> = props => {
  return (
    <Flex margin={4} flexDirection="column">
      <NextLink href="/blog" passHref>
        <Link>Back to TOC</Link>
      </NextLink>
      <Heading as="h1" size="xl" marginY={4}>
        {props.title}
      </Heading>
      <Text>{props.text}</Text>
    </Flex>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import("../../lib/blogs.json")).default;
  const slugs = blogs.map(blog => blog.slug);
  const paths = slugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug }
}) => {
  const blogs = (await import("../../lib/blogs.json")).default;
  const blog = blogs.find(x => x.slug === slug);

  return {
    props: {
      title: blog.title,
      text: blog.text
    }
  };
};

export default BlogPage;
