import { colors } from "@/styles/colors";
import { BookRecord } from "@/types/book";
import styled from "@emotion/styled";

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid ${colors.grey[20]};
  border-radius: 0.5rem;
  padding: 1rem;
`;

const BookTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

const BookMeta = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

const BookMetaItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

const Book = ({ book }: { book: BookRecord }) => {
  return (
    <BookWrapper>
      <BookTitle>{book.title}</BookTitle>
      <BookMeta>
        <BookMetaItem>
          <div>{book.author}</div>
        </BookMetaItem>
        <BookMetaItem>
          <div>{book.publisher},</div>
          <div>{book.publicationDate}</div>
        </BookMetaItem>
      </BookMeta>
    </BookWrapper>
  );
};

export default Book;
