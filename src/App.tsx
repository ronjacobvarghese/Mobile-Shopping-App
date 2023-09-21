import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import ProductDetail from "./pages/ProductDetail";
import { navDataType, storeDataType } from "./types";

function App() {
  const [page, setPage] = useState<navDataType>("Home");
  const [productDetail, setProductDetail] = useState<storeDataType>();

  const onSelectPage = (selectedPage: navDataType) => {
    setPage(selectedPage);
  };

  const onViewProduct = (product: storeDataType) => {
    setProductDetail(product);
  };

  const clearProductDetail = () => {
    setProductDetail(undefined);
  };

  return (
    <div className=" overflow-y-clip w-full h-full lg:bg-white lg:w-[62.5rem] lg:h-[45rem] lg:rounded-2xl lg:shadow-xl">
      {productDetail ? (
        <ProductDetail {...productDetail} />
      ) : (
        <Dashboard
          onViewProduct={onViewProduct}
          onSelectPage={onSelectPage}
          openSaved={page === "Saved"}
        />
      )}
    </div>
  );
}

export default App;
