import { Box, Container, Heading } from "@chakra-ui/react";

const layout = ({ children }) => (
  <Container maxW="container.md" py={4}>
    <Box
      minHeight="10vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-r, teal.500, blue.500)"
      color="white"
      paddingTop={6}
      marginBottom={6}
    >
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Notes App
      </Heading>
    </Box>
    <main>{children}</main>
  </Container>
);

export default layout;
