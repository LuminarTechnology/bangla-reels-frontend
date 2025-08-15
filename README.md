# Bangla Reel-Short Frontend

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
## Development Process Instructions

1. Before starting work, pull the latest changes from the dev-mode branch.
2. Once your work is complete, create a Pull Request (PR) to the dev-mode branch.
3. After testing is complete, the changes will be merged into the main branch.