import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <HStack spacing={8}>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={8} my={8}>
        <Heading as="h2" size="xl" mb={4}>
          Featured Article Headline
        </Heading>
        <Text fontSize="lg">
          This is a brief summary of the featured article. It provides an overview of the main points and entices the reader to click through to read more.
        </Text>
      </Box>

      {/* Grid Layout for Other Articles */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
        <Box bg="white" p={4} shadow="md" borderWidth="1px">
          <Heading as="h3" size="md" mb={2}>Article Title 1</Heading>
          <Text>Summary of the article content goes here. It should be brief and to the point.</Text>
        </Box>
        <Box bg="white" p={4} shadow="md" borderWidth="1px">
          <Heading as="h3" size="md" mb={2}>Article Title 2</Heading>
          <Text>Summary of the article content goes here. It should be brief and to the point.</Text>
        </Box>
        <Box bg="white" p={4} shadow="md" borderWidth="1px">
          <Heading as="h3" size="md" mb={2}>Article Title 3</Heading>
          <Text>Summary of the article content goes here. It should be brief and to the point.</Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} textAlign="center">
        <HStack spacing={8} justifyContent="center" mb={4}>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact Information</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
        </HStack>
        <Text>&copy; {new Date().getFullYear()} Financial Times. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;