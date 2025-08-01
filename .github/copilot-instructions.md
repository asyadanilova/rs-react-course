# Copilot Instructions for rs-react-course

## Project Overview

- This is a React + TypeScript project using Vite for development and Vitest for testing.
- Main app code is in `src/`, organized by feature: `components/`, `api/`, `hooks/`, `pages/`, `routes/`, `store/`, `test-utils/`, `utils/`.
- Routing is handled via `react-router-dom` with route definitions in `src/routes/`.
- State management uses Redux Toolkit (`src/store/`).
- API calls are abstracted in `src/api/` and often mocked for tests.

## Developer Workflows

- **Start dev server:** `npm run dev` (uses Vite)
- **Run tests:** `npm test` or `npx vitest` (Vitest)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Debug:** Use Vite's hot reload and Vitest's watch mode for rapid feedback.

## Testing Patterns

- Tests are colocated with source files, named `*.test.tsx`.
- Use `@testing-library/react` for component tests and `vi.mock` for mocking modules.
- API calls (`getAllUniversities`, `searchUniversities`) are always mocked in tests.
- Use `MemoryRouter` or custom `Router` for route-dependent tests.
- Use `createMemoryHistory` for navigation assertions.
- Example: See `ResultsContainer.test.tsx` for best practices in mocking, routing, and UI assertions.
- Use `vi.spyOn` for spying on functions and `vi.fn()` for creating mock functions.
- Use `eslint.config.js` for linting rules and ensure code quality. For example, ensure no any types are used in the codebase.
- Use `src/test-utils/` for shared test utilities, like custom render functions or mock providers

## Project-Specific Conventions

- Use `useLocalStorage` hook for persistent state (see `src/hooks/useLocalStorage.tsx`).
- Pagination logic is standardized via `ITEM_PER_PAGE` from `src/utils/consts.tsx`.
- Error boundaries are implemented in `components/ErrorBoundary/`.
- Asset imports (images, SVGs) are handled via direct import and used in JSX.
- Details panels are rendered via React Router's `<Outlet context={...} />` pattern.
- All navigation is performed via `useNavigate` from `react-router-dom`.

## Integration Points

- External API: University data (see `src/api/`).
- Redux store slices in `src/store/`.
- Custom hooks in `src/hooks/`.
- Shared assets in `src/assets/`.

## Examples

- For a new paginated list, follow the pattern in `ResultsContainer.tsx` and its test.
- For new API integrations, abstract calls in `src/api/` and mock them in tests.
- For new pages, add to `src/pages/` and update route definitions in `src/routes/routes.ts`.

---

If any section is unclear or missing, please provide feedback so this guide can be improved for future AI agents.
