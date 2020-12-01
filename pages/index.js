import { useRouter } from "next/router";
import { searchMovies } from "../src/services";
import Layout from "../src/components/Shared/Layout";
import MovieList from "../src/components/MovieList";

export default function Home({ Search, Error, totalResults }) {
  const { query } = useRouter();
  return (
    <Layout title={`${query.s || ""} search results`}>
      <MovieList movies={Search} error={Error} totalResults={totalResults} />
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  if (!query.s)
    return {
      props: {
        Error: "Type something to search",
        Response: "Error",
      },
    };

  const params = { s: query.s };

  if (+query.page) params.page = +query.page;

  const data = await searchMovies(params);
  return { props: data };
};

// Home.getInitialProps = async ({ query }) => {
//   if (!query.s)
//     return {
//       Error: "Type something to search",
//       Response: "Error",
//     };

//   const params = { s: query.s };

//   if (+query.page) params.page = +query.page;

//   const data = await searchMovies(params);
//   return data;
// };
