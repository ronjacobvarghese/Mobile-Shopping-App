import { useSelector, useDispatch } from "react-redux";

import Categories from "../components/Categories";
import Search from "../components/Search";
import ProductCard from "../components/ProductCard";
import { storeDataType } from "../types";

import Header from "../components/Header";
import Nav from "../components/Nav";
import {
  routePage,
  selectAllProducts,
  toggleFavorites,
} from "../store/products-slice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { storeData } from "../lib/data";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { productPage: page, favorites } = useAppSelector(selectAllProducts);

  return (
    <div className="flex h-full">
      <Nav />
      <main className="h-full !overflow-clip mt-[5rem]">
        <Header> Discover </Header>
        <Search />
        <Categories />
        <div className="pt-4 pb-[20.5rem] w-full h-full overflow-y-auto">
          <ul key={page} className="px-4 flex flex-wrap gap-4 w-full">
            {storeData.map((item: storeDataType, index: number) => (
              <ProductCard
                key={item.key}
                product={item}
                page={page}
                isFavorite={favorites[index]}
                onToggleFavorite={(index: number) => {
                  dispatch(toggleFavorites(index));
                }}
                onViewProduct={(page) => {
                  dispatch(routePage(page));
                }}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
