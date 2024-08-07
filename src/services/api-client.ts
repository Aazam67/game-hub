import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d3b2a8a923ee4260b02057500e7d1e40",
  },
});
