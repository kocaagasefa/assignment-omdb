import Axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 60 * 60 * 1000,
  exclude: {
    query: false,
  },
});
const api = Axios.create({
  adapter: cache.adapter,
  baseURL: process.env.NEXT_PUBLIC_OMDB_REST_API,
});

export const searchMovies = ({ s, page }) => {
  return api
    .get("/", {
      params: { s, page, apikey: process.env.OMDB_API_KEY },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => ({
      Response: "False",
      Error: e?.message || "Something went wrong!",
    }));
};

export const getMovieDetails = ({ imdbID }) => {
  return api
    .get("/", {
      params: { i: imdbID, apikey: process.env.OMDB_API_KEY },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => ({
      Response: "False",
      Error: e?.message || "Something went wrong!",
    }));
};
