import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {TProduct} from "./types.ts";

type TStore = {
    products: TProduct[];
    addProduct: (product: TProduct) => void;
    removeProduct: (productId: string) => void;
    setProducts: (products: TProduct[]) => void;
};

export const useProductsStore = create<TStore, [["zustand/persist", TStore]]>(persist((set) => ({
    products: [],
    addProduct: (product: TProduct) =>
        set((state) => ({ products: [...state.products, product] })),
    removeProduct: (productId: string) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== productId),
        })),
    setProducts: (products: TProduct[]) =>
        set(() => ({ products: [...products] })),
}), {
    name: 'products-store',
}));