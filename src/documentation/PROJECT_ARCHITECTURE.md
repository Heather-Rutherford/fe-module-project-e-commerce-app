# Project Architecture: E-Commerce App

## Overview

This project is a modular, scalable e-commerce web application built with React, Redux Toolkit, TypeScript, and Vite. It follows a feature-based folder structure to promote maintainability and extensibility.

---

## Tech Stack

- **Frontend Framework:** React (with TypeScript)
- **State Management:** Redux Toolkit, React-Redux, redux-persist
- **Routing:** React Router DOM
- **Data Fetching:** @tanstack/react-query
- **Styling:** Bootstrap, custom CSS
- **Build Tool:** Vite

---

## Main Modules & Structure

```
src/
  components/        # Reusable UI components (ProductCard, CartButton, etc.)
  pages/             # Page-level components (Home, Cart, Checkout)
  navigation/        # Navigation components (NavBar, HomeButton)
  redux/             # Redux slices, store, and rootReducer
  hooks/             # Custom React hooks (useProducts, useCategories)
  types/             # TypeScript type definitions (Product, CartItem)
  utils/             # Utility functions (Formatters, RandomRating)
  styles/            # CSS files
  documentation/     # Project documentation
```

---

## Application Flow

1. **Entry Point:**
   - `main.tsx` initializes the app, wraps it with Redux Provider, QueryClientProvider, and BrowserRouter.
2. **Routing:**
   - `App.tsx` defines main routes: Home (`/`), Cart (`/cart`), Checkout (`/checkout`).
3. **State Management:**
   - Redux slices (`cartSlice`, `productSlice`) manage cart and product state.
   - State is persisted using `redux-persist` (session storage).
4. **Data Fetching:**
   - Products are fetched from an external API (Fake Store API) using React Query and custom hooks.
5. **UI Components:**
   - Pages use reusable components for product display, cart summary, navigation, etc.
6. **Type Safety:**
   - All data models and props are strongly typed using TypeScript interfaces.

---

## Key Files & Their Roles

- **main.tsx:** App bootstrap and provider setup.
- **App.tsx:** Route definitions and layout.
- **redux/store.ts:** Redux store configuration and persistence.
- **redux/cartSlice.ts & productSlice.ts:** Cart and product state logic.
- **pages/Home.tsx:** Product listing and fetching logic.
- **pages/Cart.tsx:** Cart display and management.
- **pages/Checkout.tsx:** Checkout form and order summary.
- **components/**: UI building blocks (ProductCard, CartButton, etc.)
- **types/**: TypeScript interfaces for data models.

---

## Extensibility

- **Feature-based structure** allows easy addition of new features (e.g., user authentication, order history).
- **TypeScript** ensures robust type safety and easier refactoring.
- **Redux Toolkit** simplifies state logic and enables scalable state management.

---

## Diagram

```
[main.tsx] → [App.tsx] → [Pages] → [Components]
           ↓            ↓         ↓
      [Redux Store]  [Hooks]   [Types]
```

---

## Summary

This architecture provides a clean separation of concerns, modularity, and scalability for building a modern e-commerce application. All major features are encapsulated in their own modules, making the codebase easy to navigate and extend.
