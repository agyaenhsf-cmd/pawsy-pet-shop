import { categories, type CategoryFilter as CategoryFilterType } from "../types/product";

const filters: CategoryFilterType[] = ["All", ...categories];

interface CategoryFilterProps {
  selected: CategoryFilterType;
  onSelect: (category: CategoryFilterType) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2.5"
      role="group"
      aria-label="Filter products by category"
    >
      {filters.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          aria-pressed={selected === category}
          className={`min-h-10 rounded-full px-5 py-2 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
            selected === category
              ? "bg-teal text-white shadow-md shadow-teal/10 dark:bg-yellow dark:text-teal"
              : "bg-white text-teal/75 hover:bg-yellow/30 dark:bg-slate-800 dark:text-cream/75 dark:hover:bg-slate-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
