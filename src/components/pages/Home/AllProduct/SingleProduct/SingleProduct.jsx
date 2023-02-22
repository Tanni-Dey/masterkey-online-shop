import React from "react";
import star from "../../../../../images/star.png";
import productPlus from "../../../../../images/product_plus.png";
import { Link } from "react-router-dom";
import ShowProduct from "../../ShowProduct/ShowProduct";

const SingleProduct = ({ product }) => {
  const { strMeal, strMealThumb, idMeal } = product;
  console.log(product);
  const price = 45;
  return (
    <Link to={idMeal}>
      {/* <ShowProduct id={idMeal} /> */}
      {/* onClick={() => ShowProduct(idMeal)} */}
      <div className="p-[8px] rounded-[15px] bg-white shadow shadow-[3px_8px_12px_rgba(0, 0, 0, 0.25)]">
        <img src={strMealThumb} alt="meal" />
        <h5 className="font-semibold text-[22px] text-left pb-[3px]">
          {strMeal}
        </h5>
        <h5 className="text-left text-[22px] text-[#2F2929] pb-[3px] opacity-[62%]">
          Price : ${price}
        </h5>
        <div className="flex items-end justify-between">
          <div className="flex items-center">
            <img src={star} alt="star" />
            <span className="text-[#38FF4C] font-semibold text-[20px] ml-[4px]">
              4.9
            </span>
          </div>
          <div>
            <button className="bg-[#38FF4C] rounded-full p-[4px]">
              <img src={productPlus} alt="" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
