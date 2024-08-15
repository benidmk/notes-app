import { useRouter } from "next/router";
import { VStack, Heading } from "@chakra-ui/react";
import NoteForm from "../../components/NoteForm";
import { createNote } from "../../utils/api";

export default function NewNote() {
  const router = useRouter();

  const handleCreate = (data) => {
    createNote(data).then(() => router.push("/"));
  };

  return (
    <VStack spacing={4}>
      <Heading>Tambah Catatan Baru</Heading>
      <NoteForm onSubmit={handleCreate} />
    </VStack>
  );
}
