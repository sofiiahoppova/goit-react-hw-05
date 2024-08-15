import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchMovieDetails } from "../../fetchAPi";
import { useEffect, useState } from "react";

const MovieCard = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        console.log("movieCard error");
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to="/">
        <button type="button">Go Back</button>
      </Link>
      <div>
        <h2>{movieDetails.title}</h2>
        <p>User score: {Math.round(movieDetails.vote_average * 10)}% </p>
        <h3>Overveiw</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movieDetails.genres &&
            movieDetails.genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
