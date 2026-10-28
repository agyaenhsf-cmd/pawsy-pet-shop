import { useState } from "react";
import { CartDrawer } from "./components/CartDrawer";
import { CategoryFilter } from "./components/CategoryFilter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductCard } from "./components/ProductCard";
import { useCart } from "./context/CartContext";
import { products } from "./data/products";
import type { CategoryFilter as CategoryFilterType } from "./types/product";

export default function App() {
  const [category, setCategory] = useState<CategoryFilterType>("All");
  const [cartOpen, setCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { addItem, clearCart, itemCount } = useCart();
  const visibleProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  const placeDemoOrder = () => {
    clearCart();
    setCartOpen(false);
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <div className="min-h-screen bg-cream text-teal dark:bg-slate-950 dark:text-cream">
      <Header itemCount={itemCount} onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <section id="shop" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal/50 dark:text-cream/50">
                The good stuff
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-teal sm:text-4xl dark:text-cream">
                Shop for your bestie
              </h2>
              <p className="mt-2 text-teal/65 dark:text-cream/60">
                Little treats, big tail wags.
              </p>
            </div>
            <CategoryFilter selected={category} onSelect={setCategory} />
          </div>

          <div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
            aria-live="polite"
            aria-label={`${visibleProducts.length} products`}
          >
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={addItem} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={placeDemoOrder}
      />
      {showToast && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-teal px-5 py-4 text-sm font-bold text-white shadow-xl dark:bg-yellow dark:text-teal"
        >
          <span className="text-xl" aria-hidden="true">🎉</span>
          Thanks! Your demo order is all set.
          <button
            type="button"
            onClick={() => setShowToast(false)}
            className="ml-1 rounded px-1 text-lg leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow dark:focus-visible:outline-teal"
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
