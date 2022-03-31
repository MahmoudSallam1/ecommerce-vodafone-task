import React, { useContext } from "react";
import { GlobalState } from "../../context/GlobalState";

function CartPage() {
  const state = useContext(GlobalState);
  const { items, addItemToCart } = state.cartAPI;
  console.log(items);

  return (
    <div>
      {items && items.length > 0 ? (
        <div className="product__home--container">
          {items.map((item) => (
            <h6 key={item.id}>{item.title}</h6>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CartPage;
