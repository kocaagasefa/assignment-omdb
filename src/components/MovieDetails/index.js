import { Image, Row, Col, Card } from "react-bootstrap";
import Message from "../Shared/Message";
import classes from "./style.module.css";
import classNames from "classnames";
const MovieDetails = ({ movie }) => {
  if (movie.Error) return <Message text={movie.Error} />;
  return (
    <>
      <Card className="p-5 shadow">
        <Row>
          <Col sm={4}>
            <Image src={movie.Poster} className={classes.poster} />
          </Col>
          <Col
            sm={8}
            className={classNames("px-2", classes.movieDataContainer)}
          >
            <div className="mb-3">
              <div className={classes.itemKey}>
                <strong>Title:</strong>
              </div>
              <span>{movie.Title}</span>
            </div>
            <div className="mb-3">
              <div className={classes.itemKey}>
                <strong>Year:</strong>
              </div>
              <span>{movie.Year}</span>
            </div>
            <div className="mb-3">
              <div className={classes.itemKey}>
                <strong>Runtime:</strong>
              </div>
              <span>{movie.Runtime}</span>
            </div>
            <div className="mb-5">
              <div className={classes.itemKey}>
                <strong>Actors:</strong>
              </div>
              <span>{movie.Actors}</span>
            </div>
            <div className="mb-3 pt-3">
              <div className={classes.itemKey}>
                <strong>Awards:</strong>
              </div>
              <span>{movie.Awards}</span>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default MovieDetails;
