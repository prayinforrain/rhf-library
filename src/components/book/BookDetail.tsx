import { BookRecord } from "@/types/book";
import styled from "@emotion/styled";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../ui/Button";
import BookMetaForm from "./form/BookMetaForm";
import { useMutation } from "@tanstack/react-query";
import StatusForm from "./form/StatusForm";
import RatingForm from "./form/RatingForm";
import ReviewForm from "./form/ReviewForm";
import QuoteForm from "./form/QuoteForm";
import PublicForm from "./form/PublicForm";

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

  const { handleSubmit } = formMethods;
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
        <BookMetaForm />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* 1단계 */}
          <StatusForm />
          {/* 2단계 */}
          <RatingForm />
          {/* 3단계 */}
          <ReviewForm />
          {/* 4단계 */}
          <QuoteForm />
          {/* 5단계 */}
          <PublicForm />
          <ButtonGroup>
            <Button type="submit">저장</Button>
          </ButtonGroup>
        </Form>
      </FormProvider>
    </BookDetailWrapper>
  );
};

export default BookDetail;
