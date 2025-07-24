import { BookRecord } from "@/types/book";
import Book from ".";
import styled from "@emotion/styled";

const BookListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const BookList = ({ books }: { books: BookRecord[] | undefined }) => {
  return (
    <BookListWrapper>
      {!books ? (
        <Empty>
          <span>로딩중...</span>
        </Empty>
      ) : books.length > 0 ? (
        books.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <Empty>
          <span>독서 기록이 없습니다.</span>
        </Empty>
      )}
    </BookListWrapper>
  );
};

export default BookList;
