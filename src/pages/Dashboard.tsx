import Categories from "../components/Categories";
import Search from "../components/Search";
import ProductCard from "../components/ProductCard";

import Header from "../components/Header";
import { navDataType, storeDataType } from "../types";
import Nav from "../components/Nav";
import { useProductsContext } from "../context/ProductsProvider";

type DashboardProps = {
  onViewProduct: (product: storeDataType) => void;
};

export default function Dashboard({ onViewProduct }: DashboardProps) {
  const {
    storeProducts: products,
    favorites,
    onToggleFavorite,
  } = useProductsContext();

  return (
    <div className="flex h-full">
      <Nav />
      <main className="h-full !overflow-clip mt-[5rem]">
        <Header> Discover </Header>
        <Search />
        <Categories />
        <div className="pt-4 pb-[20.5rem] w-full h-full overflow-y-auto">
          <ul className="px-4 flex flex-wrap gap-4 w-full">
            {products.map((item, index) => (
              <ProductCard
                key={item.key}
                product={item}
                isFavorite={favorites[index]}
                onToggleFavorite={onToggleFavorite.bind(null, index)}
                onViewProduct={onViewProduct}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
