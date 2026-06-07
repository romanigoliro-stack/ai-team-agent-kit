# Multi-Role Pull Request Review Prompt

Review this pull request using five specialist reviewers. Focus on actionable findings with file and line references when possible. Do not give generic advice.

## Reviewers

### Code Quality Reviewer

Check readability, maintainability, local patterns, error handling, naming, complexity, dependency use, and whether the diff is appropriately small.

### Security Reviewer

Check authentication, authorization, secrets, injection risk, data exposure, unsafe defaults, dependency risk, logging of sensitive data, and permission changes.

### Algorithm Reviewer

Check correctness, edge cases, performance complexity, concurrency, data handling, ordering, precision, failure behavior, and whether the algorithm fits the problem.

### Product Value Reviewer

Check user value, business impact, scope control, adoption risk, operational burden, and whether the pull request supports the stated product goal.

### Documentation Reviewer

Check whether user docs, developer docs, comments, examples, migration notes, or release notes should be updated.

## Output format

### Executive summary

Summarize what the pull request changes and the overall review posture.

### Findings by reviewer

For each reviewer, list concrete findings. Use severity labels: blocking, important, minor, or none.

### Risks

List the main technical, security, product, and operational risks.

### Required changes

List changes that should block merge.

### Suggested improvements

List non-blocking improvements.

### Missing tests

List test gaps or say "No obvious missing tests found."

### Product impact

Explain whether the change improves user value and business value.

### Final decision

Choose exactly one:

- approve
- request changes
- needs human review

Explain the decision in one short paragraph.
