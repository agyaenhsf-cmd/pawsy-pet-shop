import { useEffect } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const taka = (amount: number) => `৳${amount.toLocaleString("en-BD")}`;

export function CartDrawer({ open, onClose, onCheckout }: CartDrawerProps) {
  const { items, addItem, decreaseItem, removeItem } = useCart();

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  if (!open) return null;

  const cartItems = items.flatMap((item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    return product ? [{ ...item, product }] : [];
  });
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close cart"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-teal/40 backdrop-blur-[2px]"
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl dark:bg-slate-900"
      >
        <header className="flex items-center justify-between border-b border-teal/10 px-6 py-5 dark:border-white/10">
          <div>
            <h2 id="cart-title" className="text-2xl font-black text-teal dark:text-cream">
              Your cart <span className="text-base font-bold text-teal/50 dark:text-cream/50">({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
            </h2>
            <p className="mt-1 text-sm text-teal/60 dark:text-cream/60">Goodies for your good buddy</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 place-items-center rounded-full bg-white text-xl text-teal transition hover:bg-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal dark:bg-slate-800 dark:text-cream"
            aria-label="Close shopping cart"
          >
            ×
          </button>
        </header>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="text-7xl" aria-hidden="true">🧺</span>
            <h3 className="mt-5 text-xl font-extrabold text-teal dark:text-cream">Your cart is taking a nap</h3>
            <p className="mt-2 text-sm leading-6 text-teal/65 dark:text-cream/60">Add something lovely from the shop and it’ll show up here.</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-yellow px-5 py-2.5 font-bold text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              Keep browsing
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {cartItems.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 rounded-2xl bg-white p-3 dark:bg-slate-800">
                  <img
                    src={product.image}
                    alt=""
                    className="size-20 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-extrabold text-teal dark:text-cream">{product.name}</h3>
                        <p className="mt-1 text-sm font-bold text-teal/70 dark:text-cream/70">{taka(product.price)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="rounded px-1 text-sm font-semibold text-teal/50 underline decoration-transparent underline-offset-2 hover:text-red-700 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal dark:text-cream/50 dark:hover:text-red-300"
                        aria-label={`Remove ${product.name} from cart`}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => decreaseItem(product.id)}
                        className="grid size-8 place-items-center rounded-full bg-cream font-bold text-teal hover:bg-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal dark:bg-slate-700 dark:text-cream"
                        aria-label={`Decrease ${product.name} quantity`}
                      >
                        −
                      </button>
                      <span className="min-w-5 text-center text-sm font-bold text-teal dark:text-cream" aria-label={`Quantity ${quantity}`}>
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => addItem(product.id)}
                        className="grid size-8 place-items-center rounded-full bg-cream font-bold text-teal hover:bg-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal dark:bg-slate-700 dark:text-cream"
                        aria-label={`Increase ${product.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="border-t border-teal/10 bg-white/70 px-6 py-5 dark:border-white/10 dark:bg-slate-800/60">
              <div className="mb-4 flex items-center justify-between text-lg font-black text-teal dark:text-cream">
                <span>Total</span>
                <span>{taka(total)}</span>
              </div>
              <button
                type="button"
                onClick={onCheckout}
                className="min-h-12 w-full rounded-full bg-teal px-5 py-3 font-bold text-white transition hover:bg-teal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow dark:bg-yellow dark:text-teal dark:hover:bg-yellow/90"
              >
                Place demo order
              </button>
              <p className="mt-3 text-center text-xs text-teal/55 dark:text-cream/55">This is just a demo — no payment is taken.</p>
            </footer>
          </>
        )}
      </section>
    </div>
  );
}
