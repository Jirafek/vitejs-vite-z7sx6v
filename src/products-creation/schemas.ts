import { z } from 'zod';

export const createProductSchema = z.object({
    title: z.string().min(1, "Title is required").max(15, "Title must be less than 15 characters"),
    description: z.string().min(1, "Description is required").max(150, "Description must be less than 150 characters"),
    price: z.coerce.number() // Force it to be a number
        .int().min(1, "Price must be more than 1").max(10000, "Price must be less than 10000")
});

export type TCreateFormData = z.infer<typeof createProductSchema>;
