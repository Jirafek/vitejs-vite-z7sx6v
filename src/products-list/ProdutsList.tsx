import {useEffect, useState} from "react";

import defaultProducts from '../db/db.json';
import {Product} from "./Product.tsx";
import {useProductsStore} from "../store.ts";


export const ProdutsList = () => {
    const [loading, setLoading] = useState(true);

    const {products, setProducts, removeProduct} = useProductsStore();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)

        if (products.length < 1) {
            setProducts(defaultProducts)
        }


    }, []);

    if (loading) {
        return <div className={"pt-6"}>Loading...</div>
    }

    if (products.length < 1) {
        return <div className={"pt-6"}>Список товаров пуст</div>
    }

    return (
        <div className={"pt-6 flex justify-center items-center flex-wrap gap-5"}>
            {
                products.map(product => {
                    return <div key={product.id}>
                        <Product product={product} onDelete={(id: string) => {
                            removeProduct(id)
                        }} />
                    </div>
                })
            }
        </div>
    )
}
