# TaskFlow

A simple and beautiful task management app built with Next.js + TypeScript.

## Purpose

Personal task manager that runs entirely in the browser. Data is saved to `localStorage`.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **State**: React useState + localStorage
- **Package Manager**: bun / npm / pnpm

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page (client component)
│   └── globals.css
├── components/
│   └── tasks/
│       ├── TaskForm.tsx    # Add new task
│       ├── TaskList.tsx    # List of tasks
│       ├── TaskItem.tsx    # Single task (toggle, edit, delete)
│       └── FilterBar.tsx   # All / Active / Completed filter
└── types/
    └── task.ts             # Task & Filter types
```

## Important Commands

```bash
bun install          # or npm install / pnpm install
bun dev              # Start dev server → http://localhost:3000
bun build            # Production build
bun start            # Start production server
bun lint             # Run ESLint
bun test             # Run tests (Vitest)
```

## Features

- Add new tasks
- Mark tasks as complete / active
- Edit task title (double-click or pencil icon)
- Delete tasks
- Filter: All / Active / Completed
- Clear all completed tasks
- Persist data in localStorage

## Coding Rules

- Use TypeScript strict mode — **no `any`**
- Prefer small, focused components
- Use early returns
- Keep business logic out of pure UI components when possible
- Use `clsx` for conditional class names
- Accessible buttons (aria-label)

## What to avoid

- Don't use `any`
- Don't put large logic inside JSX
- Don't break the existing component structure without reason
