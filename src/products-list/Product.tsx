import {TProduct} from "../types.ts";


type TProductProps = {
    product: TProduct;
    onDelete: (id: string) => void;
}

export const Product = ({product, onDelete}: TProductProps) => {
    return (
        <div className={"w-52 h-80 shadow-xl border rounded-md px-2 py-3 flex flex-col justify-between gap-2"}>
            <h3 className={"font-semibold whitespace-normal break-words"}>
                {product.title}
            </h3>
            <p className={"text-sm whitespace-normal break-words"}>
                {product.description}
            </p>
            <div className={"w-full"}>
                <p className={"italic mb-2"}>
                    {product.price}{" "}$
                </p>
                <button onClick={() => {
                    onDelete(product.id)
                }} className={"py-1 px-2 bg-red-600 hover:bg-red-600/80 duration-200 rounded-sm text-white w-full"}>
                    Удалить товар
                </button>
            </div>
        </div>
    )
}