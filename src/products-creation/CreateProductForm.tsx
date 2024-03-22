import {useForm, SubmitHandler} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {createProductSchema, TCreateFormData} from "./schemas.ts";
import {Input} from "../../components/ui/Input.tsx";
import {cn} from "../../lib/utils.ts";
import { v4 as uuidv4 } from 'uuid';
import {useProductsStore} from "../store.ts";


export const CreateProductForm = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<TCreateFormData>({
        resolver: zodResolver(createProductSchema)
    });

    const { addProduct } = useProductsStore();

    const onSubmit: SubmitHandler<TCreateFormData> = async (data) => {
        reset();

        addProduct({
            ...data,
            id: uuidv4(),
        })
    };

    return (
        <div className={"w-full flex justify-center mt-4"}>
            <form className={"w-80 shadow-lg flex flex-col gap-2 p-2"} onSubmit={handleSubmit(onSubmit)}>
                <div className={"flex flex-col items-start"}>
                    <label className={"text-sm"} htmlFor="title">Title</label>
                    <Input classNames={cn(
                        {"border-red-500": errors.title}
                    )}
                           {...register("title")}
                           placeholder={"Text"}
                    />
                    {errors.title && <span className={"text-sm text-red-500"}>{errors.title.message}</span>}
                </div>
                <div className={"flex flex-col items-start"}>
                    <label className={"text-sm"} htmlFor="description">Description</label>
                    <Input classNames={cn(
                        {"border-red-500": errors.description}
                    )}
                           {...register("description")}
                           placeholder={"Text"}
                    />
                    {errors.description && <span className={"text-sm text-red-500"}>{errors.description.message}</span>}
                </div>
                <div className={"flex flex-col items-start"}>
                    <label className={"text-sm"} htmlFor="price">Price</label>
                    <Input classNames={cn(
                        {"border-red-500": errors.price}
                    )}
                           type="number"
                           {...register("price")}
                           placeholder={"Number"}
                    />
                    {errors.price && <span className={"text-sm text-red-500"}>{errors.price.message}</span>}
                </div>
                <button
                    className={"py-1 px-2 min-w-24 bg-blue-500 text-white text-center hover:bg-blue-500/80 duration-200"}
                    type="submit">
                    Добавить товар
                </button>
            </form>
        </div>
    );
}
