# npm Publish Blocker

Publishing to npm is currently blocked by the npm account security policy.

Local npm authentication works, but `npm publish --access public` returns:

```text
Two-factor authentication or granular access token with bypass 2fa enabled is required to publish packages.
```

The package is otherwise ready:

- version: `0.1.1`
- package name: `ai-team-agent-kit`
- dry run package contents verified
- smoke tests pass
- `init` creates all 13 expected workflow files
- `check` returns `100/100` after initialization

Manual unblock commands:

```bash
npm login
cd "/Users/romanigol/Documents/AI Team Agent Kit"
npm publish --access public
```

If npm still requires extra security, complete one of these in the npm account:

- enable two-factor authentication for publishing
- create a granular access token with publish permission and two-factor bypass enabled

Do not paste tokens into chat. If using a token, configure it locally through npm's documented authentication flow.

After publishing, verify public usage:

```bash
TMPDIR=$(mktemp -d)
cd "$TMPDIR"
npx ai-team-agent-kit help
npx ai-team-agent-kit init --target ./test-public-install
npx ai-team-agent-kit check --target ./test-public-install
```
