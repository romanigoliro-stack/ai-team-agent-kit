# AI Team Agent Kit

A lightweight open-source toolkit for teams adopting AI coding agents, structured PR review, and business automation workflows.

Most teams use AI chaotically: vague prompts, inconsistent code review, missing safety rules, and no shared workflow.

AI Team Agent Kit adds a reusable AI-agent operating system to your repository in seconds.

```bash
npx ai-team-agent-kit init
```

This project is not another AI code reviewer. It does not call an LLM, does not require an API key, and does not send your code anywhere. It gives your repository practical files that help people and AI coding agents work with the same rules.

## The problem

Teams often adopt Codex, GitHub Copilot, Claude, Cursor, and other AI coding agents before they agree on how those agents should work.

That usually creates predictable problems:

- vague one-off prompts
- inconsistent pull request review
- missing security checks
- weak product-value review
- no shared rules for AI agents
- no employee training materials
- no repeatable workflow for business automation discovery

## The solution

AI Team Agent Kit gives teams a ready-to-use workflow baseline:

- `AGENTS.md`
- Codex/Copilot-style instructions
- reusable prompt files
- sub-agent pull request review workflow
- product value review prompt
- business automation discovery prompt
- employee AI automation training guide
- AI workflow playbook
- pull request checklist

It helps teams move from:

> Ask ChatGPT random questions.

to:

> Use structured AI-agent workflows for coding, review, documentation, product thinking, and business automation.

## Installation

Run directly with `npx`:

```bash
npx ai-team-agent-kit init
```

Or install globally:

```bash
npm install --global ai-team-agent-kit
ai-team-agent-kit init
```

## Quick start

Add the recommended AI-agent workflow files to the current repository:

```bash
npx ai-team-agent-kit init
```

Check the setup score:

```bash
npx ai-team-agent-kit check
```

Initialize another repository:

```bash
npx ai-team-agent-kit init --target ../my-repo
```

Overwrite existing generated files:

```bash
npx ai-team-agent-kit init --force
```

## Commands

```text
ai-team-agent-kit init [--target <path>] [--force]
ai-team-agent-kit check [--target <path>]
ai-team-agent-kit help
```

### `init`

Copies the template files into the target repository. It creates directories when needed and does not overwrite existing files unless `--force` is used.

### `check`

Scores the target repository from 0 to 100 based on the recommended AI-agent setup.

Score meaning:

- 90-100: excellent
- 70-89: good but incomplete
- 40-69: partial setup
- 0-39: missing AI-agent workflow structure

### `help`

Shows command usage and examples.

## Example output

```text
AI Team Agent Kit check
• Target: /work/my-repo
• Score: 82/100 - Good but incomplete. Add the missing files to standardize the workflow.
✓ Present files: 9/11

Missing files:
⚠ training/ai-automation-for-employees.md
⚠ docs/ai-workflow-playbook.md

Recommendations:
• Add employee training material so non-engineering teams can map automation opportunities.
• Add a workflow playbook so teams know how to use these files consistently.
```

## What files it creates

```text
AGENTS.md
.github/copilot-instructions.md
.github/prompts/code-review-subagents.prompt.md
.github/prompts/pr-product-review.prompt.md
.github/prompts/automation-map.prompt.md
.github/agents/code-reviewer.agent.md
.github/agents/product-value-reviewer.agent.md
.github/agents/automation-coach.agent.md
.github/PULL_REQUEST_TEMPLATE.md
training/ai-automation-for-employees.md
docs/ai-workflow-playbook.md
```

## Before vs After

Before:

> Review this code.

After:

> Review this PR using five roles: Code Quality Reviewer, Security Reviewer, Algorithm Reviewer, Product Value Reviewer, and Documentation Reviewer. For each role, list risks, required changes, suggested improvements, and final decision.

## Who it is for

- developers adopting AI coding agents
- founders and CTOs standardizing AI-assisted delivery
- engineering managers improving pull request review quality
- open-source maintainers creating reviewer consistency
- AI automation consultants helping companies train employees
- teams mapping business workflows for automation

## Why this is useful for teams

AI output quality improves when instructions are shared and structured. A team that keeps prompts in random chats cannot easily review, improve, or reuse them.

Teams need reusable prompts, not one-off chats. Pull request review should include code quality, security, product value, and documentation. Business automation starts with well-described processes, clear owners, known inputs, and human approval boundaries.

This kit gives teams a common operating model for AI-assisted work. The files live in the repository, so they can be reviewed, versioned, and improved like any other part of the engineering process.

## Use cases

- bootstrap AI coding agent rules for a new repository
- standardize pull request review prompts
- add product-value review to technical changes
- teach employees how to identify automation opportunities
- create a lightweight AI adoption playbook for a team
- give consultants a repeatable starting point for client workshops
- help open-source maintainers explain how AI agents should contribute

## Value for developers

- clear coding-agent rules before changes start
- smaller, more focused diffs
- reusable review prompts
- fewer vague review comments
- better documentation and testing expectations

## Value for founders and CTOs

- a practical operating model for AI-assisted development
- improved review quality without adding another service
- reusable employee training material
- safer adoption boundaries for security, data, and product decisions
- no paid integration or API key required

## Value for AI automation consultants

- a credible starting toolkit for client repositories
- practical prompts for automation discovery
- training material for non-engineering employees
- a repeatable workshop structure
- simple files that can be customized per client

## How it works

The package includes a `templates` directory. The `init` command recursively copies those templates into the target repository. The `check` command verifies whether the expected files exist and prints a setup score with missing files and recommendations.

Everything is local file creation. There are no external API calls, no model calls, and no background service.

## Generated workflow examples

The generated files help teams answer questions like:

- What rules should AI coding agents follow in this repository?
- What should a pull request description include when AI assistance was used?
- How should a security reviewer inspect a pull request?
- Does this pull request improve product value?
- What business process is a good candidate for AI automation?
- Where should a human approve an AI-assisted workflow?

## Security and privacy

AI Team Agent Kit only creates local files. It does not read your code for remote analysis, does not send project data to external services, and does not call the OpenAI API or any other model API.

The generated templates include safety guidance, but each team remains responsible for its own security, privacy, compliance, and deployment decisions.

## Roadmap

- template packs for different team sizes
- stricter check mode for continuous integration
- optional custom template configuration
- more repository examples
- more employee automation workshop exercises
- project-specific template variables
- additional maintainer workflow prompts

## Contributing

Contributions are welcome. Good contributions keep the project practical, dependency-free, and useful for real teams.

Before opening a pull request:

```bash
npm run smoke
npm pack --dry-run
```

See `CONTRIBUTING.md` for details.

## License

MIT
