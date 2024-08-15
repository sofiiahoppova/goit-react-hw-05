import { NavLink, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieCard from "./components/MovieCard/MovieCard";
// import Cast from "./components/Cast/Cast";
// import Reviews from "./components/Reviews/Reviews";

import clsx from "clsx";
import css from "./App.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <div>
      <header className={css.headerNav}>
        <nav className={css.navigation}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieCard />} />
      </Routes>
    </div>
  );
}

export default App;
