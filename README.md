# OpenCode Project Structure

Clean, production-ready project structure for **OpenCode** (the open-source AI coding agent).

Converted and improved from the popular Claude Code project structure.

## Quick Start

```bash
git clone https://github.com/dxzdcx26-alt/opencode-project-structure.git
cd opencode-project-structure
opencode
```

Or copy the whole structure into your existing project.

## What's Included

| Path | Purpose |
|------|---------|
| `AGENTS.md` | Main project context & coding guidelines |
| `AGENTS.local.md` | Personal overrides (git-ignored) |
| `opencode.json` | Model, permissions, MCP configuration |
| `.opencode/agents/` | Specialized sub-agents |
| `.opencode/commands/` | Custom slash commands (`/review`, `/fix-issue`) |
| `.opencode/skills/` | Reusable skills |
| `.opencode/rules/` | Modular rules (style, testing, API) |

## Mapping from Claude Code

| Claude Code | OpenCode |
|-------------|----------|
| `CLAUDE.md` | `AGENTS.md` |
| `CLAUDE.local.md` | `AGENTS.local.md` |
| `.claude/` | `.opencode/` |
| `.mcp.json` | `opencode.json` → `mcp` section |
| `rules/` | `.opencode/rules/` |
| `commands/` | `.opencode/commands/` |
| `skills/` | `.opencode/skills/<name>/SKILL.md` |
| `agents/` | `.opencode/agents/` |

## Recommended Next Steps

1. Edit `AGENTS.md` to describe **your real project**
2. Set your preferred model in `opencode.json`
3. Add or customize agents / skills / commands as needed
4. Run `/init` inside OpenCode to let it improve `AGENTS.md` automatically

## License

MIT
