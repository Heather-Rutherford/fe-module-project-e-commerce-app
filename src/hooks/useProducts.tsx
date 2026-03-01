import { useQuery } from "@tanstack/react-query";
import { type Product } from "../types/Product";

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}

const fetchFilteredProductsByCategory = async (
  category: string,
): Promise<Product[]> => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export function useFilteredProductsByCategory(category: string) {
  return useQuery<Product[]>({
    queryKey: ["products", category],
    queryFn: () => fetchFilteredProductsByCategory(category),
    enabled: !!category,
  });
}
