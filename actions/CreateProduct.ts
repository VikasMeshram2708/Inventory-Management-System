"use server";
import * as z from "zod";
import { prismaInstance } from "@/lib/PrismaInstance";
import { ConnectDB } from "@/lib/Db";
import { revalidatePath } from "next/cache";

const ProductSchema = z.object({
  name: z.string().min(2).max(250),
  category: z.string().min(2).max(100),
  description: z.string().min(2).max(250),
  price: z.number().min(1).max(99999),
});

type ProductSchema = z.infer<typeof ProductSchema>;

export async function CreateProduct(formData: FormData) {
  // console.log("raw", {
  //   name: formData?.get("name"),
  //   description: formData?.get("description"),
  //   category: formData?.get("category"),
  //   price: +formData?.get("price"),
  // });

  const rawData: ProductSchema = ProductSchema.parse({
    name: formData?.get("name"),
    description: formData?.get("description"),
    category: formData?.get("category"),
    // @ts-ignore
    price: +formData?.get("price"),
  });

  //   Connect to DB
  await ConnectDB();

  // Query the DB
  const product = await prismaInstance.product.create({
    data: {
      name: rawData?.name,
      description: rawData?.description,
      category: rawData?.category,
      price: rawData?.price,
    },
  });

  //   Return the Response
  if (!product) {
    throw new Error("Failed to Add Product");
  }

  // Revalidate the Cache
  revalidatePath("/");
  console.log("Product Added.");
}
