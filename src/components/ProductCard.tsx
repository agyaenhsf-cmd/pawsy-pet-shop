import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onAdd: (productId: string) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-teal/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal/10 dark:border-white/10 dark:bg-slate-800">
      <div className="relative aspect-[4/3] overflow-hidden bg-yellow/15">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-bold text-teal shadow-sm dark:bg-slate-900/90 dark:text-cream">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-extrabold text-teal dark:text-cream">{product.name}</h3>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <p className="text-lg font-black text-teal dark:text-cream">
            ৳{product.price.toLocaleString("en-BD")}
          </p>
          <button
            type="button"
            onClick={() => onAdd(product.id)}
            className="min-h-10 rounded-full bg-yellow px-4 py-2 text-sm font-extrabold text-teal transition hover:bg-yellow/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to cart <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </article>
  );
}
