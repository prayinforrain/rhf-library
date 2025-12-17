interface StepsProps {
  currentStep: number;
  cases: {
    [key: number]: React.ReactNode;
  };
}

const Steps = ({ currentStep, cases }: StepsProps) => {
  return cases[currentStep];
};

export default Steps;
