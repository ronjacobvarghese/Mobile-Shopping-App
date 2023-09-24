import { useSelector } from "react-redux";

import Header from "../components/Header";
import arrowRight from "/svg/arrow-right.svg";
import CartCard from "../components/CartCard";
import { CartProductType } from "../types";

export default function Cart() {
  const cart = useSelector((state: any) => state.cart.cart);
  const totalPrice = useSelector((state: any) => state.cart.totalPrice);

  return (
    <>
      <Header isIcon>My Cart</Header>
      <main className="flex flex-col pt-[5rem] overflow-auto box-border items-center h-full">
        <section className="w-full p-6 h-[50%] min-h-[10rem] overflow-auto">
          <ul className="w-full flex flex-col gap-y-4">
            {cart.map((item: CartProductType) => (
              <CartCard key={item.product.key} {...item} />
            ))}
          </ul>
        </section>
        <section className="w-full p-8">
          <input
            placeholder="Add a voucher"
            className="h-14 w-full pl-6 bg-gray-300/40 rounded-xl"
          />
          <ul className="pt-2">
            <li className="flex justify-between items-center py-2">
              <p className="text-gray-600/70">Sub-total</p>{" "}
              <p className=" font-medium">INR {totalPrice}</p>
            </li>
            <li className="flex justify-between items-center py-2">
              <p className="text-gray-600/70">VAT (%)</p>{" "}
              <p className=" font-medium">INR 0</p>
            </li>
            <li className="flex justify-between items-center py-2">
              <p className="text-gray-600/70">Shipping fee</p>{" "}
              <p className=" font-medium">INR 90</p>
            </li>
          </ul>
          <div className="flex justify-between items-center mt-4 py-6 border-t border-gray-400/50">
            <h3>Total</h3>
            <h2>INR {totalPrice + 90}</h2>
          </div>
        </section>
      </main>
      <footer className="fixed bottom-0 border-t border-gray-300 w-full flex justify-center items-center py-6 px-8 ">
        <button className="bg-black text-gray-100 h-16 rounded-xl text-md flex gap-3 w-full items-center justify-center">
          Checkout <img src={arrowRight} />
        </button>
      </footer>
    </>
  );
}
