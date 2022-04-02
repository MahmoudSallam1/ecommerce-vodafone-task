import { createContext, useState } from "react";
import ProductsAPI from "../apis/ProductsAPI";
import CartAPI from "../apis/CartAPI";
import UserAPI from "../apis/UserAPI";

export const GlobalState = createContext();

export const GlobalStateContext = ({ children }) => {
  const [token, setToken] = useState(false);

  const statedData = {
    token: [token, setToken],
    productsAPI: ProductsAPI(),
    cartAPI: CartAPI(),
    userAPI:UserAPI()
  };

  return (
    <GlobalState.Provider value={statedData}>{children}</GlobalState.Provider>
  );
};
