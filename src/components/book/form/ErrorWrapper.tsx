import { RHFFormError } from "@/types/rhf-error";
import styled from "@emotion/styled";
import { cloneElement, isValidElement } from "react";

const Wrapper = styled.div`
  position: relative;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 0.25rem 0.5rem;
`;

interface ErrorWrapperProps {
  children: React.ReactNode;
  error?: RHFFormError;
}

const ErrorWrapper = ({ children, error }: ErrorWrapperProps) => {
  // NOTE: 실제로 input element인지 확인할 수는 없음
  const Children = isValidElement<HTMLElement>(children)
    ? cloneElement(children, {
        className: [children.props.className, error && "error"]
          .filter(Boolean)
          .join(" "),
      })
    : null;

  return (
    <Wrapper>
      {Children}
      {error && typeof error.message === "string" && (
        <ErrorMessage>{error.message}</ErrorMessage>
      )}
    </Wrapper>
  );
};

export default ErrorWrapper;
