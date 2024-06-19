import { Container, Text, VStack, Heading, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Contact</Heading>
        <Text fontSize="lg">We would love to hear from you! Please fill out the form below to get in touch.</Text>
        <Input placeholder="Your Name" size="lg" />
        <Input placeholder="Your Email" size="lg" />
        <Textarea placeholder="Your Message" size="lg" />
        <Button colorScheme="teal" size="lg">Send Message</Button>
      </VStack>
    </Container>
  );
};

export default Contact;