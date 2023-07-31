import {useState, useEffect, useCallback} from 'react';

type ThrottleFunction = (...args: any[]) => void;

function useThrottle(func: ThrottleFunction, delay: number): ThrottleFunction {
  const [lastExecutionTime, setLastExecutionTime] = useState<number>(0);
  const [timeout, setTimeoutState] = useState<NodeJS.Timeout | null>(null);

  const throttledFunction: ThrottleFunction = useCallback((...args) => {
    const currentTime = Date.now();
    const timeSinceLastExecution = currentTime - lastExecutionTime;

    if (!lastExecutionTime || timeSinceLastExecution >= delay) {
      func(...args);
      setLastExecutionTime(currentTime);
    } else if (!timeout) {
      const newTimeout = setTimeout(() => {
        func(...args);
        setLastExecutionTime(Date.now());
        setTimeoutState(null);
      }, delay - timeSinceLastExecution);

      setTimeoutState(newTimeout);
    }
  }, []);

  useEffect(() => {
    return () => {
      // Clean up the timeout on unmount
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  return throttledFunction;
}

export default useThrottle;
