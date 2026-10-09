# TaskFlow

A clean, modern Task / Todo app built with **Next.js 15 + TypeScript + Tailwind CSS**.

Designed to work perfectly with [OpenCode](https://opencode.ai).

## Features

- Add, edit, complete, and delete tasks
- Filter by All / Active / Completed
- Clear completed tasks
- Data persists in `localStorage`
- Beautiful, responsive UI

## Quick Start

```bash
# Clone
git clone https://github.com/dxzdcx26-alt/opencode-project-structure.git
cd opencode-project-structure

# Install
bun install          # or npm install / pnpm install

# Run
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## OpenCode Ready

This project includes a complete OpenCode setup:

- `AGENTS.md` – project context
- `.opencode/agents/` – code-reviewer, security-auditor, planner...
- `.opencode/commands/` – `/review`, `/plan`, `/fix-issue`, `/write-tests`...
- `.opencode/skills/` and `.opencode/rules/`

Just run:

```bash
opencode
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server |
| `bun build` | Build for production |
| `bun start` | Start production server |
| `bun lint` | Lint code |
| `bun test` | Run tests |

## License

MIT
