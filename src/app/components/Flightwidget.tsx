// components/DynamicCards.tsx
"use client";

import CardWrapper from "./CardWrapper";
import { cards } from "../config/cardConfig";

const DynamicCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {cards.map((cardItem, index) => (
        <CardWrapper
          key={index}
          title={cardItem.title}
          description={cardItem.description}
          description2={cardItem.description2}
          card={<cardItem.card />}
        />
      ))}
    </div>
  );
};

export default DynamicCards;
