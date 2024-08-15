import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { fetchAllMovies } from "../fetchAPi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const results = await fetchAllMovies();
        console.log(results);
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
