interface HeaderProps {
  itemCount: number;
  onCartClick: () => void;
}

export function Header({ itemCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-teal-950/10 bg-cream/90 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-xl text-2xl font-black tracking-tight text-teal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow dark:text-cream"
          aria-label="Pawsy Pet Shop home"
        >
          <span className="text-3xl" aria-hidden="true">
            🐾
          </span>
          Pawsy
        </a>
        <button
          type="button"
          onClick={onCartClick}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal dark:bg-yellow dark:text-teal dark:hover:bg-yellow/90"
          aria-label={`Open shopping cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-5"
          >
            <path
              d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1.3" fill="currentColor" />
            <circle cx="18" cy="20" r="1.3" fill="currentColor" />
          </svg>
          Cart
          <span className="grid size-6 place-items-center rounded-full bg-yellow text-xs font-extrabold text-teal dark:bg-teal dark:text-yellow">
            {itemCount}
          </span>
        </button>
      </div>
    </header>
  );
}
