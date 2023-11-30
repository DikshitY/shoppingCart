import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";

function Nav() {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold py-5">Shopping Cart</h1>
      <div className="flex justify-around py-4 bg-slate-200">
        <Link to="/">
          <GoHome className="text-4xl"/>
        </Link>
        <Link to="/cart">
          <FiShoppingCart className="text-4xl"/>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
