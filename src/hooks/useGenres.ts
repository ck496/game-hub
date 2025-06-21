import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

// useGenres hook calls generic data fetching hook useData to fetch a list of genres
const useGenres = () => ({
  data: genres,
  error: null,
  isLoading: false,
});

export default useGenres;
