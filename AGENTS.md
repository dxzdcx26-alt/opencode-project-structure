# OpenCode Project Template

A clean, production-ready structure for OpenCode projects.

## Purpose

This is a starter template. Copy it into your real project and customize this file.

## Project Structure

```
.
├── AGENTS.md                     # This file - project context & rules
├── AGENTS.local.md               # Personal overrides (git-ignored)
├── opencode.json                 # Model, permissions, MCP
├── .opencode/
│   ├── agents/                   # Specialized sub-agents
│   ├── commands/                 # Custom slash commands
│   ├── skills/                   # Reusable skills
│   └── rules/                    # Modular coding rules
└── README.md
```

## Coding Guidelines

- Prefer clear, readable code over clever one-liners
- Follow existing project conventions strictly
- Always write or update tests when changing behavior
- Use early returns to avoid deep nesting
- Never commit secrets, API keys, or `.env` files
- Prefer small, focused functions and modules
- Explain non-obvious decisions in comments sparingly

## Development Workflow

1. Understand the existing code before making changes
2. Make the smallest correct change possible
3. Run relevant tests / lint after changes
4. Explain what you changed and why

## Common Commands (update these for your project)

- Install: `npm install` / `bun install` / `pnpm install`
- Dev: `npm run dev`
- Test: `npm test`
- Lint: `npm run lint`
- Build: `npm run build`

## Rules Location

Detailed rules live in `.opencode/rules/`. Load them when relevant:
- Code style → `.opencode/rules/code-style.md`
- Testing → `.opencode/rules/testing.md`
- API design → `.opencode/rules/api-conventions.md`
