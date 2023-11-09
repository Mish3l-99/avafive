import { Product } from "@/typings";
import { create } from "zustand";

type CartStore = {
  products: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
};

export const useCart = create<CartStore>()((set) => ({
  products: [],

  addToCart: (item) =>
    set((state) =>
      !state.products.includes(item)
        ? { products: [...state.products, item] }
        : { products: state.products }
    ),

  removeFromCart: (item) =>
    set((state) => ({
      products: state.products.filter((product) => product !== item),
    })),
}));

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }
