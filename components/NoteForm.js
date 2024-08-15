import { useState } from "react";
import { Box, Input, Textarea, Button } from "@chakra-ui/react";

const NoteForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [body, setBody] = useState(initialData.body || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        mb={4}
      />
      <Textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        mb={4}
      />
      <Button type="submit" colorScheme="teal">
        Save
      </Button>
    </Box>
  );
};

export default NoteForm;
