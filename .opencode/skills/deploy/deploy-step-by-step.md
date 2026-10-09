# Deploy Checklist

Customize this for your project:

1. `git status` + `git log -5 --oneline`
2. Ensure working tree is clean (or changes are intentional)
3. Run full test suite
4. Run lint / typecheck
5. Build production artifacts
6. Confirm environment variables / secrets
7. Deploy using project script or CI
8. Smoke test the live endpoint
9. Create git tag if successful
