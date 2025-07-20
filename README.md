# 📰 News Home Page

A responsive news homepage built with **React** and **Tailwind CSS**, designed using a **Bento-style grid layout**. The design is fully responsive for mobile, tablet, and desktop views.

## 🚀 Features

- ⚡ **Bento Grid Layout** using Tailwind's `grid-cols`, `grid-rows`, `gap`, `col-span`, and `row-span` utilities.
- 📱 **Responsive Header** with separate views for mobile and desktop using:
  - `hidden md:block` for desktop-only elements
  - `block md:hidden` for mobile-only elements
  - `focus:outline-none` for better UX on menu toggles
- 🎨 Clean and modern UI using **Tailwind CSS**
- 📐 Utility-first responsive design using `sm`, `md`, and `lg` breakpoints
- 📁 Structured with reusable React components (e.g., `Header`, `BottomCard`, etc.)

## 🧱 Layout

- The main content grid uses:
  ```js
  grid grid-cols-x grid-rows-x gap-x
