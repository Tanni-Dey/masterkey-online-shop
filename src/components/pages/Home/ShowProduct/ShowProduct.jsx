import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import review from "../../../../images/review.png";
import favrioute from "../../../../images/favourite.svg";

const ShowProduct = () => {
  let { id } = useParams();
  const [selectProduct, setSelectProduct] = useState({});
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setSelectProduct(data.meals[0]));
  }, [id]);
  console.log(selectProduct);
  const { strMeal, strMealThumb, strInstructions } = selectProduct;
  const price = 45;
  return (
    <div>
      <div>
        <div>
          <img src={strMealThumb} alt="meal" />
        </div>
        <div>
          <h2>{strMeal}</h2>
          <div>
            <img src={review} alt="" />
            <img src={review} alt="" />
            <img src={review} alt="" />
            <img src={review} alt="" />
            <img src={review} alt="" />
            <span>( 200+ Reviews )</span>
          </div>
          <p>{strInstructions}</p>
          <h5>Price: $ {price}</h5>
          <div>
            <span>Color : </span>
            <button className="w-[20px] h-[20px] bg-black rounded-full"></button>
            <button className="w-[20px] h-[20px] bg-black rounded-full"></button>
            <button className="w-[20px] h-[20px] bg-black rounded-full"></button>
            <button className="w-[20px] h-[20px] bg-black rounded-full"></button>
            <button className="w-[20px] h-[20px] bg-black rounded-full"></button>
            <div>
              <button>-</button>
              <h6>{count}</h6>
              <button>+</button>
            </div>
          </div>
          <div>
            <button>
              <img src={favrioute} alt="" />
            </button>
            <button>Add to card</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
