import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const notes = await prisma.note.findMany();
      res.status(200).json(notes);
      break;
    case "POST":
      const { title, body } = req.body;
      const newNote = await prisma.note.create({
        data: { title, body },
      });
      res.status(201).json(newNote);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
