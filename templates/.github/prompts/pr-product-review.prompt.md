# Product Value Pull Request Review Prompt

Review this pull request for product and business value. Do not focus only on code correctness. Decide whether the work is worth shipping and whether the scope fits the value.

## Evaluate

### User value

- What user problem does this solve?
- Is the user impact specific and understandable?
- Does the change improve a real workflow?
- Could it create confusion, friction, or support burden?

### Business impact

- What business outcome does this support?
- Does it reduce cost, increase conversion, improve retention, improve quality, reduce risk, or speed up delivery?
- Is the impact measurable or at least clearly observable?

### Return on investment

- Is the expected value proportionate to the implementation cost?
- Does the change avoid overbuilding?
- Are there cheaper alternatives with similar value?

### Complexity

- Is the scope controlled?
- Is the implementation larger than the problem requires?
- Does it add configuration, process, or maintenance cost?

### Maintainability

- Can the team support this after merge?
- Are ownership, monitoring, and follow-up clear?
- Does it create hidden operational burden?

### Adoption risk

- Who needs to change behavior?
- What could block adoption?
- Does the rollout need training, documentation, or migration support?

### Automation potential

- Does this change remove manual work?
- Does it make future automation easier?
- Could an AI agent safely assist with future maintenance or operations?

### Product strategy fit

- Does this pull request support the stated product strategy?
- Is the work connected to a known goal, customer need, or measurable business priority?

## Output format

### Product summary

Describe the product value in two to four sentences.

### Value rating

Rate the value as high, medium, low, or unclear.

### Return on investment

Explain whether the value justifies the complexity.

### Scope concerns

List overbuilt, underbuilt, or unclear areas.

### Adoption risks

List risks that could prevent users or teams from getting value.

### Recommendations

List practical improvements that would increase value or reduce risk.

### Final decision

Choose exactly one:

- strong product value
- acceptable product value
- unclear product value
- needs human product review
