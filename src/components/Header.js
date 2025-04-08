import { useState , useContext} from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus()

  const {loggedInUser} = useContext(UserContext)
  // console.log(loggedInUser);

  // subscribing to the store using a selector.

  const cartItems = useSelector((store) => store.cart.items)

  console.log(cartItems);

  return (
    <div className="flex justify-between items-center border border-black shadow-lg mx-1 my-2">
      <div className="logo-container">
        <img className="h-[200px] ml-5" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul className="flex p-5 m-5 gap-10">
          <li>Online status: {onlineStatus ? '✅' : '🔴'}</li>
          <li><Link to='./'>Home</Link></li>
          <li><Link to='./about'>About us</Link></li>
          <li><Link to='./contact'>Contact us</Link></li>
          <li><Link to='./grocery'>Grocery</Link></li>
          <li className="font-bold text-xl"><Link to='./cart'>Cart({cartItems.length} items)</Link></li>
          <button
            className="login-btn"
            onClick={() =>
              btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn")
            }
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
