# AI Automation for Employees

This guide helps employees identify practical AI automation opportunities in everyday work.

The goal is not to automate everything. The goal is to find repetitive, well-understood processes where AI can assist safely and humans keep control of important decisions.

## What you will learn

You will learn how to:

- describe a business process clearly
- write better prompts
- work with AI agents
- verify AI output
- decide when to involve a human
- find repetitive work suitable for automation

## How to describe a business process

Use this structure:

- Process name: what the work is called
- Trigger: what starts it
- Owner: who is responsible
- Inputs: what information is needed
- Outputs: what must be produced
- Tools: systems, documents, and communication channels involved
- Steps: what happens from start to finish
- Decisions: where judgment is required
- Exceptions: what makes the process difficult
- Risks: what could go wrong

Example:

```text
Process name: Weekly customer feedback summary
Trigger: Support feedback export every Friday
Owner: Customer success manager
Inputs: Feedback comments, account type, severity, date
Output: Summary of themes and suggested follow-up
Tools: Support system, spreadsheet, shared document
Human decision: Which themes should be escalated
```

## How to write better prompts

Bad prompt:

```text
Summarize this.
```

Improved prompt:

```text
Summarize this customer feedback for a weekly leadership update.
Group comments by theme, include three representative examples,
flag urgent issues, and list questions that need human follow-up.
Do not invent missing customer details.
```

Bad prompt:

```text
Automate onboarding.
```

Improved prompt:

```text
Map our new employee onboarding process.
Identify triggers, inputs, outputs, owners, tools, manual steps,
decision points, risks, and one safe AI-assisted pilot that still
requires human approval before messages are sent.
```

## How to work with AI agents

- Give the agent a clear role.
- Provide the process, input, and desired output.
- State what the agent must not do.
- Ask for assumptions and uncertainties.
- Ask for a structured result.
- Keep humans responsible for approvals.

Useful agent roles:

- drafter
- summarizer
- classifier
- checklist reviewer
- research assistant
- workflow mapper
- quality checker

## How to verify AI output

Check:

- Did it use the provided information?
- Did it invent facts?
- Did it miss important exceptions?
- Is the output complete enough to use?
- Are sensitive details handled correctly?
- Would a customer, employee, or manager be harmed if this were wrong?
- Does a human need to approve the result?

## When to involve a human

Involve a human before:

- sending external messages
- making financial decisions
- making hiring or people decisions
- changing access permissions
- deleting records
- making legal, compliance, or policy decisions
- acting on uncertain AI output
- using sensitive customer or employee data

## How to find repetitive work suitable for AI automation

Look for work that is:

- repeated every day, week, or month
- based on documents, messages, tickets, forms, or spreadsheets
- time-consuming but not highly creative
- easy for a human to check
- owned by a clear team
- valuable if done faster or more consistently

Good starting examples:

- meeting notes to follow-up drafts
- ticket classification
- customer feedback summaries
- document checklist review
- internal report drafts
- sales call preparation
- recurring status updates

## First pilot worksheet

```text
Process:
Owner:
Trigger:
Inputs:
Outputs:
Tools:
Manual steps:
Decision points:
Exceptions:
Risks:
Possible AI role:
Human approval needed:
Estimated time saved:
Implementation difficulty:
Expected business value:
Success criteria:
```
