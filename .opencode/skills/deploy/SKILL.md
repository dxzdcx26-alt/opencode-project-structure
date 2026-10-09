---
name: deploy
description: Safely deploy the application with checks and confirmation steps
---

## What I do

Guide a safe deployment process with clear checkpoints.

## When to use me

When the user asks to deploy, release, ship, or push to production/staging.

## Process

1. Check git status and recent commits
2. Confirm target environment
3. Run tests and lint if available
4. Build the project
5. Show the exact deploy command(s) and wait for confirmation before running anything destructive
6. Verify the deployment after it finishes

Always prefer the project's existing CI/CD or deploy scripts over ad-hoc commands.
