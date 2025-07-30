import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { BookRecord } from "@/types/book";
import BookDetail from "@/components/book/BookDetail";
import { NEW_BOOK_ID } from "@/constants/newBook";
import { getBook } from "@/services/book";

const BookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: book, isLoading } = useQuery<BookRecord>({
    queryKey: ["book", id],
    queryFn: () => getBook(id as string),
    enabled: typeof id === "string" && id !== NEW_BOOK_ID,
  });

  return (
    <div>
      <h1>BookDetail</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : book || id === NEW_BOOK_ID ? (
        <BookDetail book={book} />
      ) : (
        <div>Book not found</div>
      )}
    </div>
  );
};

export default BookDetailPage;
