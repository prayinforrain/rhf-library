import { BookRecords } from "@/db/bookRecord";
import { ErrorResponse } from "@/types/api";
import { BookRecord } from "@/types/book";
import { NextApiRequest, NextApiResponse } from "next";

const EMPTY_BOOK: BookRecord = {
  id: "",
  title: "",
  author: "",
  rating: 0,
  review: "",
  recommend: false,
  publisher: "",
  publicationDate: "",
  totalPages: 0,
  readingStatus: "WANT_TO_READ",
  startDate: "",
  endDate: "",
  isPublic: false,
  quotes: [],
  createdAt: "",
  updatedAt: "",
  deletedAt: null,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookRecord[] | ErrorResponse>
) {
  if (req.method === "POST") {
    const book = JSON.parse(req.body);
    const newBook = {
      ...EMPTY_BOOK,
      ...book,
      id: `${BookRecords.length + 1}`,
    };
    BookRecords.push(newBook);
    res.status(200).json(newBook);
  }
  if (req.method === "GET") {
    res.status(200).json(BookRecords);
  }
}
