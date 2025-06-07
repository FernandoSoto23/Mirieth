import { z } from "zod";

// Esquema para un solo producto, image ahora es array de URLs (o puede ser vacío)
export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  categoryId: z.number(),
  stock: z.number(),
  sku: z.string(),
  image: z.array(z.string().url()).optional().default([]), // array de URLs
  status: z.enum(["active", "inactive", "archived"]),
});

// Esquema para un arreglo de productos, seleccionando campos específicos
export const productsSchema = z.array(
  productSchema.pick({
    id: true,
    name: true,
    price: true,
    stock: true,
    description:true,
    categoryId: true,
    sku: true,
    status: true,
    image: true,
  })
);

// Tipos TypeScript derivados
export type Product = z.infer<typeof productSchema>;

export type ProductFormData = Pick<
  Product,
  "id" | "name" | "description" | "price" | "categoryId" | "stock" | "sku"
>;
