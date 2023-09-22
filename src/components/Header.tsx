import React from "react";
import bell from "/svg/bell-01.svg";

import leftArrow from "/svg/arrow-left.svg";

type HeaderType = {
  children: string;
  onClose?: () => void;
};
export default function Header({ children, onClose }: HeaderType) {
  return (
    <header className="w-full flex justify-between p-8 pb-4 lg:border-b border-gray-500 border-opacity-20 shadow-sm">
      {onClose && (
        <button onClick={onClose}>
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
