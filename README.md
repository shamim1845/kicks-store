# Kicks Store 👟

A premium, responsive sneaker storefront built with Next.js, Redux, and Tailwind CSS. This application features a modern UI, dynamic product discovery, and a seamless shopping experience integrated with a product API.

**Live Demo:** [https://kicks-store-eight.vercel.app/](https://kicks-store-eight.vercel.app/)

## 🚀 Features

- **Dynamic Product Listing**: Fetches and displays "New Drops" directly from the Platzi API.
- **Product Details**: Comprehensive view of each product with dynamic data, size selection, and related items.
- **Category Navigation**: Browsable categories with dedicated product listing pages.
- **Shopping Cart**: Fully functional local cart state management (Add, Remove, Update quantity/size).
- **Responsive Design**: Fluid layout optimized for Mobile, Tablet, and Desktop viewports.
- **State Management**: Robust state handling using Redux Toolkit and RTK Query.
- **UI/UX Polish**: Loading skeletons, error boundaries, empty states, and subtle animations.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Data Fetching**: [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons & Assets**: Custom SVG icons and Platzi API image assets.

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shamim1845/kicks-store.git
   cd kicks-store
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧩 Architecture Notes

- **Redux Services**: API logic is encapsulated in `redux/services` using RTK Query for automatic caching and state tracking.
- **Component Design**: Modular architecture with `feature`-based components and reusable `ui` atoms.
- **Responsive Strategy**: mobile-first approach using Tailwind's grid and flexbox utilities.

---

Developed with ❤️ by [Md Shamim Hossain](https://www.developershamim.me)
