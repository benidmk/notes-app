import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      const note = await prisma.note.findUnique({
        where: { id: parseInt(id) },
      });
      res.status(200).json(note);
      break;
    case "PUT":
      const { title, body } = req.body;
      const updatedNote = await prisma.note.update({
        where: { id: parseInt(id) },
        data: { title, body },
      });
      res.status(200).json(updatedNote);
      break;
    case "DELETE":
      await prisma.note.delete({ where: { id: parseInt(id) } });
      res.status(204).end();
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
