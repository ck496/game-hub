import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface GetGamesResponse {
  const: number;
  results: Game[];
}

// Custom hook to fetch and return a list of games from the using an axios apiClient
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // AbortController to handle cancellations if component unmounts while request is still processing
    const controller = new AbortController();

    apiClient
      .get<GetGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        // ignore errors caused by Cancellations
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // Cleanup function to cancel request when component unmounts
    return () => controller.abort();
  }, []); // Empty dependency array ([]) = run once on mount

  return { games, error };
};

export default useGames;
