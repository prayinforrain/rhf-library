import debounce from "@/util/debounce";
import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";

interface UseFormStorageProps {
  storageKey: string;
  watch: () => any;
  reset: UseFormReset<any>;
  debounceDelay?: number;
  setStep: (step: number) => void;
  step: number;
}

const useFormStorage = ({
  storageKey,
  watch,
  reset,
  debounceDelay = 1000,
  setStep,
  step,
}: UseFormStorageProps) => {
  const formValues = watch();
  const storage = sessionStorage;

  useEffect(() => {
    const storedStep = storage.getItem(`${storageKey}-step`);
    if (storedStep) {
      setStep(parseInt(storedStep));
    }
    const value = storage.getItem(storageKey);
    if (value) {
      const parsedValue = JSON.parse(value);
      reset(parsedValue);
    }
  }, [storageKey]);

  const saveValueToStorage = (values: any, newStep: number) => {
    storage.setItem(storageKey, JSON.stringify(values));
    storage.setItem(`${storageKey}-step`, newStep.toString());
  };

  useEffect(() => {
    const debouncedSaveValueToStorage = debounce(
      saveValueToStorage,
      debounceDelay
    );
    debouncedSaveValueToStorage(formValues, step);
  }, [formValues, debounceDelay]);

  const clearStorage = () => {
    storage.removeItem(storageKey);
    storage.removeItem(`${storageKey}-step`);
  };

  return {
    clearStorage,
  };
};

export default useFormStorage;
