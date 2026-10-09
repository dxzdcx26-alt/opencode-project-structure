# OpenCode Project Template

A clean, production-ready structure for OpenCode projects.

## Purpose

This repository is a starter template for using OpenCode effectively.  
Copy this structure into your real project and customize `AGENTS.md` to match your codebase.

## Project Structure

```
.
├── AGENTS.md                     # Project context & rules (read every session)
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

## Development Workflow

1. Understand the existing code before making changes
2. Make the smallest correct change possible
3. Run relevant tests / lint after changes
4. Explain what you changed and why

## Commands (examples — update for your project)

- Install: `npm install` / `bun install` / `pnpm install`
- Dev: `npm run dev`
- Test: `npm test`
- Lint: `npm run lint`
- Build: `npm run build`

## How OpenCode uses this file

OpenCode automatically loads `AGENTS.md` at the start of every session.  
Keep it under ~200 lines. Put detailed rules in `.opencode/rules/` and reference them when needed.
