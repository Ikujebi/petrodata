// hooks/useMainContent.tsx

import { useState } from "react";
import Product from "../components/Product";
import Card5 from "../components/Card1";
import { cards } from "../config/cardConfig";

export function useMainContent() {
  const [activeItem, setActiveItem] = useState("Product retail price");

  const renderContent = () => {
    if (activeItem === "Product retail price") {
      return <Product />;
    }

    if (activeItem === "Exchange rate") {
      return <Card5 />;
    }

    const match = cards.find((card) => card.title === activeItem);
    if (match) {
      const CardComponent = match.card;
      return <CardComponent />;
    }

    return <Product />; // fallback
  };

  return { activeItem, setActiveItem, renderContent };
}
