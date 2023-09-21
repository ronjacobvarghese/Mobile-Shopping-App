import star from "/svg/star-01.svg";

import Header from "../components/Header";
import { storeDataType } from "../types";
import bag from "/svg/shopping-bag-02.svg";
import { FaRegHeart } from "react-icons/fa";

export default function ProductDetail({
  title,
  imageUrl,
  price,
  review,
  rating,
  description,
}: storeDataType) {
  return (
    <>
      <Header isIcon={true}>Details</Header>
      <main className="h-full m-8 relative">
        <button className="absolute right-6 top-6 bg-white p-2 rounded-lg shadow-2xl shadow-black">
          <FaRegHeart size="1.75rem" />
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
                className="py-3 px-5 text-lg rounded-lg border border-gray-400/50"
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
        <button className="flex gap-2 px-8 py-4 rounded-lg bg-black text-white">
          <img src={bag} alt="bag" />
          <p>Add to Cart</p>
        </button>
      </footer>
    </>
  );
}
