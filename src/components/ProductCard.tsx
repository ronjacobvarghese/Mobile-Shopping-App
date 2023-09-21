import { storeData } from "../lib/data";

type ProductCardProps = (typeof storeData)[number];

export default function ProductCard({
  title,
  imageUrl,
  price,
  discount,
}: ProductCardProps) {
  return (
    <article className="w-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-full object-cover rounded-xl"
      />
      <h2 className="pt-2 font-bold ">{title}</h2>
      <p className="text-sm text-gray-500">
        INR {price} {discount ? <span>-{discount}%</span> : ""}
      </p>
      {}
    </article>
  );
}
