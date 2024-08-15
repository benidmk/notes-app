import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getNote, updateNote, deleteNote } from "../../utils/api";
import { Heading, Button, Box, VStack, Text } from "@chakra-ui/react";
import NoteForm from "../../components/NoteForm";

export default function NoteDetail() {
  const [note, setNote] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getNote(id).then((data) => {
        console.log(data); // Debug log
        setNote(data);
      });
    }
  }, [id]);

  const handleUpdate = (data) => {
    updateNote(id, data).then(() => router.push("/"));
  };

  const handleDelete = () => {
    deleteNote(id).then(() => router.push("/"));
  };

  if (!note) return null;

  return (
    <VStack spacing={4}>
      <Heading>Detail Catatan</Heading>
      <NoteForm onSubmit={handleUpdate} initialData={note} />
      <Box>
        <Button onClick={handleDelete} colorScheme="red" mr={4}>
          Hapus
        </Button>
        <Button onClick={() => router.push("/")} colorScheme="teal">
          Kembali ke Daftar
        </Button>
      </Box>
    </VStack>
  );
}
