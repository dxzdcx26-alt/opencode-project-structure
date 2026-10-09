# OpenCode Project Structure

A clean, production-ready structure for **OpenCode** projects (converted from the popular Claude Code project structure).

## Quick Start

1. Clone this repo or copy the structure into your project
2. Edit `AGENTS.md` to describe your real project
3. Customize agents, commands, and skills under `.opencode/`
4. Run OpenCode in the project root

```bash
opencode
```

## Structure Overview

| Path | Purpose |
|------|---------|
| `AGENTS.md` | Project context & coding guidelines (read every session) |
| `AGENTS.local.md` | Personal overrides (git-ignored) |
| `opencode.json` | Model, permissions, MCP servers |
| `.opencode/agents/` | Specialized sub-agents |
| `.opencode/commands/` | Custom slash commands (`/review`, `/fix-issue`...) |
| `.opencode/skills/` | Reusable skills (auto-loaded) |
| `.opencode/rules/` | Modular rules (code-style, testing, API conventions) |

## Mapping from Claude Code

| Claude Code | OpenCode |
|-------------|----------|
| `CLAUDE.md` | `AGENTS.md` |
| `CLAUDE.local.md` | `AGENTS.local.md` |
| `.claude/` | `.opencode/` |
| `.mcp.json` | `opencode.json` (mcp section) |
| `rules/` | `.opencode/rules/` |
| `commands/` | `.opencode/commands/` |
| `skills/` | `.opencode/skills/<name>/SKILL.md` |
| `agents/` | `.opencode/agents/` |

## License

MIT
