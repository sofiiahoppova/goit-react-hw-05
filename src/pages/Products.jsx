import { Link } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Смартфон X100",
    description:
      "Потужний смартфон з високоякісною камерою та великим екраном.",
  },
  {
    id: 2,
    name: "Ноутбук ProBook",
    description: "Легкий та продуктивний ноутбук для роботи та навчання.",
  },
  {
    id: 3,
    name: "Навушники SoundMax",
    description:
      "Бездротові навушники з чудовою якістю звуку та шумозаглушенням.",
  },
  {
    id: 4,
    name: "Смарт-годинник FitTime",
    description: "Смарт-годинник для фітнесу з моніторингом серцебиття та GPS.",
  },
  {
    id: 5,
    name: "Планшет TabPlus",
    description: "Потужний планшет з великою батареєю та підтримкою стилуса.",
  },
  {
    id: 6,
    name: "Електросамокат SpeedX",
    description: "Складний електросамокат для швидкого пересування по місту.",
  },
  {
    id: 7,
    name: "Фітнес-браслет ActiveBand",
    description:
      "Водонепроникний фітнес-браслет з функціями трекінгу активності.",
  },
  {
    id: 8,
    name: "Камера ActionCam",
    description:
      "Компактна екшн-камера для зйомки відео в екстремальних умовах.",
  },
  {
    id: 9,
    name: "Мікрохвильова піч QuickHeat",
    description: "Потужна мікрохвильова піч з режимами швидкого приготування.",
  },
  {
    id: 10,
    name: "Бездротова зарядка FastCharge",
    description: "Сучасна бездротова зарядка з підтримкою швидкої зарядки.",
  },
];

const Products = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );
  const handleChange = (e) => {
    const nextParams = e.target.value !== "" ? { name: e.target.value } : {};
    setSearchParams(nextParams);
  };
  return (
    <div>
      <input
        type="text"
        name="userRequest"
        value={productName}
        onChange={handleChange}
      />
      <ul>
        {visibleProducts.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`${product.id}`} state={location}>
                <h3>{product.name}</h3>
              </Link>
              <p>{product.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
