import bell from "/svg/bell-01.svg";

import leftArrow from "/svg/arrow-left.svg";
import { routePage } from "../store/products-slice";
import { useAppDispatch } from "../hooks";

type HeaderType = {
  children: string;
  isIcon?: boolean;
};
export default function Header({ children, isIcon }: HeaderType) {
  const dispatch = useAppDispatch();

  return (
    <header className="fixed top-0 w-full flex justify-between p-8 pb-4 lg:border-b border-gray-500 border-opacity-20 shadow-sm">
      {/* Depending on Page Making the Go Back Functionality Accessible */}
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
