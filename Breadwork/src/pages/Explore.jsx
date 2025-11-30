import Card from "../components/Card";
import { cardData } from "../data/cardData";

const Explore = () => {
  return (
    <div className="p-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
