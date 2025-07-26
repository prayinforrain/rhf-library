import Textarea from "@/components/ui/Textarea";
import { Field, FieldLabel } from "./Field";
import { useFormContext, useWatch } from "react-hook-form";

const ReviewForm = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const ratingStr = useWatch({ control, name: "rating" });
  const rating = Number(ratingStr);
  const isRequired = rating === 1 || rating === 5;
  return (
    <>
      <Field>
        <FieldLabel>독후감</FieldLabel>
        <Textarea
          {...register("review", {
            required: {
              value: isRequired,
              message: "독후감을 입력해주세요.",
            },
            minLength: {
              value: isRequired ? 10 : 0,
              message: "최소 10자 이상 입력해주세요.",
            },
          })}
          placeholder="독후감을 입력해주세요."
        />
      </Field>
    </>
  );
};

export default ReviewForm;
