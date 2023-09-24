import { categoryData } from "../lib/data";
export default function Categories() {
  return (
    <section className="pl-8 pb-4 overflow-x-scroll">
      <ul className="flex gap-4">
        {categoryData.map((item, index) => (
          <li
            className={`bg-gray-200 px-6 py-2 w-100 whitespace-nowrap rounded-lg`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
