import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import { navDataType, storeDataType } from "./types";
import { useProductsContext } from "./context/ProductsProvider";

function App() {
  const [productDetail, setProductDetail] = useState<storeDataType>();
  const { productPage: page } = useProductsContext();

  const onViewProduct = (product: storeDataType) => {
    setProductDetail(product);
  };

  const clearProductDetail = () => {
    setProductDetail(undefined);
  };

  return (
    <div className=" overflow-y-clip w-full h-full lg:bg-white lg:w-[62.5rem] lg:h-[45rem] lg:rounded-2xl lg:shadow-xl">
      {productDetail ? (
        <ProductDetail detail={productDetail} onClose={clearProductDetail} />
      ) : (
        <Dashboard onViewProduct={onViewProduct} openSaved={page === "Saved"} />
      )}
    </div>
  );
}

export default App;
