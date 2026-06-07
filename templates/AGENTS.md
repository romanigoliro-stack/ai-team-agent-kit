# AI Agent Instructions

These are the project-level rules for AI coding agents working in this repository.

The goal is to make AI-assisted work small, safe, reviewable, and aligned with the product. These rules apply to Codex, GitHub Copilot, Claude, Cursor, and similar tools when they are used to inspect or modify this codebase.

## Core rules

- Read the relevant files before making changes.
- Prefer small, focused diffs over broad rewrites.
- Preserve existing architecture unless the task explicitly asks for a redesign.
- Match the local style, naming, formatting, and test patterns.
- Use existing helpers, components, and conventions when they fit.
- Explain assumptions when requirements are incomplete.
- Flag uncertainty instead of hiding it.
- Do not invent business requirements, customer promises, pricing rules, legal rules, or security policies.
- Do not add dependencies unless they are clearly necessary and approved by a human.

## Coding standards

- Optimize for readable code first.
- Keep public interfaces stable unless a breaking change is explicitly requested.
- Make errors actionable.
- Handle realistic edge cases.
- Avoid speculative abstractions.
- Avoid unrelated cleanup in the same change.
- Keep generated code and copied snippets easy to review.
- Remove dead code only when it is clearly in scope.

## Testing expectations

- Run the smallest useful verification for the change.
- Add or update tests when behavior changes.
- Include regression tests for bug fixes when practical.
- Do not claim tests passed unless they were actually run.
- If a test cannot be run, explain why and name the remaining risk.
- For user-facing changes, include manual verification notes when automated tests are not enough.

## Review guidelines

Before finishing, review the change for:

- correctness
- security impact
- performance impact
- product behavior changes
- accessibility when user interfaces are involved
- backward compatibility
- documentation needs
- test coverage
- operational risk

Separate blocking issues from suggestions. Do not overstate confidence. Call out unknowns.

## Safety rules

- Do not expose secrets, tokens, private keys, customer data, or personal data.
- Do not add telemetry, tracking, external network calls, or paid services unless explicitly requested.
- Do not change authentication, authorization, billing, payments, data deletion, migrations, or production deployment behavior without human approval.
- Do not run destructive commands unless a human has explicitly approved the exact action.
- Do not overwrite local work without checking whether it belongs to someone else.
- Do not weaken validation, logging, or monitoring without clear justification.

## When to ask for human approval

Ask a human before:

- changing business logic that is not described in the task
- changing data models, migrations, or retention behavior
- modifying security-sensitive code
- adding dependencies or external services
- deleting files, records, or user data
- changing pricing, billing, plans, or payment behavior
- changing user-facing copy with legal, compliance, or policy meaning
- making broad refactors
- resolving conflicting requirements

## Documentation expectations

- Update documentation when setup, behavior, commands, public interfaces, or workflows change.
- Keep documentation concise and practical.
- Include examples when they reduce ambiguity.
- Do not document speculative future behavior as current behavior.
- If AI assistance was used, summarize what changed and how it was verified.
