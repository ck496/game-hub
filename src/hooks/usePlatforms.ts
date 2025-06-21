import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// usePlatforms hook calls the generic data fetching hook useData to fetch a list of platforms
const usePlatforms = () => ({ data: platforms, error: null, isLoading: false });

export default usePlatforms;
