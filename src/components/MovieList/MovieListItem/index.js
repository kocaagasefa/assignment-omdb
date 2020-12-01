import Link from "next/link";
import { Card } from "react-bootstrap";
import classes from "./style.module.css";
const MovieListItem = ({ data }) => (
  <Card className={classes.movieListItemContainer + " shadow"}>
    <Card.Img src={data.Poster} className={classes.moviePoster} />
    <Link href={"/" + data.imdbID}>
      <a className={classes.link}></a>
    </Link>
    <Card.Body className="text-center">
      <Card.Title>{data.Title}</Card.Title>
      <Card.Text>{data.Year}</Card.Text>
    </Card.Body>
  </Card>
);

export default MovieListItem;
