# Bangla Reel-Short Frontend
ReelShort is a short-form HD video streaming platform for vertical dramas.

## Development Process Instructions

1. **Branching Workflow**
    - Before starting work, pull the latest changes from the dev-mode branch.
    - Once your work is complete, create a Pull Request (PR) to the dev-mode branch.
    - After testing is complete, the changes will be merged into the main branch.

2. **Code Quality**
   - Write **meaningful commits** (e.g., `feat: add video player with autoplay`, `fix: resolve navbar responsive issue`).
   - Write **meaningful PR descriptions** (include context, steps to test).
   - Follow **clean code principles** and try to keep components **small & reusable**.
   - Use **TypeScript strictly** to avoid runtime issues.
   - Run **lint & format** before committing (`eslint`, `prettier`).
   - **File length guideline:** Try to keep a single file under 150–200 lines for readability and maintainability. If needed discuss with the **team** before adding it.

3. **Collaboration**
   - If a new library/technology is required, discuss with the **team** before adding it.
   - Keep **consistent naming conventions** across components, hooks, libs, services, redux, utils, and styles.
   - Always update documentation when adding/removing features.

## File Structures
```
my-next-app/
│
├──📁 public/                      # Static assets served directly
│ ├── images/                      # PNG, JPG, SVG assets
│ ├── icons/                       # Favicons, app icons
│ └── locales/                     # i18next translation files
│ ├── en/
│ └── bn/
│
├──📁src/                         # Main application source code
│ ├──📁 app/                      # App Router
│ │ ├── (public)/                  # Public-facing pages
│ │ │ ├── layout.tsx
│ │ │ └── page.tsx
│ │ │
│ │ ├── (contester)/               # Contester role pages
│ │ │ ├── layout.tsx
│ │ │ └── page.tsx
│ │ │
│ │ ├── (super-admin)/             # Super admin role pages
│ │ │ ├── layout.tsx
│ │ │ └── page.tsx
│ │ │
│ │ ├── dashboard/                 # Authenticated dashboard pages
│ │ │ ├── layout.tsx
│ │ │ └── page.tsx
│ │ │
│ │ ├──📁 api/                       # Next.js serverless API routes
│ │ │ ├── auth/
│ │ │ │ ├── login/route.ts
│ │ │ │ └── register/route.ts
│ │ │ ├── video/
│ │ │ │ ├── route.ts
│ │ │ │ └── [id]/route.ts
│ │ │ └── health/route.ts
│ │ │
│ │ ├── layout.tsx                  # Global app layout
│ │ ├── page.tsx                    # Root landing page
│ │ ├── not-found.tsx               # 404 page
│ │ └── StoreProvider.tsx           # Redux Provider wrapper
│
│ ├──📁 components/                 # Reusable UI components
│ │ ├── ui/                         # shadcn/ui components
│ │ ├── forms/                      # Form components (react-hook-form)
│ │ ├── charts/                     # Chart.js / Recharts wrappers
│ │ ├── animations/                 # Framer Motion animations
│ │ ├── video/                      # MUX Player / video.js
│ │ ├── icons/                      # lucide-react icon wrappers
│ │ └── common/                     # Modals, navbars, buttons, etc.
│ │ └── pages/                      # page-specific components.
│
│ ├──📁 redux/                      # Centralized Redux store
│ │ ├── features/                   # Slices & RTK Query APIs
│ │ │ ├── auth/
│ │ │ │ ├── authAPI.ts
│ │ │ │ └── authSlice.ts
│ │ │ ├── video/
│ │ │ │ ├── videoAPI.ts
│ │ │ │ └── videoSlice.ts
│ │ │ 
│ │ ├── createAppSlice.ts            # Slice factory helper
│ │ ├── hooks.ts                     # useAppDispatch, useAppSelector
│ │ └── store.ts                     # Redux store setup
│
│ ├──📁 hooks/                       # Global reusable hooks
│ │ ├── useAuth.ts
│ │ ├── useLocale.ts
│ │ └── useDebounce.ts
│
│ ├──📁 lib/                         # Config & third-party setup
│ │ ├── axiosClient.ts
│ │ ├── i18n.ts
│ │ ├── date.ts
│ │ ├── constants.ts
│ │ └── utils.ts
│
│ ├──📁 services/                       # Non-Redux API functions
│ │ ├── authService.ts
│ │ ├── videoService.ts
│ │ └── dashboardService.ts
│
│ ├──📁 styles/                         # Styling
│ │ ├── globals.css
│ │ └── tailwind.css
│
│ ├──📁 types/                          # TypeScript definitions
│ │ ├── auth.d.ts
│ │ ├── video.d.ts
│ │ └── index.d.ts
│
│ ├──📁 utils/                          # Pure helper functions
│ │ ├── dateUtils.ts
│ │ ├── stringUtils.ts
│ │ ├── numberUtils.ts
│ │ └── constants.ts
│
│ └── middleware.ts                      # Auth guards, redirects, etc.
│
├── .env
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json

```

## 🛠️ Technologies Used

- **Framework & Core**
  - [Next.js](https://nextjs.org/) → React framework with App Router
  - [TypeScript](https://www.typescriptlang.org/) → Type safety
  - [Tailwind CSS](https://tailwindcss.com/) → Styling
  - [Shadcn/UI](https://ui.shadcn.com/) → Pre-built UI components

- **Forms & Validation**
  - [React Hook Form](https://react-hook-form.com/) → Form handling
  - [Zod](https://zod.dev/) → Schema validation

- **State Management & Data Fetching**
  - [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
  - [Axios](https://axios-http.com/) → HTTP requests (for special cases)

- **Authentication**
  - [Auth.js](https://authjs.dev/) / [Clerk](https://clerk.com/) → Authentication & user management

- **Video & Media**
  - [Mux Player](https://docs.mux.com/docs/mux-player) / [Video.js](https://videojs.com/) → Video playback

- **UI Enhancements**
  - [Framer Motion](https://www.framer.com/motion/) → Animations
  - [React Virtualized](https://bvaughn.github.io/react-virtualized/) → Virtual lists for performance
  - [Lucide React](https://lucide.dev/) → Icon library

- **Utilities**
  - [Moment.js](https://momentjs.com/) → Date handling
  - [i18next](https://www.i18next.com/) → Localization
  - [Lodash](https://lodash.com/) → Utility functions (optional)

- **Charts & Dashboard**
  - [ApexCharts](https://apexcharts.com/) / [Chart.js](https://www.chartjs.org/) / [Recharts](https://recharts.org/)

- **Testing & Quality**
  - [Jest](https://jestjs.io/) / [Vitest](https://vitest.dev/) → Unit testing
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) → Code quality & formatting

---

## ✅ Best Practices

- Write **reusable components** to avoid duplication.  
- Use **atomic design** principle for organizing components when possible.  
- Keep **separation of concerns** (UI, business logic, API calls).  
- Use **env variables** for secrets/config (never commit them to Git).  
- Optimize for **performance** (lazy loading, memoization, virtualized lists).  
- Regularly update dependencies to avoid vulnerabilities.  

