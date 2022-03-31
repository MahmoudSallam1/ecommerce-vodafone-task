import { createContext, useState } from "react";
import ProductsAPI from "../apis/ProductsAPI";
import CartAPI from "../apis/CartAPI";

export const GlobalState = createContext();

export const GlobalStateContext = ({ children }) => {
  const [token, setToken] = useState(false);

  const statedData = {
    token: [token, setToken],
    productsAPI: ProductsAPI(),
    cartAPI: CartAPI(),
  };

  return (
    <GlobalState.Provider value={statedData}>{children}</GlobalState.Provider>
  );
};
