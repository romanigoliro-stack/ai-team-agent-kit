# Sample Output

## `ai-team-agent-kit init`

```text
AI Team Agent Kit init
• Target: /work/my-repo
• Mode: keep existing files

✓ created .github/agents/automation-coach.agent.md
✓ created .github/agents/code-reviewer.agent.md
✓ created .github/agents/product-value-reviewer.agent.md
✓ created .github/agents/security-reviewer.agent.md
✓ created .github/copilot-instructions.md
✓ created .github/prompts/automation-map.prompt.md
✓ created .github/prompts/code-review-subagents.prompt.md
✓ created .github/prompts/pr-product-review.prompt.md
✓ created .github/prompts/security-review.prompt.md
✓ created .github/PULL_REQUEST_TEMPLATE.md
✓ created AGENTS.md
✓ created docs/ai-workflow-playbook.md
✓ created training/ai-automation-for-employees.md

Done. Your repository now has a structured AI-agent workflow baseline.
✓ Created: 13
✓ Overwritten: 0
✓ Skipped: 0

Next step: run ai-team-agent-kit check to verify the setup.
```

## `ai-team-agent-kit check`

```text
AI Team Agent Kit check
• Target: /work/my-repo
• Score: 85/100 - Good but incomplete. Add the missing files to standardize the workflow.
✓ Present files: 11/13

Missing files:
⚠ .github/prompts/security-review.prompt.md
⚠ training/ai-automation-for-employees.md

Recommendations:
• Add reusable prompt files for code review, product review, security review, and automation discovery.
• Add employee training material so non-engineering teams can map automation opportunities.
```
