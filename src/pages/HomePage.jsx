import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { fetchTrendingMovies } from "../fetchAPi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const results = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {}
    };
    getAllMovies();
  }, []);
  return (
    <div>
      <h1>Trending now</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
