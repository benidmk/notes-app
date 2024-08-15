import { VStack, Text } from "@chakra-ui/react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
  if (!notes || notes.length === 0) {
    return <Text textAlign="center">Tidak ada catatan</Text>;
  }

  return (
    <VStack spacing={4} align="stretch">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </VStack>
  );
};

export default NoteList;
