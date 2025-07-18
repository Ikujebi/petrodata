import { useState } from "react";
import Product from "../components/Product";
import CardWrapper from "../components/CardWrapper";
import { cards } from "../config/cardConfig";

export function useMainContent() {
  const [activeItem, setActiveItem] = useState("Product retail price");

  const renderContent = () => {
    if (activeItem === "Product retail price") {
      return <Product />;
    }

    

    // Find the matching card config item
    const match = cards.find((card) => card.title === activeItem);
    if (match) {
      return (
        <CardWrapper
          title={match.title}
          description={match.description}
          description2={match.description2}
          card={<match.card />}
        />
      );
    }

    return <Product />; // fallback
  };

  return { activeItem, setActiveItem, renderContent };
}
