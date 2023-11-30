import { createContext, useState } from "react";

const ShoppingContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <ShoppingContext.Provider value={{ products, cart, setProducts, setCart }}>
      {children}
    </ShoppingContext.Provider>
  );
}

export default ShoppingContext;
export { Provider }