import styled from "@emotion/styled";
import { ComponentProps } from "react";

const CheckboxContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  align-items: center;
`;

const CheckboxWrapper = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.2rem;

  &.error {
    border-color: red;
  }
`;

const CheckboxLabel = styled.span`
  font-size: 1rem;
`;

interface CheckboxProps extends ComponentProps<"input"> {
  label: string;
}

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <CheckboxWrapper type="checkbox" {...props} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
