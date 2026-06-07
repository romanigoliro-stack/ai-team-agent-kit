# Open Source Application Draft

## Project

AI Team Agent Kit is a lightweight open-source toolkit that helps software teams and open-source maintainers adopt AI coding agents in a structured and safe way.

I built AI Team Agent Kit to help software teams and open-source maintainers adopt Codex-style AI coding agents in a structured and safe way.

Instead of using AI assistants with vague one-off prompts, the toolkit gives repositories a reusable AI-agent operating system: `AGENTS.md` rules, Codex/Copilot instructions, sub-agent pull request review prompts, product value review workflows, automation discovery templates, and employee training materials.

The project is intentionally lightweight and API-free, so any team can use it immediately with Codex, GitHub Copilot, Claude, Cursor, or other AI coding agents.

The project now includes security-aware pull request review templates and human approval rules for risky changes such as authentication, authorization, payments, user data, secrets, migrations, destructive operations, and third-party integrations.

My broader goal is to help companies train employees to use AI not as a toy, but as a reliable workflow for software development, code review, documentation, and business process automation.

## Why it matters

Many teams already use AI tools, but they do it inconsistently. Prompts live in private chats, pull request review misses security and product value, and employees do not have a repeatable method for finding business automation opportunities.

AI Team Agent Kit turns those practices into files that live in the repository. They can be reviewed, versioned, adapted, and improved over time.

## Who it helps

- open-source maintainers who want clearer AI contribution rules
- engineering teams adopting Codex and similar coding agents
- founders and engineering leaders who need safe AI-assisted workflows
- consultants helping companies train employees on AI automation
- product and operations teams mapping business processes for automation

## Relevance to Codex and AI coding agents

Codex-style agents work better when repositories contain clear instructions, review expectations, safety boundaries, and documentation standards. This project gives maintainers a fast way to add those materials without building a custom workflow from scratch.

## Maintainer value

The toolkit supports:

- pull request review consistency
- maintainer guidance for AI-assisted contributions
- documentation expectations
- security and human review boundaries
- security-aware pull request review templates
- product value review
- repeatable business automation discovery

## Current status

- Node.js command-line package
- `init` and `check` commands
- no external dependencies
- no API key required
- 11 generated workflow files
- open-source community files
- smoke test workflow

## Roadmap

- more template packs for different team sizes
- stricter check mode for continuous integration
- optional project-specific template variables
- more maintainer workflow prompts
- more employee automation training exercises
- examples for common repository types
