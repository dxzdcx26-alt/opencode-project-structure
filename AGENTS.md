# TaskFlow - Demo Test Project

A simple full-stack task management app used for testing OpenCode.

## Purpose

This is a demo/test project to practice using OpenCode with a realistic structure.

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite (via Prisma)
- **Auth**: NextAuth.js (Credentials provider for demo)
- **Validation**: Zod
- **Testing**: Vitest + Testing Library + Playwright
- **Package Manager**: bun

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Auth pages (login/register)
│   ├── (dashboard)/        # Protected pages
│   ├── api/                # API routes
│   └── layout.tsx
├── components/             # Reusable UI components
│   ├── ui/                 # Base components (Button, Input...)
│   └── tasks/              # Task-related components
├── lib/                    # Utilities, db client, auth config
├── features/               # Feature-based modules
│   ├── tasks/
│   └── users/
└── types/                  # Shared TypeScript types
```

## Important Commands

```bash
bun install                 # Install dependencies
bun dev                     # Start development server
bun test                    # Run unit tests
bun test:e2e                # Run Playwright e2e tests
bun lint                    # Run ESLint
bun build                   # Production build
bun db:push                 # Push Prisma schema to DB
bun db:studio               # Open Prisma Studio
```

## Coding Rules

- Use TypeScript strict mode — **no `any`**
- Prefer Server Components by default, use Client Components only when needed
- All forms must use Zod validation
- API routes must return consistent error shape: `{ error: string, code?: string }`
- Always write unit tests for new business logic
- Use early returns to avoid deep nesting
- Keep components small and focused
- Use `features/` folder for domain logic, `components/` for pure UI

## Database

- Prisma schema lives in `prisma/schema.prisma`
- Main models: `User`, `Task`, `Project`
- Always run `bun db:push` after changing the schema

## Authentication

- NextAuth.js with Credentials provider (for demo only)
- Protected routes use middleware in `src/middleware.ts`
- Session available via `auth()` helper in Server Components

## Testing Guidelines

- Unit tests: put next to the file or in `__tests__` folder
- Use `data-testid` for important interactive elements
- Prefer user-centric assertions (Testing Library)
- E2E tests live in `e2e/`

## What to avoid

- Don't put business logic inside React components
- Don't use `any` or disable TypeScript checks
- Don't commit `.env` or database files
- Don't create giant components (>150 lines)

## Current Focus (Demo)

This project is intentionally simple so we can test OpenCode features:
- Planning with `/plan`
- Code review with `/review`
- Writing tests with `/write-tests`
- Fixing bugs with `/fix-issue`
