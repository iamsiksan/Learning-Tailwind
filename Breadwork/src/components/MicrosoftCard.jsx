import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <Link to={card.link} className="block">
      <div className="w-full sm:max-w-sm h-full flex flex-col items-start bg-white  space-y-3 shadow-xl/20 transition">
        <img
          src={card.image}
          alt={card.title}
          className="h-40 w-full object-cover "
        />

        <h2 className="font-bold bg-purple-800 text-white  p-2 ml-2 w-auto">
          {card.discount}
        </h2>

        <h2 className="font-bold text-lg ml-2">{card.title}</h2>

        <p className="text-gray-500 text-sm line-clamp-2 ml-2 mb-5">
          {card.description}
        </p>

        <span className="text-white text-sm bg-[#003140] px-3 py-2 rounded-md ml-2 mb-2 ">
          Shop Now
        </span>
      </div>
    </Link>
  );
};

export default Card;
