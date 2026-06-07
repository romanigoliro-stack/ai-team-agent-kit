# Security

AI Team Agent Kit is a local file-generation tool.

## What the tool does not do

- It does not call external APIs.
- It does not call model providers.
- It does not send project data anywhere.
- It does not require an API key.
- It does not collect telemetry.
- It does not run background services.

The `init` command copies local template files into a target repository. The `check` command checks whether expected files exist.

## Reporting vulnerabilities

Please report security issues through GitHub security advisories when available, or open a private report with enough detail to reproduce the issue.

Do not include secrets, private keys, customer data, or sensitive project files in a public issue.

## Scope

Security reports are especially useful for:

- unsafe file writes
- path handling issues
- accidental secret exposure
- packaging mistakes
- misleading security claims in templates

Generated templates are guidance. Each team remains responsible for its own security, privacy, compliance, and deployment decisions.
