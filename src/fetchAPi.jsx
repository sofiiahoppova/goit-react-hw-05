import axios from "axios";
export { fetchAllMovies, fetchMovieDetails };

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGQ2ZDE0NmY2ODg3YzE2NzgzYjllNTRjNTlhNDI2NyIsIm5iZiI6MTcyMzczNjEwNS43MTA4NTcsInN1YiI6IjY2YmUxZDliNDZlMTk1NTlmOTgyOGQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.71EI3TJpafnszUo1y8n_5vNEaVsLm-HNv879Gjnj9gY",
  },
};

const fetchAllMovies = async () => {
  const { data } = await axios(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  //console.log(data.results);
  return data.results;
};

const fetchMovieDetails = async (movieId) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};
