import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log("component rendered.", listOfRestaurants);

  useEffect(() => {
    fetchData();
    // console.log("use effect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // optional chaining

    const filteredRestaurantsList =
      json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants;
    setListOfRestaurants(filteredRestaurantsList);
    setFilteredRestaurant(filteredRestaurantsList);
  };

  // console.log(searchText);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Please check your wifi connection</h1>;
  }

  const { setUserName , loggedInUser} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="search p-4 m-4 flex gap-5">
          <input
            type="text"
            className="border border-solid border-black rounded-md h-8 w-100"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredName = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(searchText);
              setFilteredRestaurant(filteredName);
            }}
            className="bg-gray-300 px-3 rounded-md cursor-pointer h-8"
          >
            Search
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="bg-gray-300 px-3 rounded-md cursor-pointer h-8"
            onClick={() => {
              let filteredList = listOfRestaurants.filter(
                (rest) => rest.info.avgRating > 4.3
              );
              // setListOfRestaurants(filteredList);
              // trial
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="bg-gray-300 px-3 rounded-md cursor-pointer"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurants);
            }}
          >
            All restaurant
          </button>
        </div>
        {/* trail component */}
        <div className="m-4 p-4 flex items-center">
          <label>Username: </label>
          <input
            type="text"
            className="border border-black px-2 box-border"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
        {/* above is for trial  */}
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res.info.avgRating >= 4.5 ? (
              <RestaurantCardPromoted
                name={res.info.name}
                cuisines={res.info.cuisines.join(" ,")}
                rating={res.info.avgRating}
                constForTwo={res.info.costForTwo}
                deliveryTime={res.info.sla.deliveryTime}
                claudinaryImgId={res.info.cloudinaryImageId}
              />
            ) : (
              <RestaurantCard
                name={res.info.name}
                cuisines={res.info.cuisines.join(" ,")}
                rating={res.info.avgRating}
                constForTwo={res.info.costForTwo}
                deliveryTime={res.info.sla.deliveryTime}
                claudinaryImgId={res.info.cloudinaryImageId}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
