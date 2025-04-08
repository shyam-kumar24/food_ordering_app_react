import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item))
  }

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="flex flex-col">
              <span className="text-lg font-medium">
                {item?.card?.info?.name}
              </span>
              <span>
                Rs.{" "}
                {item?.card?.info?.price
                  ? Math.floor(item?.card?.info?.price / 100)
                  : Math.floor(item?.card?.info?.defaultPrice / 100)}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 m-2">
            <div className="absolute">
              <button className="p-2 bg-white shadow-lg mx-2 my-2 cursor-pointer rounded-xl"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded"
            />
          </div>
        </div>
      ))}
    </div>
  );

};

export default ItemList;
