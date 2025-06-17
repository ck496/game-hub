import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface GetGenreResponse {
  count: number;
  results: Genre[];
}

// Custom hook to fetch and return a list of genres from the using an axios apiClient
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // AbortController to handle cancellations if component unmounts while request is still processing
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GetGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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
  }, []); // Empty dependency array ([]) = run once on mount

  return { genres, error, isLoading };
};

export default useGenres;
