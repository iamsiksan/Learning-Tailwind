import { Link } from "react-router-dom";

const Card = ({ title, description, image, link }) => {
  return (
    <Link to={link} className="block">
      <div className="w-full rounded-xl bg-white p-4 space-y-3 shadow-xl/20 transition">
        
        <img 
          src={image}
          alt={title}
          className="h-40 w-full object-cover rounded-xl"
        />

        <h2 className="font-bold text-lg">{title}</h2>

        <p className="text-gray-500 text-sm line-clamp-2">
          {description}
        </p>

        <span className="text-white text-sm bg-[#003140] px-3 py-2 rounded-md ">Visit Now</span>
      </div>
    </Link>
  );
};

export default Card;

//  <>
// {/* Card Design */}
// <div className="w-full rounded-xl bg-white p-2 space-y-3 shadow-lg ">
//   {/* Image-Section */}
//   <img src="https://cdn.pixabay.com/photo/2024/06/08/18/17/ai-generated-8817346_960_720.png" className="h-50 w-full rounded-xl object-cover" alt="" />
//   {/* Heading */}
//   <h2 className="font-medium text-lg">This is heading.</h2>
//   {/* Description */}
//   <p className="text-gray-400 text-sm line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste aut quas, voluptate libero temporibus dolorem, nostrum quam animi assumenda culpa nulla.</p>
//   {/* CTA */}
//   <a href="" role="button" className="bg-blue-400 inline-block mt-2 mb-2 rounded-md text-white px-3 py-1">Learn More</a>
// </div>
//  </>