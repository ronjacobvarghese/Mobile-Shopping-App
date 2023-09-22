import { useProductsContext } from "../context/ProductsProvider";
import { navData } from "../lib/data";

export default function Nav() {
  const { onRouteToPage } = useProductsContext();

  return (
    <nav className=" w-full px-10 lg:w-auto border-t py-4 border-gray-600 fixed bottom-0 z-40 bg-gray-100 lg:relative lg:h-full lg:px-6 lg:py-8 lg:border-t-0 font-medium text-[0.75rem]  lg:border-r lg:border-gray-300 border-opacity-20 lg:bg-white">
      <ul className="flex gap-16 justify-evenly lg:flex-col lg:justify-start lg:gap-8  text-gray-500">
        {navData.map((item) => (
          <li
            className="flex items-center flex-col justify-center"
            key={item.id}
            onClick={() => onRouteToPage(item.name)}
          >
            <img src={item.icon} />
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
