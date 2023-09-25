import { useState } from "react";

import bag from "/svg/shopping-bag-02.svg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import star from "/svg/star-01.svg";

import Header from "../components/Header";
import {
  routePage,
  selectAllProducts,
  toggleFavorites,
} from "../store/products-slice";
import { addCartProduct } from "../store/cart-slice";
import { useAppDispatch, useAppSelector } from "../hooks";

type sizeType = "S" | "M" | "L";
export default function ProductDetail() {
  const dispatch = useAppDispatch();
  const { productDetail: details, favorites } =
    useAppSelector(selectAllProducts);

  if (!details) {
    throw Error("Detail Of Product Undefined");
  }

  const { key, title, imageUrl, review, description, price, rating } = details;

  const [size, setSize] = useState<sizeType | null>(null);

  const addToCartHandler = () => {
    if (!size) {
      throw Error("Set the Appropriate Size");
    }
    console.log({
      product: details,
      size,
      quantity: 1,
    });

    dispatch(
      addCartProduct({
        product: details,
        size,
        quantity: 1,
      })
    );

    dispatch(routePage({ page: "Cart" }));
  };

  return (
    <div className="overflow-clip h-full">
      <Header isIcon>Details</Header>
      <main className="h-full m-8 relative mt-[6.5rem] overflow-auto">
        <button
          onClick={() => dispatch(toggleFavorites(key))}
          className="absolute right-6 top-6 bg-white p-2 rounded-lg shadow-2xl shadow-black"
        >
          {!favorites[key] ? (
            <FaRegHeart size="1.75rem" />
          ) : (
            <FaHeart size="1.75rem" />
          )}
        </button>
        <div className="flex gap-4 justify-center flex-col">
          <img src={imageUrl} alt={title} className="rounded-xl" />
          <h1 className="font-medium text-2xl">{title}</h1>
          <h3 className="flex gap-1 font-medium">
            <img src={star} alt="review" />
            {rating}/5{" "}
            <span className="text-gray-500/90">({review} reviews)</span>
          </h3>
          <p className="py-4 text-gray-500/90">{description}</p>
        </div>
        <div>
          <h2 className="text-xl"> Choose size </h2>
          <ul className="pt-4 flex gap-2 w-full">
            {["S", "M", "L"].map((item, index) => (
              <li
                className={` ${
                  size === item ? "!bg-black text-gray-100" : ""
                } py-3 px-5 text-lg rounded-lg border border-gray-400/50`}
                onClick={() => setSize(item as sizeType)}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="fixed bottom-0 bg-gray-100 flex items-center justify-between px-8 py-7 border-t border-gray-400 w-full">
        <div>
          <p className="text-gray-600/80">Price</p>
          <h1 className="text-2xl">INR {price}</h1>
        </div>
        <button
          className="flex gap-2 px-8 py-4 rounded-lg bg-black text-white"
          onClick={addToCartHandler}
        >
          <img src={bag} alt="bag" />
          <p>Add to Cart</p>
        </button>
      </footer>
    </div>
  );
}
