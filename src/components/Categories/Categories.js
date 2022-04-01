import React, { useState, useContext } from "react";

import useFetch from "../../hooks/useFetch";
import { Radio } from "antd";
import { GlobalState } from "../../context/GlobalState";

function Categories() {
  const state = useContext(GlobalState);
  const { setQuery,query } = state.productsAPI;

  const { data } = useFetch("products/categories");


  const handleChangeCategory = (e) => {
    setQuery(e.target.value);
    console.log(setQuery,query);

  };
  return (
    <div>
      {" "}
      <Radio.Group
        onChange={handleChangeCategory}
        defaultValue=""
        buttonStyle="solid"
      >
        <Radio.Button value="">All</Radio.Button>

        {data && data.length > 0
          ? data.map((category) => (
              <Radio.Button key={category} value={category}>{category}</Radio.Button>
            ))
          : null}
      </Radio.Group>
    </div>
  );
}

export default Categories;
