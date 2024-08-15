import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductsItem = () => {
  const { productId } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Link to={location.state ?? "/products"}>
        <button type="button">Go Back</button>
      </Link>
      <p>ProductsItem Id: {productId}</p>
    </div>
  );
};

export default ProductsItem;
