# Pawsy Pet Shop

A cheerful, responsive pet shop demo built with React, Vite, TypeScript, and Tailwind CSS. Browse sample pets and supplies, add them to a cart, and place a pretend order — all in your browser, with no backend or account required.

## Features

- Filter products by Animals, Food, Toys, and Accessories
- Responsive product cards with sample images and prices in Bangladeshi taka (৳)
- Slide-in cart with quantity controls, item removal, and an order total
- Cart saved in local storage so it stays around after a refresh
- Demo checkout with a thank-you confirmation
- Keyboard-friendly controls, visible focus states, and light/dark theme support

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`.

## Edit the products

All product data lives in [`src/data/products.ts`](src/data/products.ts). Add or edit entries in the `products` array using this shape:

```ts
{
  id: "unique-product-id",
  name: "Friendly Product Name",
  category: "Toys",
  price: 500,
  image: "https://placehold.co/400x300?text=Friendly+Product",
}
```

Use one of the categories `Animals`, `Food`, `Toys`, or `Accessories`. Prices are sample amounts in taka.

## Demo notice

Demo project. Pictures and prices are samples.
