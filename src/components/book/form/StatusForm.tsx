import Radio from "@/components/ui/Radio/Radio";
import { Field, FieldLabel, RowGroup } from "./Field";
import { READING_STATUS } from "@/constants/readingStatus";
import { useFormContext, useWatch } from "react-hook-form";
import Input from "@/components/ui/Input";
import ErrorWrapper from "./ErrorWrapper";

const StatusForm = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
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
          <ErrorWrapper error={errors.startDate}>
            <Input
              type="date"
              {...register("startDate", {
                required: {
                  value: bookStatus !== READING_STATUS.WANT_TO_READ,
                  message: "시작 날짜를 입력해주세요.",
                },
              })}
              disabled={bookStatus === READING_STATUS.WANT_TO_READ}
            />
          </ErrorWrapper>
          <ErrorWrapper error={errors.endDate}>
            <Input
              type="date"
              {...register("endDate", {
                required: {
                  value: bookStatus === READING_STATUS.FINISHED,
                  message: "종료 날짜를 입력해주세요.",
                },
              })}
              disabled={bookStatus !== READING_STATUS.FINISHED}
            />
          </ErrorWrapper>
        </RowGroup>
      </Field>
    </>
  );
};

export default StatusForm;
