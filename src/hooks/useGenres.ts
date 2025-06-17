import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

// useGenres hook calls generic data fetching hook useData to fetch a list of genres
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
