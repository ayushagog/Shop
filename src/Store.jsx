import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const context = createContext();

function Store(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function getproducts() {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        setProducts([]);
        console.error(error);
      });
  }

  useEffect(() => {
    getproducts();
  }, []);

  function addToCart(id) {
    const product = products.find((item) => item.id === id);
    if (!product) return;

    const cartProduct = cart.find((item) => item.id === id);
    if (cartProduct) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function qtyHandler(id, flag) {
    const cartProduct = cart.find((item) => item.id === id);
    if (flag == 1) {
      if (cartProduct) {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
        setCart(updatedCart);
      }
    } else {
      if (cartProduct) {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
        setCart(updatedCart);
      }
    }
  }
  // console.log(cart);

  return (
    <context.Provider value={{ addToCart, cart, qtyHandler }}>
      {props.children}
    </context.Provider>
  );
}

export default Store;
export { context };
