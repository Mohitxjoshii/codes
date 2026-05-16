import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const navigateHandler = (name) => {
    navigate(`/Product/details/${name}`);
  };

  return (
    <div>
      <h1 className="text-6xl mb-7 font-thin">Products</h1>
      <div className="mb-10">
        <h1 className="text-4xl font-thin mb-4">Product 1</h1>
        <button
          onClick={() => navigateHandler("Product 1")}
          className="bg-white rounded text-black py-1 px-3 font-medium cursor-pointer"
        >
          See Details
        </button>
      </div>
      <div className="mb-10">
        <h1 className="text-4xl font-thin mb-4">Product 2</h1>
        <button
          onClick={() => navigateHandler("Product 2")}
          className="bg-white rounded text-black py-1 px-3 font-medium cursor-pointer"
        >
          See Details
        </button>
      </div>
      <div className="mb-10">
        <h1 className="text-4xl font-thin mb-4">Product 3</h1>
        <button
          onClick={() => navigateHandler("Product 3")}
          className="bg-white rounded text-black py-1 px-3 font-medium cursor-pointer"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Product;
