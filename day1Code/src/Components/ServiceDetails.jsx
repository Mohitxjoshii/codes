import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();


  return (
    <div>
      <h1 className="text-5xl mb-7 font-thin">More Service</h1>
      <h2 className="text-3xl mb-4 font-thin">choose us...</h2>
      <button
        onClick={() => navigate(-1)}
        className="bg-white rounded text-black py-1 px-3 font-medium cursor-pointer mb-7"
      >
        Go Back
      </button>
    </div>
  );
};

export default ServiceDetails;