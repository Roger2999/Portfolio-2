import { useEffect, useState } from "react";

interface Params<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const controller = new AbortController();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, controller);
        if (!response.ok) {
          throw new Error(
            `Error in the response: ${response.status} ${response.statusText}`
          );
        }
        const result: T = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }

      return () => {
        controller.abort();
      };
    };
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};
