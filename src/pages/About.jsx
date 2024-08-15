import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default About;
