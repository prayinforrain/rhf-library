import Button from "@/components/ui/Button";
import { Field, FieldLabel, RowGroup } from "./Field";
import Input from "@/components/ui/Input";
import styled from "@emotion/styled";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import ErrorWrapper from "./ErrorWrapper";
import { RHFFormError } from "@/types/rhf-error";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: auto;
`;

const QuoteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const QuoteForm = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const totalPages = useWatch({ control, name: "totalPages" });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "quotes",
  });

  const isPageRequired = fields.length > 1;

  const quoteErrors = errors.quotes as unknown as
    | (
        | {
            text: RHFFormError;
            pageNumber: RHFFormError;
          }
        | undefined
      )[]
    | undefined;

  return (
    <Field>
      <FieldLabel>
        인용구
        <ButtonGroup>
          <Button
            type="button"
            onClick={() =>
              append({
                id: `${Number(fields[fields.length - 1]?.id ?? 0) + 1}`,
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
              <ErrorWrapper error={quoteErrors?.[index]?.text}>
                <Input
                  type="text"
                  {...register(`quotes.${index}.text`, {
                    required: {
                      value: true,
                      message: "인용구를 입력해주세요.",
                    },
                  })}
                  placeholder="인용구를 입력해주세요."
                />
              </ErrorWrapper>
              <ErrorWrapper error={quoteErrors?.[index]?.pageNumber}>
                <Input
                  type="number"
                  min={1}
                  max={totalPages ?? 0}
                  {...register(`quotes.${index}.pageNumber`, {
                    required: {
                      value: isPageRequired,
                      message: "페이지 번호를 입력해주세요.",
                    },
                    max: {
                      value: totalPages,
                      message: "책의 페이지 번호를 초과할 수 없습니다.",
                    },
                  })}
                  style={{ width: "auto" }}
                />
              </ErrorWrapper>
              <Button type="button" onClick={() => remove(index)}>
                삭제
              </Button>
            </RowGroup>
          </li>
        ))}
      </QuoteList>
    </Field>
  );
};

export default QuoteForm;
