import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genre } from "./useGenres";

interface GetResponse<T> {
  count: number;
  results: T[];
}

// Custom hook to fetch and return a list of games from the using an axios apiClient
const useGames = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      // AbortController to handle cancellations if component unmounts while request is still processing
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<GetResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          // ignore errors caused by Cancellations
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      // Cleanup function to cancel request when component unmounts
      return () => controller.abort();
    },
    deps ? [...deps] : []
  ); // Empty dependency array ([]) = run once on mount

  return { data, error, isLoading };
};

export default useGames;
