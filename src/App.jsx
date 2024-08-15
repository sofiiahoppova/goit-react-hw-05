import css from "./App.module.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsItem from "./components/ProductsItem/ProductsItem";
import { NavLink, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <nav className={css.navigation}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/about" className={css.link}>
            About
          </NavLink>
          <NavLink to="/products" className={css.link}>
            Products
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsItem />} />
      </Routes>
    </div>
  );
}

export default App;
