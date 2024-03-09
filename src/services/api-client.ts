import axios from "axios";
//To create an Axios instance with a custom configuration.
//With this configuration, this key will be included in the query string of every HTTP request we send to our backend.
//Now we should also set the base URL here.
//we use all this information of "Rawg.io" web site.
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "421f7482e6784ebeb4a06942361b7d3c",
  },
});
