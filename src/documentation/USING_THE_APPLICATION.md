# Using the Application: E-Commerce App

## Getting Started

1. **Install Dependencies**
   - Run `npm install` in the project root to install all required packages.

2. **Start the Development Server**
   - Run `npm run dev` to start the app locally.
   - Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

---

## Main Pages & Navigation

- **Home Page** (`/`)
  - Browse all available products.
  - Filter products by category.
  - Click on a product to view details.
  - Add products to your cart.

- **Cart Page** (`/cart`)
  - View all items added to your cart.
  - Update item quantities or remove items.
  - See the total price and item count.
  - Proceed to checkout.

- **Checkout Page** (`/checkout`)
  - Review your order summary.
  - Fill in customer information.
  - Submit your order and see a success message.

---

## Key Actions

- **Add to Cart:**
  - On the Home page, click "Add to Cart" on any product card.
  - A success message will confirm the addition.

- **View Cart:**
  - Click the "Cart" button in the navigation bar to see your cart contents.

- **Remove/Update Items:**
  - In the Cart page, use the controls to change quantities or remove products.

- **Checkout:**
  - Click "Proceed to Checkout" in the cart summary.
  - Complete the form and submit your order.

---

## Tips & Notes

- **State Persistence:**
  - Your cart is saved in session storage. Closing the browser will clear the cart.
- **Error Handling:**
  - If product images fail to load, a placeholder image will be shown.
  - Network/API errors are handled gracefully with user feedback.
- **Responsive Design:**
  - The app is fully responsive and works on desktop and mobile devices.

---

## Troubleshooting

- If you encounter issues, ensure all dependencies are installed and your Node.js version is compatible.
- For development, check the browser console and terminal for error messages.

---

## Summary

This application provides a seamless shopping experience. Use the navigation bar to move between pages, manage your cart, and complete purchases easily.
