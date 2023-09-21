import { storeData } from "../lib/data";
import Categories from "./Categories";
import Search from "./Search";
import ProductCard from "./ProductCard";

export default function Dashboard() {
  return (
    <main className="h-full !overflow-clip">
      <Search />
      <Categories />
      <div className="pt-4 pb-[20.5rem] w-full h-full overflow-y-auto">
        <ul className="px-4 flex flex-wrap gap-4 w-full">
          {storeData.map((item, index) => (
            <li className="w-[47.75%] max-w-[17rem] ">
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
