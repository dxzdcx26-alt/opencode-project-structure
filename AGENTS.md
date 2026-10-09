# TaskFlow

A simple and beautiful task management app built with Next.js + TypeScript.

## Purpose

Personal task manager that runs entirely in the browser. Data is saved to `localStorage`.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS (with dark mode via `class`)
- **Icons**: lucide-react
- **State**: React useState + localStorage
- **Package Manager**: bun / npm / pnpm

## Features

- Add, edit, complete, delete tasks
- Priority: low / medium / high
- Due date with overdue highlight
- Filter: All / Active / Completed
- Dark mode toggle (persisted)
- Data persists in localStorage

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/tasks/
│   ├── TaskForm.tsx
│   ├── TaskList.tsx
│   ├── TaskItem.tsx
│   └── FilterBar.tsx
└── types/task.ts
```

## Important Commands

```bash
bun install
bun dev
bun build
bun start
bun lint
```

## Coding Rules

- TypeScript strict — no `any`
- Small focused components
- Support both light and dark mode with Tailwind `dark:` classes
- Use `clsx` for conditional classes
- Accessible controls (aria-label)
