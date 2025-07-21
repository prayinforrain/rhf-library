import Input from "@/components/ui/Input";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

const BookInfoSection = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BookInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

const BookInfoItemLabel = styled.dt`
  font-size: 1rem;
  font-weight: 600;
`;

const BookInfoItemValue = styled.dd`
  font-size: 1rem;
  font-weight: 400;
`;

const BookMeta = () => {
  const { register } = useFormContext();
  return (
    <BookInfoSection>
      <BookInfoItem>
        <BookInfoItemLabel>저자</BookInfoItemLabel>
        <BookInfoItemValue>
          <Input {...register("author")} />
        </BookInfoItemValue>
      </BookInfoItem>
      <BookInfoItem>
        <BookInfoItemLabel>출판사</BookInfoItemLabel>
        <BookInfoItemValue>
          <Input {...register("publisher")} />
        </BookInfoItemValue>
      </BookInfoItem>
      <BookInfoItem>
        <BookInfoItemLabel>출판일</BookInfoItemLabel>
        <BookInfoItemValue>
          <Input type="date" {...register("publicationDate")} />
        </BookInfoItemValue>
      </BookInfoItem>
      <BookInfoItem>
        <BookInfoItemLabel>총 페이지</BookInfoItemLabel>
        <BookInfoItemValue>
          <Input type="number" {...register("totalPages")} />
        </BookInfoItemValue>
      </BookInfoItem>
    </BookInfoSection>
  );
};

export default BookMeta;
