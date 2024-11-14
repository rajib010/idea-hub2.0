import { z } from 'zod';

export const formSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long").max(100, "Title must be no more than 100 characters"),
    description: z.string().min(20, "Description must be at least 20 characters long").max(500, "Description must be no more than 500 characters"),
    category: z.string().min(3, "Category must be at least 3 characters").max(20, "Category must be no more than 20 characters"),
    link: z.string().url("Must be a valid URL").superRefine(async (url, ctx) => {
        try {
            const res = await fetch(url, { method: 'HEAD' });
            const contentType = res.headers.get("content-type");
            if (!contentType?.startsWith("image")) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "The URL must point to an image",
                });
            }
        } catch (error) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Could not fetch the URL or URL is invalid",
            });
        }
    }),
    pitch: z.string().min(10, "Pitch must be at least 10 characters long"),
});
