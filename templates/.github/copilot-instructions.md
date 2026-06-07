# Coding Agent Instructions

Follow these instructions when assisting with code changes in this repository.

- Prefer small, reviewable changes.
- Read existing code before proposing new structure.
- Preserve existing architecture unless the task asks for a redesign.
- Match local style, naming, formatting, and test patterns.
- Explain assumptions when the task is incomplete.
- Add or update tests when behavior changes.
- Keep explanations specific to the actual diff.
- Avoid inventing product requirements, business rules, or acceptance criteria.
- Flag uncertainty and ask for human review when needed.

Ask for human review before changing:

- authentication or authorization
- payments, billing, pricing, or plans
- data deletion, retention, or migrations
- security-sensitive code
- production deployment settings
- external integrations or network calls
- destructive commands or irreversible actions

Before finishing, check:

- Does the change solve the stated task?
- Is the diff as small as practical?
- Are edge cases and failure paths handled?
- Were relevant tests or manual checks run?
- Is documentation needed?
