import React, { useContext } from "react";

import { Radio } from "antd";
import { GlobalState } from "../../context/GlobalState";

import "./categories.styles.css"

function Categories() {
  const state = useContext(GlobalState);
  const { setQuery, categories } = state.productsAPI;

  const handleChangeCategory = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="categories-container">
      {" "}
      <Radio.Group
        onChange={handleChangeCategory}
        defaultValue=""
        buttonStyle="solid"
      >
        <Radio.Button value="">All</Radio.Button>

        {categories && categories.length > 0
          ? categories.map((category) => (
              <Radio.Button key={category} value={category}>
                {category}
              </Radio.Button>
            ))
          : null}
      </Radio.Group>
    </div>
  );
}

export default Categories;
