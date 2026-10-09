# OpenCode Project Structure

Clean, production-ready project structure for **OpenCode** — the open-source AI coding agent.

Converted and improved from the popular Claude Code project structure.

## Quick Start

```bash
git clone https://github.com/dxzdcx26-alt/opencode-project-structure.git
cd opencode-project-structure
opencode
```

Or copy the structure into your existing project.

## Full Structure

```
.
├── AGENTS.md                     # Project context & coding guidelines
├── AGENTS.local.md               # Personal overrides (git-ignored)
├── opencode.json                 # Model, permissions, MCP
├── .env.example                  # Example environment variables
├── LICENSE
├── README.md
└── .opencode/
    ├── agents/
    │   ├── code-reviewer.md
    │   ├── security-auditor.md
    │   ├── test-writer.md
    │   ├── planner.md
    │   └── docs-writer.md
    ├── commands/
    │   ├── review.md             # /review
    │   ├── fix-issue.md          # /fix-issue
    │   ├── write-tests.md        # /write-tests
    │   ├── plan.md               # /plan
    │   ├── docs.md               # /docs
    │   └── refactor.md           # /refactor
    ├── skills/
    │   ├── deploy/
    │   ├── refactor/
    │   ├── write-tests/
    │   └── code-review/
    └── rules/
        ├── code-style.md
        ├── testing.md
        ├── api-conventions.md
        └── git-conventions.md
```

## Available Slash Commands

| Command | Description |
|---------|-------------|
| `/review` | Thorough code review |
| `/fix-issue` | Investigate and fix a bug |
| `/write-tests` | Write or improve tests |
| `/plan` | Create a step-by-step plan |
| `/docs` | Generate or improve documentation |
| `/refactor` | Safely refactor code |

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
3. Copy `.env.example` → `.env` and add your keys (never commit `.env`)
4. Run `/init` inside OpenCode to let it improve `AGENTS.md`
5. Start working — try `/plan` or `/review`

## License

MIT
