import { storeDataType } from "../types";

export default function ProductCard({
  title,
  imageUrl,
  price,
  discount,
}: storeDataType) {
  return (
    <article className="relative w-full">
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
  );
}
