import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1 className="text-5xl mb-7 font-thin">{params.name}</h1>
      <h2 className="text-3xl mb-4 font-thin">Product detail...</h2>
      <button
        onClick={() => navigate(-1)}
        className="bg-white rounded text-black py-1 px-3 font-medium cursor-pointer mb-7"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
