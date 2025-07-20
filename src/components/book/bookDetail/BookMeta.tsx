import { BookRecord } from "@/types/book";
import styled from "@emotion/styled";

const BookInfoSection = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BookInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const BookInfoItemLabel = styled.dt`
  font-size: 1rem;
  font-weight: 600;
`;

const BookInfoItemValue = styled.dd`
  font-size: 1rem;
  font-weight: 400;
`;

const BookMeta = ({ book }: { book: BookRecord }) => {
  return (
    <BookInfoSection>
      <BookInfoItem>
        <BookInfoItemLabel>저자</BookInfoItemLabel>
        <BookInfoItemValue>{book.author}</BookInfoItemValue>
      </BookInfoItem>
      <BookInfoItem>
        <BookInfoItemLabel>출판사</BookInfoItemLabel>
        <BookInfoItemValue>{book.publisher}</BookInfoItemValue>
      </BookInfoItem>
      <BookInfoItem>
        <BookInfoItemLabel>출판일</BookInfoItemLabel>
        <BookInfoItemValue>{book.publicationDate}</BookInfoItemValue>
      </BookInfoItem>
      <BookInfoItem>
        <BookInfoItemLabel>총 페이지</BookInfoItemLabel>
        <BookInfoItemValue>{book.totalPages}</BookInfoItemValue>
      </BookInfoItem>
    </BookInfoSection>
  );
};

export default BookMeta;
