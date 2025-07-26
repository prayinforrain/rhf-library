import Input from "@/components/ui/Input";
import { Field, FieldLabel, RowGroup } from "./Field";
import { useFormContext } from "react-hook-form";
import Checkbox from "@/components/ui/Checkbox";

const RatingForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
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
            {...register("rating", {
              required: {
                value: true,
                message: "평점을 입력해주세요.",
              },
              validate: (value) => {
                const valueNumber = Number(value);
                if (valueNumber % 0.5 !== 0) {
                  return "0.5 단위로 입력해주세요.";
                }
                return true;
              },
            })}
          />
        </RowGroup>
      </Field>
    </>
  );
};

export default RatingForm;
