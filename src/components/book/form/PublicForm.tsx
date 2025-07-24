import Checkbox from "@/components/ui/Checkbox";
import { Field, FieldLabel, RowGroup } from "./Field";
import { useFormContext } from "react-hook-form";

const PublicForm = () => {
  const { register } = useFormContext();
  return (
    <>
      <Field>
        <FieldLabel>공개 여부</FieldLabel>
        <RowGroup>
          <Checkbox label="공개" {...register("isPublic")} />
        </RowGroup>
      </Field>
    </>
  );
};

export default PublicForm;
