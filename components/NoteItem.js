import { Box, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const NoteItem = ({ note }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <NextLink href={`/notes/${note.id}`} passHref>
        <Link>
          <Heading size="md">{note.title}</Heading>
        </Link>
      </NextLink>
      <Text>{note.body.substring(0, 100)}...</Text>
      <Text fontSize="sm" color="gray.500">
        {new Date(note.createdAt).toLocaleDateString()}
      </Text>
    </Box>
  );
};

export default NoteItem;
