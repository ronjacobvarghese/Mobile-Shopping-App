import { BsSun, BsMoon } from "react-icons/bs";

import bell from "/svg/bell-01.svg";

export default function Header() {
  return (
    <header className="w-full flex justify-between p-8 pb-4 lg:border-b border-gray-500 border-opacity-20 shadow-sm">
      <h1 className="font-bold text-2xl ">Discover</h1>
      <div className="flex gap-8">
        <button className="grid place-items-center lg:w-8 lg:h-8 lg:bg-gray-100 lg:border lg:border-gray-300 rounded-full">
          <BsSun />
        </button>
        <button>
          <img src={bell} />
        </button>
      </div>
    </header>
  );
}
