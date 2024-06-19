import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">About the Author</Heading>
        <Text fontSize="lg">
          The author of "The Journey to Becoming: Keys to Personal Growth and Transformation" is a renowned expert in personal development and transformation. With years of experience in guiding individuals towards their best selves, the author shares invaluable insights and practical advice in this transformative book.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;