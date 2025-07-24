import styled from "@emotion/styled";
import { colors } from "@/styles/colors";

const TextareaWrapper = styled.textarea`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  border: 1px solid ${colors.grey[20]};
  background-color: ${colors.grey[0]};
  color: ${colors.grey[100]};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  transition: border-color 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: ${colors.grey[10]};
  }
`;

const Textarea = ({
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <TextareaWrapper {...props} />;
};

export default Textarea;
