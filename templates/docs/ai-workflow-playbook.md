# AI Workflow Playbook

This playbook explains how a team can use the AI agent files in this repository.

## Purpose

The goal is to make AI-assisted work consistent, reviewable, and safe. These files give agents and humans shared expectations for coding, review, documentation, product value, and automation discovery.

## Recommended team workflow

1. Start with a clear issue, goal, or pull request description.
2. Ask the coding agent to read `AGENTS.md` before changing files.
3. Keep the first implementation small.
4. Run the smallest useful verification.
5. Use the pull request template to capture value, risk, tests, and AI assistance.
6. Use the multi-role review prompt for technical review.
7. Use the product review prompt when value, scope, or strategy fit is uncertain.
8. Ask a human to decide on security, data, product, and business tradeoffs.

## Daily AI use cases

- explain unfamiliar code
- draft small code changes
- generate tests for changed behavior
- review pull requests using defined roles
- summarize issues and support tickets
- draft documentation updates
- map business processes for automation
- identify risks before release

## Pull request review flow

1. Author fills out `.github/PULL_REQUEST_TEMPLATE.md`.
2. Reviewer uses `.github/prompts/code-review-subagents.prompt.md`.
3. Product or engineering lead uses `.github/prompts/pr-product-review.prompt.md` when value is unclear.
4. Human reviewer decides whether to approve, request changes, or escalate.

Review should cover:

- code quality
- security
- algorithmic correctness
- product value
- documentation
- missing tests
- rollback or mitigation

## Automation discovery flow

1. Pick one recurring business process.
2. Use `.github/prompts/automation-map.prompt.md`.
3. Capture trigger, inputs, outputs, owner, tools, manual steps, decision points, exceptions, and risks.
4. Identify a possible AI agent role.
5. Define human approval points.
6. Estimate time saved and business value.
7. Run a small pilot with sample or low-risk data.

## Safety rules

AI agents should not independently:

- approve security-sensitive changes
- change billing, pricing, or payment behavior
- modify production deployment settings
- delete data
- send external communications
- make legal, compliance, or policy decisions
- change access control
- act on sensitive data without approval

## Team rituals

Suggested operating rhythm:

- Daily: use shared prompts for coding, review, and documentation tasks.
- Weekly: review one AI-assisted pull request and improve prompts if needed.
- Monthly: review whether the generated files still match team practices.
- Quarterly: run an automation mapping session with employees.

## Adoption checklist

- [ ] `AGENTS.md` matches the repository.
- [ ] Coding-agent instructions are visible in `.github/copilot-instructions.md`.
- [ ] Pull request template includes business value, risk, tests, and AI assistance.
- [ ] Review prompts are used in real pull requests.
- [ ] Product-value review is used for ambiguous or high-impact work.
- [ ] Employee automation training has an owner.
- [ ] Human approval boundaries are clear.
- [ ] The team updates prompts when review patterns change.

## Using this kit with AI coding tools

Use the generated files with Codex, GitHub Copilot, Claude, Cursor, or similar tools by pasting or referencing the relevant file in your workflow.

Examples:

- Ask a coding agent to read `AGENTS.md` before editing.
- Ask a pull request reviewer to use `.github/prompts/code-review-subagents.prompt.md`.
- Ask a product lead to use `.github/prompts/pr-product-review.prompt.md`.
- Ask an operations team member to use `.github/prompts/automation-map.prompt.md`.

## Keeping the system useful

Treat these files as living team agreements. Update them when review expectations, tooling, or risk boundaries change. Remove instructions that are too vague to enforce. Add examples when recurring issues appear in review.
