import { useRouter } from "next/router";
import qs from "qs";
import { Row, Col } from "react-bootstrap";
import Message from "../Shared/Message";
import MovieListItem from "./MovieListItem";
import Pagination from "../Shared/Pagination";
import SearchBar from "../Shared/Searchbar";

const MovieList = ({ error, movies, totalResults }) => {
  const { pathname, push, query } = useRouter();
  const page = query.page || 1;

  const onSearch = (searchText) => {
    push(pathname + qs.stringify({ s: searchText }, { addQueryPrefix: true }));
  };
  const onPaginate = ({ selected }) => {
    const params = {
      s: query.s,
    };
    if (selected) params.page = selected + 1;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    push(pathname + qs.stringify(params, { addQueryPrefix: true }));
  };
  return (
    <>
      <SearchBar onChange={onSearch} />
      <Row>
        {movies?.map((movie) => (
          <Col key={movie.imdbID} sm={4}>
            <MovieListItem data={movie} />
          </Col>
        ))}
      </Row>

      {error && <Message text={error} />}
      {totalResults && totalResults > 10 && (
        <Pagination
          pageCount={Math.ceil(totalResults / 10)}
          currentPage={+page - 1}
          onPageChange={onPaginate}
        />
      )}
    </>
  );
};

export default MovieList;
