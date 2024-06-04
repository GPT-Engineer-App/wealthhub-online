import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>World</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Business</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Tech</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>Featured Article Headline</Heading>
          <Text fontSize="lg">This is a brief summary of the featured article. It provides an overview of the main points and entices the reader to click through to read the full article.</Text>
        </Container>
      </Box>

      {/* Articles Grid */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <Box bg="white" p={6} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md" mb={2}>Article Title 1</Heading>
              <Text>Summary of the article content goes here. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
            <Box bg="white" p={6} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md" mb={2}>Article Title 2</Heading>
              <Text>Summary of the article content goes here. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
            <Box bg="white" p={6} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md" mb={2}>Article Title 3</Heading>
              <Text>Summary of the article content goes here. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
            <Box bg="white" p={6} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md" mb={2}>Article Title 4</Heading>
              <Text>Summary of the article content goes here. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
            <Box bg="white" p={6} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md" mb={2}>Article Title 5</Heading>
              <Text>Summary of the article content goes here. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
            <Box bg="white" p={6} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md" mb={2}>Article Title 6</Heading>
              <Text>Summary of the article content goes here. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={8}>
              <Link href="#" _hover={{ textDecoration: "underline" }}>Contact</Link>
              <Link href="#" _hover={{ textDecoration: "underline" }}>Privacy Policy</Link>
              <Link href="#" _hover={{ textDecoration: "underline" }}>Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;