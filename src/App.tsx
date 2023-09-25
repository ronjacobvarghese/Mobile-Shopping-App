import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { useAppSelector } from "./hooks";
import { selectAllProducts } from "./store/products-slice";

function App() {
  const { productPage: page } = useAppSelector(selectAllProducts);

  return (
    <div className=" overflow-clip w-full h-full lg:bg-white lg:w-[62.5rem] lg:h-[45rem] lg:rounded-2xl lg:shadow-xl">
      {page === "Detail" && <ProductDetail />}
      {page === "Cart" && <Cart />}
      {(page === "Home" || page === "Saved") && <Dashboard />}
    </div>
  );
}

export default App;
