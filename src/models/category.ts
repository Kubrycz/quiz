// export default interface Category{
//     category: string;
//     color: string;
//     id: number;
// }

import { z } from "zod";

export const CategorySchema = z.object({
  id: z.string().transform(Number),
  category: z.string(),
  color: z.string(),
});
export type Category = z.infer<typeof CategorySchema>;