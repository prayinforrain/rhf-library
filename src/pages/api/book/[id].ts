import { BookRecords } from "@/db/bookRecord";
import { ErrorResponse } from "@/types/api";
import { BookRecord } from "@/types/book";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookRecord | ErrorResponse>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const book = BookRecords.find((book) => book.id === id);
    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }
    res.status(200).json(book);
  }
  if (req.method === "POST") {
    res.status(405).json({ error: "Method not allowed" });
  }
  if (req.method === "DELETE") {
    const { id } = req.query;
    const book = BookRecords.find((b) => b.id === id);
    const index = BookRecords.findIndex((b) => b.id === id);
    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }
    const updatedBook = { ...book, deletedAt: new Date().toISOString() };
    BookRecords[index] = updatedBook;
    res.status(204).end();
  }
  if (req.method === "PATCH") {
    const body = JSON.parse(req.body);
    const { id } = req.query;
    const book = BookRecords.find((b) => b.id === id);
    const index = BookRecords.findIndex((b) => b.id === id);
    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }
    const updatedBook = { ...book, ...body };
    BookRecords[index] = updatedBook;
    res.status(200).json(updatedBook);
  }
}
