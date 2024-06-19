import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Blog</Heading>
        <Text fontSize="lg">
          Welcome to the blog section. Here you will find articles and posts related to personal growth, transformation, and insights from the author.
        </Text>
      </VStack>
    </Container>
  );
};

export default Blog;