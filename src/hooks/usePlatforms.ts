import useData from "./useData";

export interface Platform {
  id: number;
  name: "string";
  slug: "string";
  games_count: number;
  image_background: string;
  image: string;
  year_start: number;
  year_end: number;
}

// usePlatforms hook calls the generic data fetching hook useData to fetch a list of platforms
const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
