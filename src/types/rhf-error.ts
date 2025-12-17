import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export type RHFFormError = FieldError | Merge<FieldError, FieldErrorsImpl>;
