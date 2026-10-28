export const categories = ["Animals", "Food", "Toys", "Accessories"] as const;

export type Category = (typeof categories)[number];
export type CategoryFilter = "All" | Category;

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
}

export interface CartEntry {
  productId: string;
  quantity: number;
}
