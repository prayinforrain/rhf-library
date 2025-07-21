import { BookRecord } from "@/types/book";
import styled from "@emotion/styled";
import Radio from "../ui/Radio/Radio";
import { READING_STATUS } from "@/constants/readingStatus";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import Button from "../ui/Button";
import BookMeta from "./BookMeta";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import Textarea from "@/components/ui/Textarea";
import { useMutation } from "@tanstack/react-query";

const BookDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BookTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

const FieldLabel = styled.div`
  font-size: 1rem;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const RowGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const QuoteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: auto;
`;

const BookDetail = ({ book }: { book: BookRecord }) => {
  const formMethods = useForm({
    defaultValues: {
      ...book,
    },
  });

  const { register, handleSubmit, control, watch } = formMethods;

  const bookStatus = watch("readingStatus");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "quotes",
  });

  const { mutate: updateBook } = useMutation({
    mutationFn: async (data: BookRecord) => {
      const response = await fetch(`/api/book/${book.id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      return response.json();
    },
  });

  const onSubmit = (data: BookRecord) => {
    updateBook(data);
  };

  return (
    <BookDetailWrapper>
      <BookTitle>{book.title}</BookTitle>
      <FormProvider {...formMethods}>
        <BookMeta />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* 1단계 */}
          <Field>
            <FieldLabel>상태</FieldLabel>
            <RowGroup>
              <Radio
                label="읽고 싶은 책"
                value={READING_STATUS.WANT_TO_READ}
                {...register("readingStatus")}
              />
              <Radio
                label="읽는 중"
                value={READING_STATUS.READING}
                {...register("readingStatus")}
              />
              <Radio
                label="보류 중"
                value={READING_STATUS.ON_HOLD}
                {...register("readingStatus")}
              />
              <Radio
                label="읽은 책"
                value={READING_STATUS.FINISHED}
                {...register("readingStatus")}
              />
            </RowGroup>
          </Field>
          <Field>
            <FieldLabel>독서 기간</FieldLabel>
            <RowGroup>
              <Input
                type="date"
                {...register("startDate")}
                disabled={bookStatus === READING_STATUS.WANT_TO_READ}
              />
              <Input
                type="date"
                {...register("endDate")}
                disabled={bookStatus !== READING_STATUS.FINISHED}
              />
            </RowGroup>
          </Field>
          {/* 2단계 */}
          <Field>
            <FieldLabel>도서 추천 여부</FieldLabel>
            <RowGroup>
              <Checkbox label="추천" {...register("recommend")} />
            </RowGroup>
          </Field>
          <Field>
            <FieldLabel>평점</FieldLabel>
            <RowGroup>
              <Input
                type="number"
                min={0}
                max={5}
                step={0.5}
                {...register("rating")}
              />
            </RowGroup>
          </Field>
          {/* 3단계 */}
          <Field>
            <FieldLabel>독후감</FieldLabel>
            <Textarea
              {...register("review")}
              placeholder="독후감을 입력해주세요."
            />
          </Field>
          {/* 4단계 */}
          <Field>
            <FieldLabel>
              인용구
              <ButtonGroup>
                <Button
                  type="button"
                  onClick={() =>
                    append({
                      id: `${
                        Number(book.quotes[book.quotes.length - 1]?.id ?? 0) + 1
                      }`,
                      text: "",
                      pageNumber: null,
                    })
                  }
                >
                  추가
                </Button>
              </ButtonGroup>
            </FieldLabel>
            <QuoteList>
              {fields.map((field, index) => (
                <li key={field.id}>
                  <RowGroup>
                    <Input
                      type="text"
                      {...register(`quotes.${index}.text`)}
                      placeholder="인용구를 입력해주세요."
                    />
                    <Input
                      type="number"
                      min={1}
                      max={book.totalPages ?? 0}
                      {...register(`quotes.${index}.pageNumber`)}
                      style={{ width: "auto" }}
                    />
                    <Button type="button" onClick={() => remove(index)}>
                      삭제
                    </Button>
                  </RowGroup>
                </li>
              ))}
            </QuoteList>
          </Field>
          {/* 5단계 */}
          <Field>
            <FieldLabel>공개 여부</FieldLabel>
            <RowGroup>
              <Checkbox label="공개" {...register("isPublic")} />
            </RowGroup>
          </Field>
          <ButtonGroup>
            <Button type="submit">저장</Button>
          </ButtonGroup>
        </Form>
      </FormProvider>
    </BookDetailWrapper>
  );
};

export default BookDetail;
