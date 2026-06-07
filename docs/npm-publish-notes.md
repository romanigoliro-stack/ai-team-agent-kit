# npm Publish Notes

AI Team Agent Kit is published on npm:

```text
https://www.npmjs.com/package/ai-team-agent-kit
```

Published version:

```text
0.1.1
```

Public usage was verified from a clean temporary directory:

```bash
npx ai-team-agent-kit help
npx ai-team-agent-kit init --target ./test-public-install
npx ai-team-agent-kit check --target ./test-public-install
```

The public `npx` flow creates all 13 workflow files and `check` returns `100/100`.
