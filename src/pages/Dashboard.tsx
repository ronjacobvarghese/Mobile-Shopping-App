import React from "react";
import { storeData } from "../lib/data";
import Categories from "../components/Categories";
import Search from "../components/Search";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import heart from "/svg/heart.svg";
import { FaHeart } from "react-icons/fa";
import Header from "../components/Header";
import { navDataType, storeDataType } from "../types";
import Nav from "../components/Nav";

type DashboardProps = {
  openSaved: boolean;
  onViewProduct: (product: storeDataType) => void;
  onSelectPage: (selectedPage: navDataType) => void;
};

export default function Dashboard({
  openSaved,
  onViewProduct,
  onSelectPage,
}: DashboardProps) {
  const [favorites, setFavorites] = useState(
    new Array(storeData.length).fill(false)
  );

  const toggleFavorites = (index: number) => {
    let updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  const favoritesContent: React.ReactElement[] = [];

  favorites.forEach((item, index) => {
    if (item) {
      favoritesContent.push(
        <li key={index} className="w-[47.75%] max-w-[17rem] relative">
          <ProductCard {...storeData[index]} />
          <button
            className="flex justify-center items-center absolute top-4 right-4 bg-white p-2 rounded-lg shadow-2xl lg:top-[18.75rem] lg:right-2"
            onClick={() => toggleFavorites(index)}
          >
            {item ? (
              <FaHeart size="1.4rem" />
            ) : (
              <img src={heart} className="font-bold" />
            )}
          </button>
        </li>
      );
    }
  });

  return (
    <div className="flex h-full">
      <Nav onSelectPage={onSelectPage} />
      <main className="h-full !overflow-clip">
        <Header isIcon={false}> Discover </Header>
        <Search />
        <Categories />
        <div className="pt-4 pb-[20.5rem] w-full h-full overflow-y-auto">
          <ul className="px-4 flex flex-wrap gap-4 w-full">
            {!openSaved && (
              <>
                {storeData.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => onViewProduct(item)}
                    className="w-[47.75%] max-w-[17rem] relative"
                  >
                    <ProductCard {...item} />
                    <button
                      className="flex justify-center items-center absolute top-4 right-4 bg-white p-2 rounded-lg shadow-2xl lg:top-[18.75rem] lg:right-2"
                      onClick={() => toggleFavorites(index)}
                    >
                      {favorites[index] ? (
                        <FaHeart size="1.4rem" />
                      ) : (
                        <img src={heart} className="font-bold" />
                      )}
                    </button>
                  </li>
                ))}
              </>
            )}

            {openSaved && <>{favoritesContent}</>}
          </ul>
        </div>
      </main>
    </div>
  );
}
