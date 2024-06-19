import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">Home</Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/about" color="white" mx={2}>About</Link>
          <Link as={RouterLink} to="/blog" color="white" mx={2}>Blog</Link>
          <Link as={RouterLink} to="/contact" color="white" mx={2}>Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;