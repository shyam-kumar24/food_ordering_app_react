import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;

  const cardsArray =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // console.log(cardsArray);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(" ,")}</h3>
      {cardsArray.map((category, i) =>
        category?.card?.card.title ? (
          <RestaurantCategory
            key={i}
            data={category?.card?.card}
            showItems={i === showIndex ? true : false}
            setShowIndex={() => setShowIndex(i)}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default RestaurantMenu;
