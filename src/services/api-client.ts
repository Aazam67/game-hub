import axios from "axios";
//To create an Axios instance with a custom configuration.
//With this configuration, this key will be included in the query string of every HTTP request we send to our backend.
//Now we should also set the base URL here.
//we use all this information of "raw dot io" web site.
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  // headers: { "Access-Control-Allow-Origin": "*" },
  params: {
    key: "84149e356dfb4f22a50375762c624dc3",
  },
});
