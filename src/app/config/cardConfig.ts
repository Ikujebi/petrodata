import Card1 from "../components/sideItems/Flight";
import Card2 from "../components/sideItems/Deposit";
import Card3 from "../components/sideItems/News";
import Card4 from "../components/sideItems/Report";
import Card5 from "../components/sideItems/Exchange";

export const cards = [
  {
    title: "Flight widget",
    description: "View the weekly number of flights, categorized by ",
    description2: "international and domestic routes",
    card: Card1,
  },
  {
    title: "Depot widget",
    description: "Monitor depot prices on a weekly basis",
    description2: "",
    card: Card2,
  },
  {
    title: "News widget",
    description: "Get the latest industry news and updates",
    description2: "",
    card: Card3,
  },
  {
    title: "Report widget",
    description: "Get comprehensive reports & insights",
    description2: "of watchlist throughout the week",
    card: Card4,
  },
  {
    title: "Exchange rate",
    description: "Get updates on new prices of dollar",
    card: Card5,
  },
];