import { BookRecord } from "@/types/book";
import styled from "@emotion/styled";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../ui/Button";
import BookMetaForm from "./form/BookMetaForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import StatusForm from "./form/StatusForm";
import RatingForm from "./form/RatingForm";
import ReviewForm from "./form/ReviewForm";
import QuoteForm from "./form/QuoteForm";
import PublicForm from "./form/PublicForm";
import { NEW_BOOK_DEFAULT_VALUE, NEW_BOOK_ID } from "@/constants/newBook";
import { useRouter } from "next/router";
import { useState } from "react";
import { patchBook, postBook } from "@/services/book";

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

const BookDetail = ({
  book = NEW_BOOK_DEFAULT_VALUE,
}: {
  book?: BookRecord;
}) => {
  const formMethods = useForm({
    defaultValues: {
      ...book,
    },
  });

  const [step, setStep] = useState(0);
  const MAX_STEP = 4;

  const queryClient = useQueryClient();
  const router = useRouter();

  const { handleSubmit } = formMethods;
  const { mutateAsync: updateBook } = useMutation({
    mutationFn: async (data: BookRecord) => {
      const response = await patchBook(data);
      queryClient.invalidateQueries({ queryKey: ["book", book.id] });
      return response;
    },
  });

  const { mutateAsync: createBook } = useMutation({
    mutationFn: async (data: BookRecord) => {
      const newBook = await postBook(data);
      router.push(`/${newBook.id}`);
      return newBook;
    },
  });

  const onSubmit = async (data: BookRecord) => {
    if (book.id === NEW_BOOK_ID) {
      await createBook(data);
    } else {
      await updateBook(data);
    }
    router.push("/");
  };

  const onNextStep = async () => {
    if (step === MAX_STEP) return;
    const isValid = await formMethods.trigger();
    if (!isValid) {
      const firstError = Object.keys(formMethods.formState.errors)[0];
      formMethods.setFocus(firstError as keyof BookRecord);
      return;
    }
    setStep(step + 1);
  };

  return (
    <BookDetailWrapper>
      <BookTitle>{book.title}</BookTitle>
      <FormProvider {...formMethods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* 1단계 */}
          {step === 0 && (
            <>
              <BookMetaForm />
              <StatusForm />
            </>
          )}
          {/* 2단계 */}
          {step === 1 && <RatingForm />}
          {/* 3단계 */}
          {step === 2 && <ReviewForm />}
          {/* 4단계 */}
          {step === 3 && <QuoteForm />}
          {/* 5단계 */}
          {step === 4 && <PublicForm />}
          <ButtonGroup>
            <Button
              type="button"
              onClick={() => setStep(step - 1)}
              disabled={step === 0}
            >
              이전
            </Button>
            {step !== MAX_STEP ? (
              <Button
                key="nextButton"
                type="button"
                onClick={onNextStep}
                disabled={step === MAX_STEP}
              >
                다음
              </Button>
            ) : (
              <Button key="submitButton" type="submit">
                저장
              </Button>
            )}
          </ButtonGroup>
        </Form>
      </FormProvider>
    </BookDetailWrapper>
  );
};

export default BookDetail;
