import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct/SingleProduct";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => setProducts(data.meals));
  }, []);
  console.log(products);
  return (
    <>
      <div className="grid grid-cols-3 gap-[25px]">
        {products.map((product) => (
          <SingleProduct key={product.idCategory} product={product} />
        ))}
      </div>
    </>
  );
};

export default AllProduct;
