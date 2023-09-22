import { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import { navDataType, storeDataType } from "./types";
import { useProductsContext } from "./context/ProductsProvider";
import Cart from "./pages/Cart";

function App() {
  const [productDetail, setProductDetail] = useState<storeDataType>();
  const { productPage: page, onRouteToPage } = useProductsContext();

  const onViewProduct = (product: storeDataType) => {
    setProductDetail(product);
    onRouteToPage("Detail");
  };

  const clearProductDetail = () => {
    setProductDetail(undefined);
  };

  return (
    <div className=" overflow-clip w-full h-full lg:bg-white lg:w-[62.5rem] lg:h-[45rem] lg:rounded-2xl lg:shadow-xl">
      {page === "Cart" && <Cart />}
      {page === "Detail" && productDetail ? (
        <ProductDetail detail={productDetail} onClose={clearProductDetail} />
      ) : (
        !(page === "Cart") && <Dashboard onViewProduct={onViewProduct} />
      )}
    </div>
  );
}

export default App;
