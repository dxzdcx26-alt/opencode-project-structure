# OpenCode Project Structure

A clean, production-ready structure for OpenCode projects.

## Project Overview

This is a starter template for OpenCode (open-source AI coding agent).

## Project Structure

```
project/
├── AGENTS.md                     # Project overview & coding guidelines
├── AGENTS.local.md               # Personal overrides (git-ignored)
├── opencode.json                 # Main config (model, permissions, MCP)
├── .opencode/
│   ├── agents/                   # Specialized sub-agents
│   ├── commands/                 # Custom slash commands
│   ├── skills/                   # Auto-loaded skills
│   └── rules/                    # Modular coding rules
└── ...
```

## Coding Guidelines

- Prefer clear, readable code over clever one-liners
- Follow existing project conventions
- Write tests for new features
- Use TypeScript strict mode when applicable

## Commands

- Build / Test / Lint: follow the project's package.json scripts
- Always run tests before finishing a task

## How it works

1. OpenCode reads `AGENTS.md` automatically every session
2. Loads skills, agents, and commands from `.opencode/`
3. Connects to tools via MCP (configured in `opencode.json`)
4. You get better, safer, and more consistent results
