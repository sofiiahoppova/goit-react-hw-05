import { Link } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";

import MoviesList from "../components/MoviesList/MoviesList";
import { fetchMovies } from "../fetchAPi";
import { useState } from "react";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  /* const location = useLocation();*/
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const handleChange = (e) => {
    const nextParams = e.target.value !== "" ? { name: e.target.value } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.userRequest.value);
    const data = await fetchMovies(e.target.userRequest.value);
    setMovies(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userRequest"

          /*  value={productName}*/
        />
        <button type="submit">Search</button>
      </form>

      {movies !== null && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
