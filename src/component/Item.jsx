import { useContext } from "react";
import ShoppingContext from "../context/Context";

function Item({ item }) {
  const { cart, setCart } = useContext(ShoppingContext);

  const addItem = () => {
    setCart([...cart, item]);
  };

  const removeItem = () => {
    setCart(
      cart.filter((prod) => {
        return item.id !== prod.id;
      })
    );
  };

  return (
    <div className="w-80 flex flex-col border-2 border-slate-400 p-2 rounded mb-8">
      <div className="w-full">
        <img src={item.image} />
      </div>
      <div className="flex justify-between m-2">
        <span >{item.name}</span>
        <span className="font-bold">{`$${item.price}`}</span>
      </div>
      {cart.includes(item) ? (
        <button className="bg-slate-500 text-white py-2 rounded" onClick={removeItem}>Remove from Cart</button>
      ) : (
        <button className="bg-slate-500 text-white py-2 rounded" onClick={addItem}>Add to Cart</button>
      )}
    </div>
  );
}

export default Item;