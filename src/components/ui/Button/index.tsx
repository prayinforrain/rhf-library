import styled from "@emotion/styled";
import { colors } from "@/styles/colors";

const ButtonWrapper = styled.button`
  background-color: ${colors.primary[50]};
  color: ${colors.grey[0]};
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${colors.primary[40]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
