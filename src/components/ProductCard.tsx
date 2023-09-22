import { FaHeart, FaRegHeart } from "react-icons/fa";

import { storeDataType } from "../types";

type ProductCardType = {
  product: storeDataType;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onViewProduct: (product: storeDataType) => void;
};

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  onViewProduct,
}: ProductCardType) {
  const { key, title, imageUrl, price, discount } = product;

  return (
    <li key={key} className="w-[47.75%] max-w-[17rem] relative">
      <button
        key={key}
        className="z-10 flex justify-center items-center absolute top-2 right-4 bg-white p-2 rounded-lg shadow-2xl lg:top-[18.75rem] lg:right-2"
        onClick={onToggleFavorite}
      >
        {isFavorite ? <FaHeart size="1.4rem" /> : <FaRegHeart size="1.4rem" />}
      </button>
      <article
        onClick={() => onViewProduct(product)}
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
