---
name: deploy
description: Deploy the application step by step with safety checks
---

## What I do

Guide the user through a safe deployment process.

## When to use me

Use this skill when the user asks to deploy, release, or ship the application.

## Steps

1. Check current git status and ensure working tree is clean (or intentional)
2. Confirm the target environment (staging / production)
3. Run tests and lint if available
4. Build the project
5. Show the deployment command(s) and wait for confirmation before running destructive steps
6. Verify the deployment after it finishes

Always prefer the project's existing deploy scripts or CI pipeline over ad-hoc commands.
