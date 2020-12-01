import MovieDetails from "../src/components/MovieDetails";
import Layout from "../src/components/Shared/Layout";
import { getMovieDetails } from "../src/services";

export default function Movie({ Movie }) {
  return (
    <Layout title={Movie?.Title || ""}>
      <MovieDetails movie={Movie} />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { imdbID } = params;

  if (!imdbID)
    return {
      props: {
        Error: "Movie not found",
      },
    };
  const data = await getMovieDetails({ imdbID });
  return {
    props: { Movie: data },
  };
};
