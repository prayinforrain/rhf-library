const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    // @ts-ignore
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};

export default debounce;
