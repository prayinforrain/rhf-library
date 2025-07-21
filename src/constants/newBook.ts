import { BookRecord } from "@/types/book";
import { READING_STATUS } from "./readingStatus";

export const NEW_BOOK_ID = "new";

export const NEW_BOOK_DEFAULT_VALUE: BookRecord = {
  id: NEW_BOOK_ID,
  title: "",
  author: "",
  totalPages: 0,
  readingStatus: READING_STATUS.WANT_TO_READ,
  rating: 0,
  review: "",
  quotes: [],
  recommend: false,
  publisher: "",
  publicationDate: "",
  startDate: "",
  endDate: "",
  isPublic: false,
  createdAt: "",
  updatedAt: "",
  deletedAt: null,
};
