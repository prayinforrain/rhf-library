import { BookRecord } from "@/types/book";

export const getBooks = async (): Promise<BookRecord[]> => {
  const response = await fetch("/api/book");
  return response.json();
};

export const getBook = async (id: string): Promise<BookRecord> => {
  const response = await fetch(`/api/book/${id}`);
  return response.json();
};

export const postBook = async (book: BookRecord): Promise<BookRecord> => {
  const response = await fetch("/api/book", {
    method: "POST",
    body: JSON.stringify(book),
  });
  return response.json();
};

export const patchBook = async (book: BookRecord): Promise<BookRecord> => {
  const response = await fetch(`/api/book/${book.id}`, {
    method: "PATCH",
    body: JSON.stringify(book),
  });
  return response.json();
};

export const deleteBook = async (id: string): Promise<void> => {
  await fetch(`/api/book/${id}`, {
    method: "DELETE",
  });
};
