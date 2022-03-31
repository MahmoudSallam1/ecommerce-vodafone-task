import React, { useContext } from "react";
import { GlobalState } from "../../context/GlobalState";

function HomePage() {
  const state = useContext(GlobalState);
  const { products } = state.productsAPI;
  const { items, addItemToCart } = state.cartAPI;

  return (
    <div>
      {products && products.length > 0 ? (
        <div className="product__home--container">
          {products.map((product) => (
            <h3 onClick={() => addItemToCart(product)} key={product.id}>
              {product.title}
            </h3>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <div>
        {items && items.length > 0 ? (
          <div className="product__home--container">
            {items.map((item) => (
              <h6  key={item.id}>
                {item.title}
              </h6>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
