import { useEffect, useState } from "react";
import { VStack, Heading, Button } from "@chakra-ui/react";
import NoteList from "../components/NoteList";
import { getNotes } from "../utils/api";
import { useRouter } from "next/router";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  return (
    <VStack spacing={8}>
      <Heading>Daftar Catatan</Heading>
      <Button onClick={() => router.push("/notes/new")} colorScheme="teal">
        Tambah Catatan
      </Button>
      <NoteList notes={notes} />
    </VStack>
  );
}
