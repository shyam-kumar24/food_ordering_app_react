
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({name,cuisines,rating,constForTwo,deliveryTime, claudinaryImgId}) => {
    return (
      <div className="hover:scale-105 transform transition-transform duration-300 ease-in-out m-4 p-4 w-[300px] bg-gray-300 h-[550px] rounded-lg flex flex-col gap-2 overflow-hidden">
        <img
          src={CDN_URL + claudinaryImgId}
          alt=""
          className="h-[300px] w-screen rounded-xl"
        />
        <h3 className="font-bold my-2 text-lg">{name}</h3>
        <h3>{cuisines}</h3>
        <h3>{rating} stars</h3>
        <h3>{constForTwo}</h3>
        <h3>{deliveryTime} minutes</h3>
      </div>
    );
  };

// higher order component;
// input => RestaurantCard => RestaurantCardPromoted.

export const withPromotedLabel = (RestaurantCard) => {

  return ({name,cuisines,rating,constForTwo,deliveryTime, claudinaryImgId}) => {
    return (
    <div className="relative">
       <label className="absolute bg-black text-white px-2 py1 rounded top-2 left-3 z-10">Rating above 4.5</label>
       <RestaurantCard {...{name,cuisines,rating,constForTwo,deliveryTime, claudinaryImgId}}/>
    </div>
    )
  }
}
export default RestaurantCard