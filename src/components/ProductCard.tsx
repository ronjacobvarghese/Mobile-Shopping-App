import { FaHeart, FaRegHeart } from "react-icons/fa";

import { navDataType, storeDataType } from "../types";

type sendProductDetailType = {
  page: navDataType;
  product: storeDataType;
};

type ProductCardType = {
  product: storeDataType;
  page: navDataType;
  isFavorite: boolean;
  onToggleFavorite: (index: number) => void;
  onViewProduct: (page: sendProductDetailType) => void;
};

export default function ProductCard({
  product,
  page,
  isFavorite,
  onToggleFavorite,
  onViewProduct,
}: ProductCardType) {
  const { key, title, imageUrl, price, discount } = product;
  console.log(page);

  return (
    <li
      key={key}
      className={`${
        page == "Saved" && !isFavorite ? "!hidden" : ""
      } w-[47.75%] max-w-[17rem] relative`}
    >
      <button
        key={key}
        className="z-10 flex justify-center items-center absolute top-2 right-4 bg-white p-2 rounded-lg shadow-2xl lg:top-[18.75rem] lg:right-2"
        onClick={() => onToggleFavorite(key)}
      >
        {isFavorite ? <FaHeart size="1.4rem" /> : <FaRegHeart size="1.4rem" />}
      </button>
      <article
        onClick={() =>
          onViewProduct({
            page: "Detail",
            product: product,
          })
        }
        className="relative w-full"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full object-cover rounded-xl"
        />
        <h2 className="pt-2 font-bold ">{title}</h2>
        <p className="text-sm text-gray-500">
          INR {price} {discount ? <span>-{discount}%</span> : ""}
        </p>
      </article>
    </li>
  );
}
