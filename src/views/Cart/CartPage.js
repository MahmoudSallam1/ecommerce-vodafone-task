import React, { useContext } from "react";
import { GlobalState } from "../../context/GlobalState";

function CartPage() {
  const state = useContext(GlobalState);
  const { cart } = state.cartAPI;
  console.log(cart);

  return (
    <div>
      {cart && cart.length > 0 ? (
        <div className="product__home--container">
          {cart.map((item) => (
            <h6 key={item.id}>{item.title}</h6>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CartPage;
