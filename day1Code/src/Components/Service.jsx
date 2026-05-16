import { useNavigate } from "react-router-dom"

const Service = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1  className="text-6xl mb-7 font-thin">Service</h1>
       <button
        onClick={() => navigate("/Service/Details")}
        className="bg-white rounded text-black py-1 px-3 font-medium cursor-pointer mb-7"
      >
        More Service
      </button>
    </div>
  )
}

export default Service