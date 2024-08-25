import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slag: string;
}
const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
