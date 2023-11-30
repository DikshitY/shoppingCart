import { faker } from "@faker-js/faker";
import { useContext, useEffect } from "react";
import ShoppingContext from "../context/Context";
import Item from "./Item";

faker.seed(200);

function Home() {
  const { products, setProducts } = useContext(ShoppingContext);
  useEffect(() => {
    const productArray = [...Array(20)].map(() => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
    }));
    setProducts(productArray);
  }, [setProducts]);

  const renderedProducts = products.map((item) => 
    <Item key={item.id} item={item} />
  );

  return <div className="flex flex-wrap justify-around p-5">{renderedProducts}</div>;
}

export default Home;
