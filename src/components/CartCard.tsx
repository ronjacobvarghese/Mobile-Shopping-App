import { CartProductType } from "../types";
import minus from "/svg/minus.svg";
import plus from "/svg/plus.svg";
import trash from "/svg/trash-03.svg";

export default function CartCard({ product, size, quantity }: CartProductType) {
  const { imageUrl, title, price, key } = product;

  return (
    <li
      key={key}
      className="flex p-4 w-full bg-gray-300/50 rounded-xl relative"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-[5.5rem] h-[5.5rem] object-cover border border-gray-300 rounded-lg"
      />
      <div className="flex flex-col px-4 w-full">
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600/70 text-sm">Size {size} </p>
      </div>
      <h2 className="absolute bottom-4 left-1/3 ">INR {price}</h2>
      <button className="absolute top-4 right-4">
        <img src={trash} />
      </button>
      <div className="flex absolute items-center justify-center bottom-4 right-4 gap-3">
        <button className="p-1 rounded-sm border border-gray-400/70">
          <img src={minus} />
        </button>
        <p>{quantity}</p>
        <button className="p-1 rounded-sm border border-gray-400/70">
          <img src={plus} />
        </button>
      </div>
    </li>
  );
}
