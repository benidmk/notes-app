export async function getNotes() {
  const response = await fetch("/api/notes");
  return response.json();
}

export async function getNote(id) {
  const response = await fetch(`/api/notes/${id}`);
  return response.json();
}

export async function createNote(data) {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function updateNote(id, data) {
  const response = await fetch(`/api/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteNote(id) {
  await fetch(`/api/notes/${id}`, {
    method: "DELETE",
  });
}
