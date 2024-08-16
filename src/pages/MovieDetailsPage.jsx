import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import MovieInfo from "../components/MovieInfo/MovieInfo";

const MovieDetailsPage = () => {
  return (
    <div>
      <Link to="/movies">
        <button type="button">Go Back</button>
      </Link>
      <MovieCard />
      <MovieInfo />
    </div>
  );
};

export default MovieDetailsPage;
