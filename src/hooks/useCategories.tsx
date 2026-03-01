import { useQuery } from "@tanstack/react-query";

const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export function useCategories() {
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}
