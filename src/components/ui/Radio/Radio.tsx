import { colors } from "@/styles/colors";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const RadioInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: white;
  border: 0.1em solid ${colors.grey[40]};
  cursor: pointer;
  &:hover:not(:disabled) {
    background-color: ${colors.grey[30]};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:checked {
    border: 0.4em solid ${colors.primary[50]};
    background-color: ${colors.primary[0]};
  }
`;

const RadioLabel = styled.span`
  font-size: 1rem;
  input:disabled + & {
    cursor: not-allowed;
    color: ${colors.grey[40]};
  }
`;

interface RadioProps extends ComponentProps<"input"> {
  label: string;
}

const Radio = ({ label, ...props }: RadioProps) => {
  return (
    <RadioContainer>
      <RadioInput type="radio" {...props} />
      <RadioLabel>{label}</RadioLabel>
    </RadioContainer>
  );
};

export default Radio;
