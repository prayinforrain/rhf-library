import Textarea from "@/components/ui/Textarea";
import { Field, FieldLabel } from "./Field";
import { useFormContext } from "react-hook-form";

const ReviewForm = () => {
  const { register } = useFormContext();
  return (
    <>
      <Field>
        <FieldLabel>독후감</FieldLabel>
        <Textarea
          {...register("review")}
          placeholder="독후감을 입력해주세요."
        />
      </Field>
    </>
  );
};

export default ReviewForm;
