import Radio from "@/components/ui/Radio/Radio";
import { Field, FieldLabel, RowGroup } from "./Field";
import { READING_STATUS } from "@/constants/readingStatus";
import { useFormContext, useWatch } from "react-hook-form";
import Input from "@/components/ui/Input";

const StatusForm = () => {
  const { register, control } = useFormContext();
  const bookStatus = useWatch({ control, name: "readingStatus" });
  return (
    <>
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
    </>
  );
};

export default StatusForm;
