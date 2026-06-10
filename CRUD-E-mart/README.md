
# CRUD-E-mart

Simple front-end CRUD demo for an e‑mart built with HTML, CSS and JavaScript. This is a static, client-side project that uses the browser's `localStorage` for product and cart persistence.

## Overview

This project demonstrates a JavaScript-driven CRUD workflow for products with the following pages:

- `index.html` — Dashboard / landing page
- `addProducts.html` — Form to create new products
- `ViewProducts.html` — Product listing, search, and filters
- `Cart.html` — Shopping cart with quantity controls and checkout total

## Features

- Add products via a front-end form (product id, name, price, description, image URL)
- Store products and cart in browser `localStorage`
- View product list with image, description and price
- Add items to cart with quantity management (increment/decrement)
- Remove items from cart
- Search products by name
- Filter/sort products by price (Low→High, High→Low) and alphabet (A→Z, Z→A)
- Cart badge showing number of items

## Project Files (key files)

- `index.html` — landing page and main navigation
- `addProducts.html` — product input form (calls `addItem(event)`)
- `ViewProducts.html` — product listing and filter UI
- `Cart.html` — cart table that renders items and totals
- `assets/css/bootstrap.min.css` — Bootstrap styles
- `assets/css/style.css` — project-specific styles
- `assets/js/index.js` — core logic: product list, add item, display, search, filters, add-to-cart
- `assets/js/cart.js` — cart page logic: display cart, qty inc/dec, delete, totals

## Add Product Form

The `addProducts.html` form includes the following fields (all marked `required` in the current markup):

- **Product Name** — form field id: `Pname` (text, required)
- **Product Price** — form field id: `Pprice` (number, required)
- **Product Description** — form field id: `Pdes` (textarea, required)
- **Product Image URL** — form field id: `Purl` (text, required)


## How Data Is Stored

- Products and cart items are saved in `localStorage` under the keys `Products` and `CartList` respectively. Data persists per-browser/profile until cleared.
- Product objects use the shape: `{ PID, Pname, Pprice, Pdes, Purl }`. When added to cart, a `qty` property is attached.

## How to Run

1. Open `index.html` in a modern browser (Chrome, Edge, Firefox). No server required.
2. Go to `Add Products` to add entries. Provide an image URL for preview to work.
3. Visit `View Products` to search, filter, and add items to the cart.
4. Open `Cart` to modify quantities or remove items; totals update accordingly.

## Usage Notes & Known Limitations

- Images must be provided as accessible image URLs — the app does not handle file uploads.
- The `addProducts.html` form uses HTML validation: all fields are `required`, and `Pprice` uses `type="number"` to help ensure numeric input.
- Price values are still stored as entered (the code does not explicitly parse `Pprice` to a JS Number). The app relies on JavaScript numeric coercion for calculations (e.g. multiplication), so entering numeric values is recommended.
- This is a client-only demo: there is no backend, authentication, or server-side validation.
- `localStorage` size limits apply; data is stored per origin (file:// storage behavior may vary by browser).

## Suggested Improvements

 - Add validation for form inputs (URL validation and stronger client-side checks).
 - Normalize and sanitize `Pprice` to a Number when saving (parseFloat + fallback) instead of relying on implicit coercion.
- Add image upload support with a backend or use a client-side upload-to-blob URL flow.
- Implement persistence via a backend (Node/Express + database) to make data multi-user and permanent.
- Improve UI: product categories, pagination, lazy image loading, and responsive cards.
- Add tests and linting, and bundle assets with a build tool if the project grows.

## Developer Notes

- Main logic lives in `assets/js/index.js` and `assets/js/cart.js`.
- `ProductList()` and `CartList()` helper functions read from `localStorage`.
- `PID` is generated using `Date.now()` — consider replacing with UUIDs for collision safety.

## Video Explanation

[Project Video Explanation](https://drive.google.com/drive/folders/17yrfGFGXOlKW5Jo5pEOazxSfFp5HsslM?usp=sharing)

## Contributing

Contributions are welcome — open issues or raise pull requests with clear descriptions.

## License

MIT

