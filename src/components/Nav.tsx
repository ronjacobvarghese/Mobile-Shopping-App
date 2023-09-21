import { navData } from "../lib/data";

export default function Nav() {
  return (
    <nav className="w-full lg:w-auto absolute bottom-0 lg:relative lg:h-full lg:px-6 lg:py-8 font-medium text-[0.75rem]  lg:border-r lg:border-gray-300 border-opacity-20">
      <ul className="flex lg:flex-col lg:justify-start lg:gap-8 justify-evenly text-gray-500">
        {navData.map((item) => (
          <li
            className="flex items-center flex-col justify-center"
            key={item.id}
          >
            <img src={item.icon} />
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
