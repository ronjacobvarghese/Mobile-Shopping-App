import bell from "/svg/bell-01.svg";

import leftArrow from "/svg/arrow-left.svg";
import { useDispatch } from "react-redux";
import { routePage } from "../store/products-slice";

type HeaderType = {
  children: string;
  isIcon?: boolean;
};
export default function Header({ children, isIcon }: HeaderType) {
  const dispatch = useDispatch();

  return (
    <header className="fixed top-0 w-full flex justify-between p-8 pb-4 lg:border-b border-gray-500 border-opacity-20 shadow-sm">
      {isIcon && (
        <button onClick={() => dispatch(routePage({ page: "Home" }))}>
          <img src={leftArrow} />
        </button>
      )}
      <h1 className="font-bold text-2xl ">{children}</h1>
      <div className="flex gap-8">
        <button>
          <img src={bell} />
        </button>
      </div>
    </header>
  );
}
