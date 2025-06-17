import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// useGames hook calls generic data fetching hook useData to fetch a list of games
const useGames = () => useData<Game>("/games");

export default useGames;
