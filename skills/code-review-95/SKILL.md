---
name: code-review-95
description: Review code changes with multiple independent subagents and an evidence-based remediation loop that must reach at least 9.5/10. Use when the user asks to run their code-review skill, a multi-agent review loop, or a review with a 9.5/10 acceptance gate.
---

# Code Review 9.5

Produce a defect-first review of the requested code change. Do not treat a numerical score as a substitute for concrete evidence.

## Scope and authorization

1. Resolve the repository, governing `AGENTS.md` files, review target, base revision, current revision, and complete changed-file list before reviewing.
2. Preserve unrelated working-tree changes. Never commit, push, deploy, call live providers, mutate a CRM, or perform other external side effects unless the user separately authorizes that action.
3. A request only to review or report is read-only. A request to complete the review loop or reach the 9.5 threshold authorizes narrow fixes to validated defects inside the reviewed change, plus local tests, but does not authorize the external actions above.
4. If the review target is ambiguous but the current working tree clearly contains the active change, review the working-tree diff against `HEAD` and state that choice.
5. If the user asks to review a newly built automation or an entire project, inspect that complete implementation, including untracked source files, configuration, data storage and integration boundaries. Do not silently reduce a whole-project request to an empty diff. For a repository without commits, record a file manifest and hashes as the reviewed snapshot.

## Independent review round

Run at least two independent reviewer subagents in every scoring round. Use three when capacity allows.

- Give every reviewer the same raw scope, base and repository instructions, but assign complementary lenses such as functional correctness and product invariants; security, privacy, concurrency and side-effect safety; and tests, compatibility, error handling and maintainability.
- Do not prime reviewers with suspected defects, proposed fixes, another reviewer's conclusions, or the score desired for a pass.
- Reviewers are read-only. They must inspect the actual diff and surrounding call sites, and may run relevant local checks.
- If fewer than two independent reviewers can return a result, do not claim that this skill passed.

Each reviewer must return:

- actionable findings ordered by `P0` through `P3`, with `path:line`, failure mechanism and supporting evidence;
- checks actually run and material test gaps;
- residual risks;
- an honest score from `0.0` to `10.0` and explicit mandatory fixes.

Use this scoring anchor:

- `9.5-10.0`: release-quality for the reviewed scope; no unresolved blocker or mandatory defect;
- `8.0-9.4`: sound but has at least one meaningful defect, unverified invariant or material test gap;
- `6.0-7.9`: multiple meaningful defects or an important incomplete path;
- below `6.0`: unsafe, substantially incorrect or not meaningfully verifiable.

## Validation and remediation loop

1. Independently reproduce or validate every proposed finding against the code. Reject speculative, pre-existing or out-of-scope findings and explain why.
2. If fixes are authorized, implement only validated in-scope fixes and add focused regression coverage where practical.
3. Run the repository's relevant targeted validators, then proportionate broad checks such as typecheck, lint, build and `git diff --check`.
   For automations, verify business calculations against independently determined expected results, missing input, repeated runs and failed integrations where relevant. Distinguish tests with fixtures from a real account connection and actual delivery. Mock success cannot prove a live integration works; mark required unavailable checks as blockers.
4. Start a fresh independent scoring round on the resulting diff. Reviewers must inspect the code and test evidence rather than accepting the implementer's explanation.
5. Continue while a validated mandatory defect remains and a safe in-scope fix is possible. Never inflate a score to terminate the loop.

The review passes only when all of these are true:

- at least two independent final reviewers returned results;
- the lowest final reviewer score is at least `9.5/10` (do not average away a low score);
- no unresolved `P0` or `P1`, no reviewer-designated mandatory defect, and no unjustified material test gap remains;
- relevant tests and static checks pass;
- the final scoring round covers the current diff, with no later unreviewed code changes.

If the gate cannot be met, stop with the actual lowest score, blockers and next corrective action. Never report the review as complete or passed merely because time, tokens or reviewer capacity ran out.

## Final response

Lead with `PASS` or `NOT PASSED` and the lowest verified score. Include:

- reviewed base, target and changed-file scope;
- reviewer score table;
- validated findings fixed, rejected or still open;
- checks actually passed and checks not run;
- residual risks and confirmation of any external actions not performed.

Keep the report concise, but never omit a finding needed to reproduce or fix a defect.
