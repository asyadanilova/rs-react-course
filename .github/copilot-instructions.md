# Copilot Instructions for rs-react-course

## Project Overview

- This is a React + TypeScript project using **Next.js** for development and Vitest for testing.
- Main app code is in `src/`, organized by feature: `components/`, `hooks/`, `pages/`, `services/`, `store/`, `test-utils/`, `utils/`.
- Routing is handled via **Next.js file-based routing** in `src/pages/`.
- State management uses Redux Toolkit (`src/store/`), with **RTK Query** for data fetching (see `src/services/university.tsx`).
- There is **no `api/` folder**; all API queries are defined in RTK Query services.

## Developer Workflows

- **Start dev server:** `npm run dev` (uses Next.js)
- **Run tests:** `npm test` or `npx vitest` (Vitest)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Debug:** Use Next.js hot reload and Vitest's watch mode for rapid feedback.

## Testing Patterns

- Tests are colocated with source files, named `*.test.tsx`.
- Use `@testing-library/react` for component tests.
- **Mock RTK Query endpoints** from `src/services/university.tsx` in tests.
- Use Next.js's `next/router` mocks for route-dependent tests.
- Use `vi.spyOn` for spying on functions and `vi.fn()` for creating mock functions.
- Use `eslint.config.js` for linting rules and ensure code quality. For example, ensure no `any` types are used in the codebase.
- Use `src/test-utils/` for shared test utilities, like custom render functions or mock providers.

## Project-Specific Conventions

- Use `useLocalStorage` hook for persistent state (see `src/hooks/useLocalStorage.tsx`).
- Pagination logic is standardized via `ITEM_PER_PAGE` from `src/utils/consts.tsx`.
- Error boundaries are implemented in `components/ErrorBoundary/`.
- Asset imports (images, SVGs) are handled via direct import and used in JSX.
- Details panels can be rendered using Next.js dynamic routes and context.
- All navigation is performed via Next.js's `useRouter` hook.

## Integration Points

- External API: University data via RTK Query service (`src/services/university.tsx`).
- Redux store slices in `src/store/`.
- Custom hooks in `src/hooks/`.
- Shared assets in `src/assets/`.

## Examples

- For a new paginated list, follow the pattern in `ResultsContainer.tsx` and its test.
- For new API integrations, add endpoints to `src/services/university.tsx` and mock them in tests.
- For new pages, add to `src/pages/` using Next.js conventions.

---

If any section is unclear or missing, please provide feedback so this guide can be improved for future AI agents.
