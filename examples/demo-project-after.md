# Demo Project After

After running:

```bash
npx ai-team-agent-kit init
```

the repository has a shared baseline for AI-assisted work:

```text
AGENTS.md
.github/copilot-instructions.md
.github/prompts/code-review-subagents.prompt.md
.github/prompts/pr-product-review.prompt.md
.github/prompts/automation-map.prompt.md
.github/prompts/security-review.prompt.md
.github/agents/code-reviewer.agent.md
.github/agents/product-value-reviewer.agent.md
.github/agents/automation-coach.agent.md
.github/agents/security-reviewer.agent.md
.github/PULL_REQUEST_TEMPLATE.md
training/ai-automation-for-employees.md
docs/ai-workflow-playbook.md
```

Example review request after setup:

```text
Review this pull request using five roles: Code Quality Reviewer,
Security Reviewer, Algorithm Reviewer, Product Value Reviewer,
and Documentation Reviewer. For each role, list risks, required
changes, suggested improvements, missing tests, product impact,
and final decision.
```

The team now has reusable rules, review prompts, security review guidance, agent roles, training material, and a playbook that can evolve with the repository.
